/**
 * Задача:
 *
 * > Стоят следующие задачи:
 * 	 - Создать 2 эл-та input type='text' и 1 эл-т input type='file'.
 * 	 	 В них пользователь может ввести данные и загрузить файл.
 * 	 - Сформировать из переданных пользователем данных строку
 * 	 	 в формате multipart вручную.
 * 	 - Создать кнопку, при нажатии на которую:
 * 	 	 - Вышеуказанная строка методом POST отправляется на сервер в
 * 	 	 	 теле XHR-запроса.
 * 	 - Сервер при получении данных автоматически их извлекает
 * 	 	 (из массивов $_POST и $_FILES)
 * 	 	 - Файл он сохраняет в папку "upload" в директории приложения
 * 	 	 - Имя и расширение файла выводит в выходной поток, подписывая,
 * 	 	 	 что это именно имя и расширение полученного файла. Также выводит
 * 	 	 	 абсолютный адрес сохранённого на диске файла.
 * 	 	 - Данные, полученные в $_POST выводит с помощью var_dump, помечая,
 * 	 	 	 что это именно данные из $_POST
 *
 *
 *
 *
 * > Архитектура решения (клиент):
 *
 * 1. Подготовить весь необходимый HTML и CSS:
 * 		- Форму с 2-мя текстовыми полями input type='text' и
 * 			1-м полем input type='file'
 * 		- Кнопку для отправки XHR-запроса методом post
 * 		- Элемент div, в котором будет отображаться ответ сервера
 *
 * 2. > Получить ссылки на нижеуказанные элементы, и сохранить их
 * 			все в объекте refs.
 * 			- На саму форму form
 * 			- На каждый элемент формы.
 * 			- На поле p с id="stringBody"
 * 			- На кнопку "отправить XHR-запрос"
 * 			- На div для получения ответа от сервера
 *		> Также написать функцию для извлечения из эл-та input type='file'
 *			необходимых для этого приложения данных.
 *			- Функция должна вернуть их в виде объекта data
 *
 *
 * [Шаг 1 и Шаг 2]
 *
 * 3. Написать функцию, которая принимает 3 пары имя/значение, всего 6 параметров,
 * 	 формирует из них строку в формате multipart/form-data, и возвращает её.
 *	 - name - значение индекса, по которому можно будет найти этот файл в
 *   					суперглобальном массиве $_FILES
 * 	 - filename - настоящее имя и расширение файла.
 * 	 - fileCode - двоичный код файла
 *	 > Функция должна возвращать объект с 2-мя свойствами:
 * 		 - body: получившуюся строку в формате multipart/form-data
 * 		 - boundary: строка boundary, без которой не послать XHR-запрос
 *
 * 4. Применить функцию из п.3, используя стартовые значения из формы,
 * 		после загрузки всего документа (после события onload)
 *
 *
 * 5. Назначить форме form функцию-обработчик (1 на двоих) событий:
 * 		- onchange - для отлавливания изменений на input type='file'
 * 		- onkeydown - для отлавливания изменений на текстовых полях
 * 		В ней выполнить следующее: [6-8]
 *
 * 6. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
 * 		Также, кроссбраузерно получить target-элемент
 *
 * 7. Проверить, если target - это не один из input-элементов формы, то
 * 		завершить работу функции-обработчика.
 *
 * 8. Записать в innerHTML элемента p строку в формате multipart/form-data,
 * 		которую вернёт функция из п.3.
 *		- Причём здесь надо пропустить действия браузера по умолчанию вперёд в
 *			стеке задач, т.к. иначе в input.value всё еще будут старые значения
 *      на текущий момент. Сделать это с помощью польз. ф-ии setImmediate.
 *
 *
 * [Шаг 3]
 *
 * 9. Назначить функцию-обработчик события onclick для кнопки, которая
 * 		должна отправить запрос на сервер. В ней выполнить
 * 		следующее: [10]
 *
 * 10. Отправить на сервер XHR-запрос:
 * 		 - Методом POST
 * 		 - В качестве тела послать подготовленную на шаге 2 строку-тело.
 * 		 - Послать заголовок:
 * 		 	 "Content-Type: multipart/form-data"
 * 		 - Подготовить функцию-обработчик события onreadystatechange для
 * 		 	 приёма ответа, и в ней выполнить следующе: [11]
 *
 * 11. Получить ответ с сервера и записать его в innerHTML блока div под
 * 		 нажатой кнопкой.
 *
 *
 *
 *
 * > Архитектура решения (сервер):
 *
 * 1. Проверить, если суперглобальный массив $_POST не пуст, то:
 * 		- Подписать, что это содержимое массива $_POST
 * 		- Вывести его содержимое в выходной буфер с помощью var_dump
 *
 * 2. Проверить, если суперглобальный массив $_FILES не пуст, то:
 * 		- Сохранить файл в папку uploads, а если её нет, то предварительно создать.
 * 	  - Вывести в выходной буфер информацию, указывающую, что далее будет
 * 	  	информация о закаченном файле.
 * 	  - Вывести настоящее имя и расширение файла.
 * 	  - Выевести сообщение, что файл успешно сохранён по такому-то адресу.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */



