

// Найти все HTML-элементы input в документе
var inputs = document.getElementsByTagName('input');

for(var i=0; i<inputs.length; i++) {

	var input = inputs[i];
	if(input.type !== 'file') continue;

	var url = input.getAttribute('data-uploadto');
	if(!url) continue;

	input.addEventListener('change', function(){

		// Проверить, если файла нет - ничего не делать
			var file = this.files[0];
			if(!file) return;

		// Сначала извлечь имя и расширения файла, и отправить их
		// 1-ым AJAX-запросом. А данные эти приберечь до 2-го AJAX-запроса,
		// чтобы потом сохранить этот файл на диск с правильным именем и расширением

			// Вычислить расширение файла
			var fullPath = input.value;					// напр.: 'C:\fakepath\Simpsons 1.jpeg'

			var fileExtension = fullPath.slice(
					fullPath.lastIndexOf('.') + 1); // напр.: 'jpeg'

			var fileName = fullPath.slice(
				fullPath.lastIndexOf('\\') + 1,
				fullPath.lastIndexOf('.')
			);																	// напр.: 'Simpsons 1'

			// Подготовить строку в формате URLencoded к отправке:
			var text = fileName + '.' + fileExtension;
			text = encodeURIComponent(text.replace('%20', '+'));
			text = 'filename='+text;

			// Послать имя файла + его расширение 2-ым AJAX-запросом,
			// а данные передать в формате URL encode, чтобы они попали
			// в POST['filename']:
			var xhr2 = new XMLHttpRequest();
			xhr2.open('POST', url);
			xhr2.onreadystatechange = function() {
				if(xhr2.readyState === 4 && xhr2.status === 200) {
					document.body.insertAdjacentHTML('beforeEnd','<mark>'+xhr2.responseText+'</mark>');
					console.log(xhr2.responseText);
				}
			};

 			xhr2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
			xhr2.send(text);


		// Затем извлечь сам файл, и отправить его 2-ым AJAX-запросом

		var xhr = new XMLHttpRequest();
		xhr.open('POST', url);

		// Подготовка обработчика событий
		xhr.onreadystatechange = function() {

			if(xhr.readyState === 4 && xhr.status === 200) {
				document.body.insertAdjacentHTML('beforeEnd','<mark>'+xhr.responseText+'</mark>');
				console.log(xhr.responseText);
			}

		};

		xhr.send(file);


	});

}




