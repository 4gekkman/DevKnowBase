/**
 * Задача:
 *
 * > Стоят следующие задачи:
 * 	 - Создать 3 эл-та input type='text'.
 * 	 	 В них пользователь может ввести данные.
 * 	 - Сформировать из переданных пользователем данных строку
 * 	 	 в формате JSON.
 * 	 - Создать кнопку, при нажатии на которую:
 * 	 	 - Вышеуказанная строка методом POST отправляется на сервер в
 * 	 	 	 теле XHR-запроса.
 * 	 - Сервер должен:
 * 	 	 - Извлечь необработанные POST-данные из входного буфера.
 * 	 	 - Перевести из JSON-формата в массив с помощью функции json_decode
 * 	 	 - С помощью var_dump вывести полученный массив в выходной буфер.
 *
 *
 * Архитектура решения (клиент):
 *
 * 1. Подготовить весь необходимый HTML и CSS:
 * 		> Шаг 1
 * 			- Форма с 3-мя текстовыми полями input type='text'.
 * 		> Шаг 2
 * 			- div, в котором отображается в реальном времени сформированная
 * 				JSON-строка из данных, вводимых пользователем в форму
 * 		> Шаг 3
 * 			- Кнопку для отправки XHR-запроса методом post
 * 			- Элемент div, в котором будет отображаться ответ сервера
 *
 * 2. Получить ссылки на нижеуказанные элементы, и сохранить их
 * 		все в объекте refs.
 * 		- На саму форму form
 * 		- На каждый из 3-х элементов формы.
 * 		- На поле p с id="stringBody"
 * 		- На кнопку "отправить XHR-запрос"
 * 		- На div для получения ответа от сервера
 *
 *
 * [Шаг 1 и Шаг 2]
 *
 * 3. Написать функцию, которая принимает 3 пары имя/значение,
 * 		формирует из них строку в формате JSON, и возвращает её.
 *
 * 4. Применить функцию из п.3, используя стартовые значения из формы,
 * 		после загрузки всего документа (после события onload)
 *
 * 5. Назначить форме form функцию-обработчик onkeydown - для отлавливания
 * 		изменений на текстовых полях. В ней выполнить следующее: [6-8]
 *
 * 6. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
 * 		Также, кроссбраузерно получить target-элемент
 *
 * 7. Проверить, если target - это не один из input-элементов формы, то
 * 		завершить работу функции-обработчика.
 *
 * 8. Записать в innerHTML элемента p строку в формате JSON,
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
 * 		 	 "Content-Type: application/json"
 * 		 - Подготовить функцию-обработчик события onreadystatechange для
 * 		 	 приёма ответа, и в ней выполнить следующе: [11]
 *
 * 11. Получить ответ с сервера и записать его в innerHTML блока div под
 * 		 нажатой кнопкой.
 *
 *
 *
 *
 *
 *
 * Архитектура решения (сервер):
 *
 * 1. Проверить содержимое HTTP-заголовка - если оно равно
 * 		'application/json', то продолжить. Иначе - ничего не делать.
 *
 * 2. Извлечь необработанные POST-данные из входного буфера, и
 * 		сохранить их в переменную
 *
 * 3. Преобразовать извлечённую в п.2 JSON-строку в массив.
 * 		- Сделать это с помощью ф-ии json_decode(json, true);
 *
 * 4. С помощью var_dump отправить полученный в п.3 массив в
 * 		выходной буфер.
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
		makeJSON,				// функция, которая возвращает строку в формате JSON
		xhr;						// объект XMLHttpRequest






//2. Получить ссылки на нижеуказанные элементы, и сохранить их
//		все в объекте refs.
//		- На саму форму form
//		- На каждый из 3-х элементов формы.
//		- На поле p с id="stringBody"
//		- На кнопку "отправить XHR-запрос"
//		- На div для получения ответа от сервера
refs = {};
refs.form = document.getElementById('myForm');
refs.nameInput = document.getElementById('name');
refs.surnameInput = document.getElementById('surname');
refs.ageInput = document.getElementById('age');
refs.stringBody = document.getElementById('stringBody');
refs.sendButton = document.getElementById('send');
refs.divResponse = document.getElementById('divResponse');




//3. Написать функцию, которая принимает 3 пары имя/значение,
//		формирует из них строку в формате JSON, и возвращает её.
makeJSON = function(a1,a2, b1,b2, c1,c2) {

	// Создать JS-объект, который ниже преобразуем в JSON-строку
	// - Здесь основная проблема в том, что индексы объекта автоматом
	//   преобразуются в строку, а из переменных значения не берутся.
	//	 Т.О. использовать объектный литерал здесь не получится.
	// - Поэтому придётся сконструировать объект с помощью [] скобок:
	var data = {};
	data[a1] = a2;
	data[b1] = b2;
	data[c1] = c2;


	// Преобразовать объект data в JSON-строку и вернуть её
	return JSON.stringify(data);

};



//4. Применить функцию из п.3, используя стартовые значения из формы,
//	 после загрузки всего документа (после события onload)
window.onload = function() {

	refs.stringBody.innerHTML	= makeJSON('name', refs.nameInput.value,
																			 'surname', refs.surnameInput.value,
																			 'age', refs.ageInput.value);

};



//5. Назначить форме form функцию-обработчик onkeydown - для отлавливания
//		изменений на текстовых полях. В ней выполнить следующее: [6-8]
refs.form.onkeydown = function(event) {


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
		 target === refs.surnameInput ||
		 target === refs.ageInput) {}
	else return;


	//8. Записать в innerHTML элемента p строку в формате JSON,
	//		которую вернёт функция из п.3.
	//		- Причём здесь надо пропустить действия браузера по умолчанию вперёд в
	//			стеке задач, т.к. иначе в input.value всё еще будут старые значения
	//     на текущий момент. Сделать это с помощью польз. ф-ии setImmediate.
	setImmediate(function() {

		refs.stringBody.innerHTML	= makeJSON('name', refs.nameInput.value,
																				 'surname', refs.surnameInput.value,
																				 'age', refs.ageInput.value);

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
	//		 	 "Content-Type: application/json"
	//		 - Подготовить функцию-обработчик события onreadystatechange для
	//		 	 приёма ответа, и в ней выполнить следующе: [11]

		// Подготовить XHR-запрос
		xhr = new XMLHttpRequest();
		xhr.open('POST','server.php',true);

		// Подготовить нужный HTTP-заголовок
			xhr.setRequestHeader('Content-Type', 'application/json');

		// Подготовить функцию-обработчик события onreadystatechange для приёма ответа
		xhr.onreadystatechange = function(event) {

			//Проверить, если xhr.readyState != 4, завершить работу функции-обработчика.
			if(xhr.readyState != 4) return;


			//11. Получить ответ с сервера и записать его в innerHTML блока div под
			//		 нажатой кнопкой.
			refs.divResponse.innerHTML = xhr.responseText;


		};

		// Отправить XHR-запрос на сервер
		xhr.send(

			makeJSON('name', refs.nameInput.value,
							 'surname', refs.surnameInput.value,
							 'age', refs.ageInput.value)

		);

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