// Задействованны переменные
var target,					// целевой элемент события
		refs,						// в этом объекте лежат ссылки на все нужные объекты
		makeMultipart,	// функция, которая возвращает строку в формате multipary/form-data
		extractData,		// функция, которая извлекает из формы необходимые данные
		xhr;						// объект XMLHttpRequest





//2. > Получить ссылки на нижеуказанные элементы, и сохранить их
//			все в объекте refs.
//			- На саму форму form
//			- На каждый элемент формы.
//			- На поле p с id="stringBody"
//			- На кнопку "отправить XHR-запрос"
//			- На div для получения ответа от сервера
//		> Также написать функцию для извлечения из эл-та input type='file'
// 			необходимых для этого приложения данных.
//			- Функция должна вернуть их в виде объекта data

	// Получение ссылок
	refs = {};
	refs.form = document.getElementById('myForm');
	refs.nameInput = document.getElementById('name');
	refs.ageInput = document.getElementById('age');
	refs.fileInput = document.getElementById('file');
	refs.stringBody = document.getElementById('stringBody');
	refs.sendButton = document.getElementById('send');
	refs.divResponse = document.getElementById('divResponse');

	// Функция, которая извлекает из эл-тов формы все необходимые данные
	extractData = function() {

		// Создать объект с необходимыми данными для файла
		var data = {
			'name': "",
			'filename': "",
			'fileCode': ""
		};

		// Заполнить объект data, только если файл загружен:
		if(refs.fileInput.files[0]) {

			// Получить имя файла

				// Получить полный путь к файлу
				var fullPath = refs.fileInput.value;				// напр.: 'C:\fakepath\Simpsons 1.jpeg'

				// Получить имя файла вместе с его расширением
				if(fullPath.lastIndexOf('\\') !== -1) {
					data.filename = fullPath.slice(fullPath.lastIndexOf('\\') + 1);
				} else {
					data.filename = fullPath;
				}

			// Выбрать имя индекса для файла
			data.name = 'myFile';

			// Записать в data.fileCode сам код файла
			data.fileCode = refs.fileInput.files[0];

		}

		return data;

	};




