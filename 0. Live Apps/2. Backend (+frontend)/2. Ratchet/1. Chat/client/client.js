





//-----[Задействованные переменные]
var target,				// целевой элемент события
		addMessage,		// функция, которая добавляет новое сообщение в самый верх окна с сообщениями
		clearChat;		// Функция, которая очищает чат




//-----[Подготовка]


//1. Подготовить весь необходимый HTML и CSS.
//   - В т.ч. должна быть кнопка "очистить", при нажатии на которую окно
//     чата полностью очищается.

	// есть


//2. Получить ссылки на нижеуказанные элементы, и сохранить их
//		все в объекте elements:
//	  - На окно с опубликованными сообщениями
//	  - На поле, куда пользователь должен ввести свой nickname
//	  - На поле, куда пользователь должен ввести своё сообщение
//	  - На кнопку "отправить"
//	  - На кнопку "очистить"
elements = {};
elements.mesWin = document.getElementById('messagesWindow');
elements.nickname = document.getElementById('nickname');
elements.message = document.getElementById('message');
elements.sendButton = document.getElementById('sendButton');
elements.clearButton = document.getElementById('clearButton');


//3. Написать функцию, которая добавляет новое сообщение в самый верх
//		окна с сообщениями. Она должна принимать следующие аргументы:
//	 	- Никнэйм
//	 	- Дату и время
//	 	- Текст сообщения
addMessage = function(timestamp, nickname, message) {

	// Получить строку с датой и временем
	var timeDate = timestamp;

	// Опубликовать сообщение
	elements.mesWin.insertAdjacentHTML('afterBegin',
			'<p class="messageBox">' +
			'<span class="messageHeader">'+nickname+' ('+timeDate+') '+'</span><br>' +
			'<span>'+message+'</span>' +
			'</p>');

};



//4. Написать функцию, которая полностью очищает окно чата. В ней:
//   - Найти и удалить все HTML-элементы, дочерние для эл-та с id='messageWindow",
//     класс которых messageBox
clearChat = function() {

	// Найти элементы для удаления
	var elems = document.querySelectorAll('.messageBox');

	console.log(elems);

	// Удалить все найденные эл-ты из DOM
	for(var i=0; i<elems.length; i++) {
		elements.mesWin.removeChild(elems[i]);
	}

};



//-----[Установка WebSocket-соединения, его настройка, приём сообщений от сервера]


//5. Установить WebSocket-соединение с сервером.
var socket = new WebSocket("ws://localhost:8080");


//6. Назначить функцию-обработчик onopen, которая срабатывает при открытии
//   WebSocket-соединения, и в ней выполнить следующее:
//   - Написать в консоль: "WebSocket-соединение установлено"
//   - Очистить содержимое чата с помощью функции из п.4
socket.onopen = function() {

	//Написать в консоль: "WebSocket-соединение установлено"
	console.log("WebSocket-соединение установлено");

	//Очистить содержимое чата с помощью функции из п.4
	clearChat();

};


//7. Назначить функцию-обработчик onclose, которая срабатывает при закрытии
//   WebSocket-соединения, и в ней выполнить следующее:
//   - Вывести в консоль информацию, чисто/грязно закрыто соединение.
//   - Вывести в консоль код закрытия, и причину.
socket.onclose = function(event) {

	//Написать в консоль: "WebSocket-соединение закрыто"
	if(event.wasClean) console.log("WebSocket-соединение закрыто (чисто)");
	else console.log("WebSocket-соединение закрыто (обрыв)");

	// Вывести в консоль код и сообщение с пояснениями, почему закрыто соединение
	console.log('Код: ' + event.code + ' причина: ' + event.reason);

};


//8. Назначить функцию-обработчик onmessage, которая срабатывает при получении
//   сообщения из WebSocket-соединения, и в ней выполнить следующее:
//   - Получить от сервера JSON-строку с текущим содержимым чата.
//   - Десериализовать эту JSON-строку в объект.
//   - Пробежаться по собственным св-вам объекта, полученного в п.6,
//     и с помощью функции из п.3 вывести все все полученные сообщения
//		 в окно чата.
socket.onmessage = function(event) {

	//Получить от сервера JSON-строку с текущим содержимым чата.
	var data = event.data;
	console.log("С сервера получена строка: " + event.data);

	//Десериализовать эту JSON-строку в объект.
	data = JSON.parse(data);
	console.log(data);


	//Пробежаться по собственным св-вам объекта, полученного в п.6,
	//и с помощью функции из п.3 вывести все все полученные сообщения
	//в окно чата.
	for(var key in data) {
		if (data.hasOwnProperty(key)) {

			addMessage( data[key]['timestamp'],
									data[key]['nickname'],
									data[key]['message'] );

		}
	}


};


//9. Назначить функцию-обработчик onerror, которая срабатывает при возникновении
//   ошибки в WebSocket-соединении, и в ней выполнить следующее:
//   - Написать в консоль, что возникла ошибка, и поступившее сообщение об ошибке.
socket.onerror = function(error) {

	console.log("Ошибка " + error.message);

};



//-----[Настройка кнопки "отправить сообщение"]


//10. Назначить функцию-обработчик события onclick кнопке "Отправить".
//		В ней выполнить следующее: [11,12]
elements.sendButton.onclick = function(event) {

	//11. Подготовить для отправки JSON-строку. Отправить надо будет
	//    значения nickname и message.

		// Подготовить объект
		var body = {
			nickname: elements.nickname.value,
			message: elements.message.value
		};

		// Сериализовать объект
		var jsonBody = JSON.stringify(body);


	//12. Послать подготовленную в п.11 JSON-строку в открытое WebSocket-соединение.
	socket.send(jsonBody);


};


//-----[Настройка отправки сообщения нажатием клавиши Enter]

//13. Назначить функцию-обработчик события onkeydown текстовому полю, в который
//    вводят текст сообщения. В ней выполнить следующее: [14,15]
elements.message.onkeydown = function(event) {


	//14. Кроссбраузерно получить объект-событие
	event = event || window.event;


	//15. Проверить введенный символ:
	//    - Если e.keyCode == 13, то выполнить: [11,12]
	//    - В ином случае завершить работу функции.

		// Если был нажат не enter, завершить работу функции-обработчика
		if(event.keyCode !== 13) return;


		// Подготовить для отправки JSON-строку. Отправить надо будет
		// значения nickname и message.

			// Подготовить объект
			var body = {
				nickname: elements.nickname.value,
				message: elements.message.value
			};

			// Сериализовать объект
			var jsonBody = JSON.stringify(body);


		// Послать подготовленную в п.11 JSON-строку в открытое WebSocket-соединение.
		socket.send(jsonBody);

		// Очистить поле для ввода
		elements.message.value = '';

};


//-----[Настройка кнопки "очистка чата"]


//16. Назначить функцию-обработчик события onclick кнопке "Очистить".
//		В ней выполнить следующее: [17]
elements.clearButton.onclick = function(event) {


	//17. Очистить чат.
	clearChat();

};























