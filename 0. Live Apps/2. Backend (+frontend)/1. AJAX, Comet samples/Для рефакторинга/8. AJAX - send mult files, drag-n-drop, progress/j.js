

// Ищет все элемента с классом 'fileDropTarget' и регистрирует
// обработчики событий механизма drag-n-drop, чтобы они могли откликаться
// на операции буксировки файлов. При сбросе файлов на эти элементы
// они выгружают их на URL-адрес, указанный в атрибуте data-uploadto
var elts = document.getElementsByClassName('fileDropTarget');
for(var i = 0; i < elts.length; i++) {
	var target = elts[i];
	var url = target.getAttribute('data-uploadto');
	if(!url) continue;
	console.log('Найден элемент класса fileDropTarget №'+i);
	createFileUploadDropTarget(target, url);
}





// Следит за ходом выполнения операции выгрузки и позволяет отвергнуть
// выгрузку файла. Можно было бы обрабатывать сразу несколько параллельных
// операций выгрузки, но это значительно усложнило бы отображение хода
// их выполнения
function createFileUploadDropTarget(target, url) {

	// 3 заготовки текста для приемника и получение на него ссылки
	var receiver = document.getElementById('receiverText');
	var receiverTextWait = 'Бросайте файлы здесь...';
	var receiverTextWant = 'Я готов принять этот файл...';
	var receiverTextUploading = 'Я занят. Подождите...';

	// Установить на приемник текст receiverTextWait
	receiver.innerHTML  = receiverTextWait;

	var uploading = false;
	console.log(target, url);

	// Событие ondragenter - возбуждается при входе буксируемого элемента
	// внутрь элемента, за которым закреплено это событие
	target.ondragenter = function(e) {
		console.log('Возбудилось событие dragenter');

		// Игнорировать попытку сброса, если элемент уже занят выгрузкой другого файла
		if(uploading) return;

		// Если объект DOMStringList, который лежит в dataTransfer.types, содержит
		// одним из своих значений 'Files', значит буксируется файл, тогда изменить
		// текст принимающего элемента на receiverTextWant
		var types = e.dataTransfer.types;
		console.log(types);
		if(types && ((types.contains && types.contains('Files'))
							|| (types.indexOf && types.indexOf('Files') !== -1)))
		{
			receiver.innerHTML  = receiverTextWant;
			return false;
		}
	};

	// При буксировке файла над приемником
	target.ondragover = function(e) {
		if(!uploading) return false;
	};

	// При буксировке при пересечении границы приемника изнутри вовне,
	// установить текст применика receiverTextWant
	target.ondragleave = function(e) {
		if(!uploading) {
			receiver.innerHTML = receiverTextWait;
		}
	};






	// Когда буксируемый файл сброшен на приемник
	target.ondrop = function(e) {
		console.log('Возбудилось событие ondrop');

		// Если закачка другого файла уже идет, не принимать новый.
		if(uploading) return false;

		// Получить объект FileList содержащий буксируемые файлы
		var files = e.dataTransfer.files;

		// Если в FileList есть > 0 файлов
		if(files && files.length) {

			// Пометить, что уже идет передача файла
			uploading = true;

			// добавить приемнику текст receiverTextUploading
			receiver.innerHTML  = receiverTextUploading;

			// Добавить снизу от приемника текст с иноформацией о
			// выгружаемых файлах:
			var message = 'Выгружаются следующие файлы: <ul>';
			for(var i=0; i<files.length; i++) {
				message += '<li>' + files[i].name + '</li>';
			}
			message += '</ul>';

			document.getElementById('receiverText')
					.insertAdjacentHTML('afterEnd', message);


			// С помощью асинхронного AJAX-запроса методом POST послать
			// на сервер - скрипту p.php - объект FormData отбуксированным
			// на приемник файлом или файлами
			var xhr = new XMLHttpRequest();
			xhr.open('POST', url);
			var body = new FormData();
			for(var i=0; i< files.length; i++) {
				body.append(i, files[i]);
			}

			// Выводить прогресс выгрузки прямо на приемнике
			xhr.upload.onprogress = function(e) {
				console.log(123);
				if(e.lengthComputable) {
					receiver.innerHTML =
							Math.round(e.loaded/e.total*100) + '% завершено<br>';
				}
			};

			// Когда выгрузка завершается
			xhr.upload.onload = function(e) {
				receiver.innerHTML = receiverTextWait;
				receiver.insertAdjacentHTML('afterEnd','Выгрузка завершена успешно!<br>');
				uploading = false;
			};

			// Если выгрузка завершена с ошибкой
			xhr.upload.onerror = function(e) {
				receiver.innerHTML = receiverTextWait;
				receiver.insertAdjacentHTML('afterEnd','Выгрузка не завершена, возникла ошибка!<br>');
				uploading = false;
			};



			// добавить после приемника кнопку, позволяющую отменить запрос
			document.body.xhr = xhr;
			document.body.abortReq = function() {
				document.body.xhr.abort();
			};
			receiver.insertAdjacentHTML('afterEnd',
			'<button id="abortRequest" onclick="document.body.abortReq();">Отменить запрос</button>');


			// Запрос отменен с помощью abort
			xhr.onabort = function(e) {
				receiver.innerHTML = receiverTextWait;
				receiver.insertAdjacentHTML('afterEnd','Выгрузка отменена пользователем!<br>');
				uploading = false;

				// Удалить кнопку "отменить запрос"
				document.body.removeChild(document.getElementById('abortRequest'));
			};


			// Пришел ответ с сервера
			xhr.onreadystatechange = function() {
				if(xhr.readyState === 4 && xhr.status === 200) {
					// Вывести на экран ответ сервера
					document.body.insertAdjacentHTML('beforeEnd','<br>Ответ с сервера: <br>'+xhr.responseText);

					console.log('123');
				}
			};


			xhr.send(body);		// отправить AJAX-запрос
			return false;				// завершить работу обработчика события


		}
	}





}