//3. Написать функцию, которая принимает 3 пары имя/значение, всего 6 параметров,
//	 формирует из них строку в формате multipart/form-data, и возвращает её.
//	 - name - значение индекса, по которому можно будет найти этот файл в
//  					суперглобальном массиве $_FILES
//	 - filename - настоящее имя и расширение файла.
//	 - fileCode - двоичный код файла
//	 > Функция должна возвращать объект с 2-мя свойствами:
//		 - body: получившуюся строку в формате multipart/form-data
//		 - boundary: строка boundary, без которой не послать XHR-запрос
makeMultipart = function(a1,a2,b1,b2,name,filename,fileCode) {


	// Сформируем boundary (спец. разделитель в формате multipart/form-data)

		// Формируем случайное числовое значение для boundary
		var boundary = String( Math.random() ).slice(2);

		// Формируем среднюю часть boundary
		var boundaryMiddle = '--' + boundary + '\r\n';

		// Формируем заключительную часть boundary
		var boundaryEnd = '--' + boundary + '--\r\n';

	// Сформируем тело в виде массива
	var body = ['\r\n'];

		// Добавить текстовое поле №1
		body.push('Content-Disposition: form-data; name=' + a1 +
							'\r\n\r\n'+a2+'\r\n');

		// Добавить текстовое поле №2
		body.push('Content-Disposition: form-data; name=' + b1 +
							'\r\n\r\n'+b2+'\r\n');

		// Добавить файл

			// Добавить файл, только если все переданные файловые параметры не пусты
			if(name && filename && fileCode) {

				body.push('Content-Disposition: form-data; ' +
									'name="'+name+'"; ' +
									'filename='+filename+'\r\n' +
									'Content-Type: application/octet-stream\r\n\r\n'+fileCode+'\r\n');

			}


	// Соединить все эл-ты массива в строку с разделителем
	// boundaryMiddle, а в конце добавить boundaryEnd
	body = body.join(boundaryMiddle) + boundaryEnd;


	// Вернуть объект, содержащий:
	// - получившуюся строку в формате multipart/form-data
	// - boundary
	return {
		"body": body,
		"boundary": boundary
	};

};


//4. Применить функцию из п.3, используя стартовые значения из формы,
//		после загрузки всего документа (после события onload)
window.onload = function() {


	// Создать объект с необходимыми данными для файла
	var data = extractData();


	// Вывести на экран текущее значение строки в формате multipart/form-data
	refs.stringBody.innerHTML = '<pre>' +
			makeMultipart(	'name', refs.nameInput.value,
											'age', refs.ageInput.value,
												data.name,
												data.filename,
												data.fileCode).body +
												'</pre>';

};



//5. Назначить форме form функцию-обработчик (1 на двоих) событий:
//		- onchange - для отлавливания изменений на input type='file'
//		- onkeydown - для отлавливания изменения на текстовых полях
//		В неё выполнить следующее: [6-8]
refs.form.onchange = refs.form.onkeydown = function(event) {


	//6. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
	//		Также, кроссбраузерно получить target-элемент

		//Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
		event = fixEvent(event);

		//Кроссбраузерно получить target-элемент
		target = 	event && event.target ||
									event.srcElement;


	//7. Проверить, если target - это не один из input-элементов формы, то
	//		завершить работу функции-обработчика.
	if(target === refs.nameInput ||
		 target === refs.ageInput ||
		 target === refs.fileInput) {}
	else return;



	//8. Записать в innerHTML элемента p строку в формате multipart/form-data,
	//		которую вернёт функция из п.6.
	//		- Причём здесь надо пропустить действия браузера по умолчанию вперёд в
	//			стеке задач, т.к. иначе в input.value всё еще будут старые значения
	//      на текущий момент. Сделать это с помощью польз. ф-ии setImmediate.
	setImmediate(function() {

		// Создать объект с необходимыми данными для файла
		var data = extractData();


		// Вывести на экран текущее значение строки в формате multipart/form-data
		refs.stringBody.innerHTML = '<pre>' +
				makeMultipart(	'name', refs.nameInput.value,
												'age', refs.ageInput.value,
													data.name,
													data.filename,
													data.fileCode).body +
													'</pre>';

	});



};




