/**
 * Это простейший клиент для подключению к серверу через WebSocket
 *
 * > Он устанавливает WebSocket-соединение с сервером по указанному адресу.
 * > И выводит в консоль сообщения при возникновении следующих событий:
 * 	 - Соединение установлено
 * 	 - Соединение закрыто
 * 	 - Получено сообщение
 * 	 - Возникла ошибка
 *
 *
 */


// Установить WebSocket-соединение через порт 8080
var socket = new WebSocket("ws://localhost:8080");

// Назначить функции-обработчики событий

	// При установке соединения
	socket.onopen = function() {
		console.log("Соединение установлено.");
	};

	// При закрытии соединения
	socket.onclose = function(event) {
		if (event.wasClean) {
			console.log('Соединение закрыто чисто');
		} else {
			console.log('Обрыв соединения'); // например, "убит" процесс сервера
		}
		console.log('Код: ' + event.code + ' причина: ' + event.reason);
	};

	// При получении сообщения
	socket.onmessage = function(event) {
		console.log("Получены данные " + event.data);
	};

	// При возникновении ошибки
	socket.onerror = function(error) {
		console.log("Ошибка " + error.message);
	};


// Отправка сообщения

	// Получить ID инпута и кнопки
	var input = document.getElementById('input');
	var button = document.getElementById('send');

	// Назначить функцию-обработчик для события onclick на кнопке:
  button.onclick = function() {

		// Получить текущее содержимое input
		var text = input.value;

		// Отправить в открытое WebSocket соединение этот текст
		socket.send(text);

	};










