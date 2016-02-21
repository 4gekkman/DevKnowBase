

	// Проверка - поддерживает ли браузер SSE
	if(typeof(EventSource) !== 'undefined') {
		console.log('Браузер поддерживает Server-Sent Events');
	} else {
		console.log('Браузер НЕ поддерживает Server-Sent Events');
	}


	// Подписаться на получение новых сообщений с помощью объекта EventSource
	var sse = new EventSource('p.php');

	sse.onmessage = function(event) {
		console.log('Новое сообщение!');
		console.log('event.data = '+event.data);
		var msg = event.data;
		var element = document.getElementById('messages');
		element.innerHTML += '<p>'+msg+'</p>';
	};


	// Функция для отправки сообщения на сервер при щелчке на кнопку
	function sendMessage() {

		// Подготовить сообщение
		var nick = document.getElementById('nick').value;
		var text = document.getElementById('input').value;
		var msg = nick + ': ' + text;

		console.log('msg = '+msg);

		// Отправить сообщение на сервер
		var xhr = new XMLHttpRequest();
		xhr.open("POST", 'p.php');

			// Подготовка обработчика событий
				xhr.onreadystatechange = function() {
					if(xhr.readyState === 4 && xhr.status === 200) {
						console.log('xhr.responseText = '+xhr.responseText);
					}
				};

		xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
		xhr.send(msg);
		input.value = '';
	}