//9. Назначить функцию-обработчик события onclick для кнопки, которая
//		должна отправить запрос на сервер. В ней выполнить
//		следующее: [10]
refs.sendButton.onclick = function() {



	//10. Отправить на сервер XHR-запрос:
	//		 - Методом POST
	//		 - В качестве тела послать подготовленную на шаге 2 строку-тело.
	//		 - Послать заголовок:
	//		 	 "Content-Type: multipart/form-data"
	//		 - Подготовить функцию-обработчик события onreadystatechange для
	//		 	 приёма ответа, и в ней выполнить следующе: [11]

		// Подготовить тело запроса

			// Создать объект с необходимыми данными для файла
			var data = extractData();

			// Получить объект с телом и boundary
			var object = makeMultipart(	'name', refs.nameInput.value,
																	'age', refs.ageInput.value,
																	data.name,
																	data.filename,
																	data.fileCode)

			// Получить тело запроса
			var body = object.body;

			// Получить boundary
			var boundary = object.boundary;


		// Подготовить XHR-запрос
		xhr = new XMLHttpRequest();
		xhr.open('POST','server.php',true);

			// Отправить заголовок multipart/form-data:
			// - Он также должен содержать boundary
			xhr.setRequestHeader('Content-Type', 'multipart/form-data;' +
																					 'charset=UTF-8;' +
																					 'boundary=' + boundary);

			// Подготовить функцию-обработчик события onreadystatechange
			xhr.onreadystatechange = function(event) {

				//Проверить, если xhr.readyState != 4, завершить работу функции-обработчика.
				if(xhr.readyState != 4) return;


				//11. Получить ответ с сервера и записать его в innerHTML блока div под
				//		 нажатой кнопкой.
				refs.divResponse.innerHTML = xhr.responseText;


			};


		// Отправить XHR-запрос на сервер

			// Отправить данные
			xhr.send(body);


};













// Вспомогательные функции



	//FixEvent - FIX всех IE-несовместимостей при работе с событиями
	// в 1-й функции
	function fixEvent(e, _this) {
		e = e || window.event;

		if (!e.currentTarget) e.currentTarget = _this;
		if (!e.target) e.target = e.srcElement;

		if (!e.relatedTarget) {
			if (e.type == 'mouseover') e.relatedTarget = e.fromElement;
			if (e.type == 'mouseout') e.relatedTarget = e.toElement;
		}

		if (e.pageX == null && e.clientX != null ) {
			var html = document.documentElement;
			var body = document.body;

			e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
			e.pageX -= html.clientLeft || 0;

			e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
			e.pageY -= html.clientTop || 0;
		}

		if (!e.which && e.button) {
			e.which = e.button & 1 ? 1 : ( e.button & 2 ? 3 : (e.button & 4 ? 2 : 0) );
		}

		return e;
	}



//setImmediate				| (пользовательская функция) позволяет поставить выполнение
//											func в очередь на ближайшее время после текущего кода, и без задержек
// > Это эмуляция ф-ии setImmediate
// > Добавляется как метод window (а если дело происходит в IE>=10, где такая
//   функция уже есть, то не добавляется)
// > Здесь используется прием cross-domain-messaging:
//		> Позволяет скрипту из одного документа передавать текстовые сообщения
//			скрипту в другом документе, не взирая на ПОП.
//		> Отправить сообщение можно методом Window.postMessage(). Он производит
//			асинхронную отправку сообщения.
//		> Получить сообщение можно обработчиком события onmessage.
// > Работает во всех браузерах, кроме IE<=7


	// Проверить cледующее:
	// > Если это IE>=10, и ф-ия setImmediate есть, то ничего не добавлять.
	// > В ином случае, добавить объекту window метод setImmediate:
	if (!window.setImmediate) window.setImmediate = (function() {
		var head = { }, tail = head; // очередь вызовов, 1-связный список

		var ID = Math.random(); // уникальный идентификатор

		// Подготовка функции-перехватчика события message из другого документа
		function onmessage(e) {
			if(e.data != ID) return; // не наше сообщение
			head = head.next;
			var func = head.func;
			delete head.func;
			func();
		}

		// Кросдоменное назначение обработчика событий onmessage
		if(window.addEventListener) { // IE9+, другие браузеры
			window.addEventListener('message', onmessage, false);
		} else { // IE8
			window.attachEvent( 'onmessage', onmessage );
		}

		// > Если это не IE<=7, то поставить func в конец текущей очереди
		// > Если это IE<=7, то вызвать для func обычный setTimeout.
		return window.postMessage ? function(func) {
			tail = tail.next = { func: func };
			window.postMessage(ID, "*");
		} :
		function(func) { // IE<8
			setTimeout(func, 0);
		};
	}());

