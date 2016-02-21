/**
 * Задача:
 *
 *
 * ---- Основное
 *
 * > Создать функцию showPrompt(text, callback). Её вызов должен выводить
 *   на экран модальное окно.
 *
 * > Функция при вызове должна на лету сгенерировать HTML для помещения
 *   в модальное окно. А именно, там должно быть 3 обязательных элемента:
 *   - Элемент формы input типа text.
 *   - Кнопка button с текстом "ОК"
 *   - Кнопка button с текстом "Отмена"
 *
 * > Текст text из аргумента функции должен быть также размещен в модальном окне.
 *
 * > При нажатии на кнопку "OK" или enter (если input в фокусе), должна
 * 	 вызываться ф-ия callback, и ей в качестве аргумента должна передаваться
 * 	 строка, введенная в input.
 *
 * > При нажатии на кнопку "Отмена" или esc, должна вызываться ф-ия callback
 * 	 с аргументом null. Клавиша esc должна закрывать форму всегда, даже
 * 	 когда input не в фокусе.
 *
 *
 * ---- Прочие особенности
 *
 * > Форма должна быть размещена в центре окна.
 *   - Использовать позиционирование fixed относительно окна.
 *   - Используя getBoundingClientRect найти размеры блока созданного
 *   	 модального окна, и используя их позиционировать по центру.
 *
 * > В качестве text должен быть возможен любой HTML.
 *
 * > На самом деле надо создать 2 окна:
 *   - Полупрозрачное окно на весь экран (воспользоваться найденными
 *     клиентскими координатами). Оно будет перехватывать все клики вне
 *     окна с формы. Что сделает его по сути модальным.
 *   - Собственно, окно с формой, которое по центру экрана.
 *
 * > При показе формы фокус сразу должен быть отдан элементу input.
 *
 * > Нажатия на tab или shift+tab должны циклично переключать фокус только
 *   по элементам формы. Они не должны переключаться на другие элементы
 *   страницы.
 *
 *
 *
 * Для чего может быть использовано:
 *
 * > Например, для модального окна подписки на сайте. Именно эту
 * 	 технологию и используют для их создания.
 *
 *
 *
 *
 * Архитектура решения:
 *
 *
 * 1. Подготовить CSS-стили для модального окна. Эти стили решают 2 задачи -
 *    оформляют модальное окно и выравнивают его по центру экрана, как
 *    div с заранее неизвестными размерами.
 * 		> Как это сделать, см. по ссылке:
 * 			"2. CSS3" ->
 * 				"Выравнивание" ->
 * 					"1. div перем. разм. по центру окна браузера"
 * 		> CSS-стили должны содержать 3 класса:
 * 			- shield			|
 * 			- container		|
 * 			- centered		|
 *
 * 2. Создать функцию showPrompt(text, callback). В её теле выполнить:
 * 		[3-14]
 *
 * 3. Создать новый элемент div. Это будет полупрозрачный фон
 * 		модального окна, покрывающий все элементы на странице:
 * 		> Присвоить ему CSS-класс shield. Это обеспечит следующее:
 * 			- div покроет всю видимую клиентскую область браузера.
 * 			- div будет подстраиваться при изменении размеров браузера.
 * 			- div будет полупрозрачен
 * 		  - div будет расположен над всеми элементами документа (самый большой z-index).
 * 		> Добавить его дочерним элементом в body.
 *
 * 4. Создать новый элемент div. Это будет контейнер для модального окна
 * 		необходимый для выравнивания его по центру страницы:
 * 		> Присвоить ему CSS-класс container.
 * 		> Добавить его дочерним элементом в body.
 *
 * 5. Создать новый элемент div с нижеописанными свойствами. Это будет
 * 		само модальное окно. И оно будет расположено по центру экрана:
 * 		> Присвоить ему CSS-класс centered.
 *
 * 6. Воспользовавшись св-вом innerHTML, добавить произвольный HTML-код
 * 		в div из п.5, но с обязательными элементами: [7,8]
 *
 * 7. Добавить текст из аргумента text функции showPrompt
 *
 * 8. Добавить HTML-элемент form с id='prompt-form'. В нем должны быть
 * 		следующие эл-ты: [9,10,11]
 *
 * 9. Элемент input типа text	c id='text';
 *
 * 10. Элемент input типа submit с id='button-ok' и value='Ok';
 *
 * 11. Элемент input типа button с id='button-cancel' и value='Cancel';
 *
 * 12. Вставить элемент div из п.5 в документ, как дочерний документ
 * 		 для элемента div из п.4.
 *
 * 13. Назначить анонимную фукнкцию обработчиком события submit для кнопки
 * 		 из п.10. Внутри анонимной функции выполнить ф-ию callback без
 * 		 аргументов.
 *
 * 14. Назначить анонимную фукнкцию обработчиком события click для кнопки
 * 		 из п.11. Внутри анонимной функции выполнить ф-ию callback с
 * 		 аргументом null.
 *
 *
 *
 * 15. Создать ф-ию callback(arg). В её теле выполнить: [16-21]
 *
 * 16. Кроссбраузерно получить объект-событие.
 *
 * 17. Кроссбраузерно отменить действия браузера "по умолчанию" в ответ
 * 		 на возникновение события/
 *
 * 18. Вычислить arg. Если arg не равен null, то взять значение arg как
 *     value элемента input из п.9.
 *
 * 19. Если arg === undefine или '', то закончить работу функции-обработчика.
 *		 Иначе вывести значение arg в консоль.
 *
 * 20. Если arg не равен null, отправить данные на сервер с помощью метода
 * 		 form.submit(). Где form - это элемент form из п.8.
 *
 * 21. Удалить все элементы, связанные с модальным окном. Это эл-ты
 * 		 с классами:
 * 		 - shield
 * 		 - container
 * 		 - centered
 *
 *
 * 22. Получить ссылки на все элементы с нижеуказанными классами, и
 * 		 сохранить эти ссылки в переменные:
 * 		 - shield
 * 		 - container
 * 		 - centered
 *
 * 23. Всем элементам из п.22 назначить для события onkeydown анонимную
 * 		 функцию-обработчик, в которой выполнить: [16,24]
 *
 * 24. Проверить введенный символ, если e.keyCode === 27, то отменить
 * 		 действия браузера по умолчанию, и завершить работу функции-обработчика.
 *
 *
 *
 *
 *
 * 25. Выполнить функцию showPrompt.
 * 		 - В кач-ве text указать произвольный HTML.
 * 		 - В кач-ве callback указать ссылку на функцию callback из п.15.
 *
 *
 *
 *
 *
 */



// Задействованные переменные
var browserWindowMetrics,		// объект с размерами и координатами окна браузера
		divShield,							// ссылка на полупрозрачный div из п.2
		divModalWrapper,				// ссылка div-обертку для модального окна
		divModal,								// ссылка на div-модальное_окно.
		callback,								// ф-ия для п.5, которая будет выполняться при нажатии на кнопки модального окна
		shield,									// ссылка на элемент с классом "shield"
		container,							// ссылка на элемент с классом "container"
		centered;								// ссылка на элемент с классом "centered"




//2. 	Создать функцию showPrompt(text, callback). В её теле выполнить:
//		[3-14]
function showPrompt(text, callback) {



	//3.	Создать новый элемент div. Это будет полупрозрачный фон
	//		модального окна, покрывающий все элементы на странице:
	//		> Присвоить ему CSS-класс shield. Это обеспечит следующее:
	//			- div покроет всю видимую клиентскую область браузера.
	//			- div будет подстраиваться при изменении размеров браузера.
	//			- div будет полупрозрачен
	//		  - div будет расположен над всеми элементами документа (самый большой z-index).
	//		> Добавить его дочерним элементом в body.

		// Сгенерировать эл-т div
		divShield = document.createElement('div');

		// Добавить ему класс 'shield'
		divShield.className = 'shield';

		// Вставить сгенерированный элемент в body
		document.body.appendChild(divShield);



	//4.	Создать новый элемент div. Это будет контейнер для модального окна
	//		необходимый для выравнивания его по центру страницы:
	//		> Присвоить ему CSS-класс container.
	//		> Добавить его дочерним элементом в body.

		// Сгенерировать эл-т div-обертка
		divModalWrapper = document.createElement('div');

		// Добавить ему класс 'container'
		divModalWrapper.className = 'container';

		// Вставить сгенерированный элемент в body
		document.body.appendChild(divModalWrapper);



	//5. Создать новый элемент div с нижеописанными свойствами. Это будет
	//		само модальное окно. И оно будет расположено по центру экрана:
	//		> Присвоить ему CSS-класс centered.

		// Сгенерировать эл-т div-модальное_окно
		divModal = document.createElement('div');

		// Добавить ему класс 'container'
		divModal.className = 'centered';



	//6. Воспользовавшись св-вом innerHTML, добавить произвольный HTML-код
	//		в div из п.5, но с обязательными элементами: [7,8]
	//7. Добавить текст из аргумента text функции showPrompt
	//8. Добавить HTML-элемент form с id='prompt-form'. В нем должны быть
	//		следующие эл-ты: [9,10,11]
	//9. Элемент input типа text	c id='text';
	//10. Элемент input типа submit с id='button-ok' и value='Ok';
	//11. Элемент input типа button с id='button-cancel' и value='Cancel';

		divModal.innerHTML =
				'<div>'+text+'</div>'+
				'<form id="prompt-form">'+
				'<input type="text" id="text">'+
				'<input type="submit" id="button-ok" value="Ok">'+
				'<input type="button" id="button-cancel" value="Cancel">'+
				'</form>';


	//12.	Вставить элемент div из п.5 в документ, как дочерний документ
	//		 для элемента div из п.4.
	divModalWrapper.appendChild(divModal);



	//13. Назначить анонимную фукнкцию обработчиком события submit для кнопки
	//		 из п.10. Внутри анонимной функции выполнить ф-ию callback без
	//		 аргументов.
	document.getElementById('prompt-form').onsubmit = function(){

		callback();

	};



	//14. Назначить анонимную фукнкцию обработчиком события click для кнопки
	//		 из п.11. Внутри анонимной функции выполнить ф-ию callback с
	//		 аргументом null.
	document.getElementById('button-cancel').onclick = function(){

		callback(null)

	};




	//22. Получить ссылки на все элементы с нижеуказанными классами, и
	//		 сохранить эти ссылки в переменные:
	//		 - shield
	//		 - container
	//		 - centered
	shield = document.getElementsByClassName('shield')[0];
	container = document.getElementsByClassName('container')[0];
	centered = document.getElementsByClassName('centered')[0];





	//23. Элементу с классом container назначить для события onkeydown
	// 		анонимную функцию-обработчик, в которой выполнить: [16,24].
	//    Это обеспечит:
	//    - При нажатии на кнопку esc, если поле input типа text в фокусе,
	//      модальное окно будет закрыто.
	//    - При нажатии на tab действия браузера "по умолчанию" отменяются,
	//      и перехода на другие элементы не произойдет.
	container.onkeydown = function(event) {



		//16. Кроссбраузерно получить объект-событие.
		event = event || window.event;



		//24. Проверить введенный символ:
		//    - если e.keyCode === 9 (клавиша tab), то отменить действия
		// 			браузера по умолчанию, и завершить работу функции-обработчика.
		//    - если e.keyCode === 27 (клавиша escape), то удалить все элементы,
		//      связанные с модальным окном

			// Если нажата клавиша tab
			if(event.keyCode == 9) {

					event.preventDefault ? event.preventDefault() :
														(event.returnValue=false);

			}

			// Если нажата клавиша escape
			if(event.keyCode == 27) {

				centered.parentNode.removeChild(centered);
				container.parentNode.removeChild(container);
				shield.parentNode.removeChild(shield);

			}


	};


}




//15. Создать ф-ию callback(arg). В её теле выполнить: [16-21]
callback = function(arg) {


	//16. Кроссбраузерно получить объект-событие.
	event = event || window.event


	//17. Кроссбраузерно отменить действия браузера "по умолчанию" в ответ
	//		 на возникновение события
	event.preventDefault ? event.preventDefault() :
												(event.returnValue=false);


	//18. Вычислить arg. Если arg не равен null, то взять значение arg как
	//    value элемента input из п.9.
	if(arg !== null) arg = document.getElementById('text').value;


	//19. Если arg === undefine или '', то закончить работу функции-обработчика.
	//    Иначе вывести значение arg в консоль.
	if(arg === undefined || arg === '') return;
	else console.log('Вы ввели: '+arg);




	//20.	 Если arg не равен null, отправить данные на сервер с помощью метода
	//		 form.submit(). Где form - это элемент form из п.8.
	if(arg !== null) {

		// Получить ссылку на элемент формы
		var form = document.getElementById('prompt-form');

		// Отправить данные
		// form.submit();

	}




	//21. Удалить все элементы, связанные с модальным окном. Это эл-ты
	//		 с классами:
	//		 - shield
	//		 - container
	//		 - centered

		// Получить ссылку на элемент div класса shield
		var shield = document.getElementsByClassName('shield')[0];

		// Получить ссылку на элемент div класса container
		var container = document.getElementsByClassName('container')[0];

		// Получить ссылку на элемент div класса centered
		var centered = document.getElementsByClassName('centered')[0];

		// ... удалить все эти элементы:
		shield.parentNode.removeChild(shield);
		container.parentNode.removeChild(container);
		centered.parentNode.removeChild(centered);

};







//25. Выполнить функцию showPrompt.
//		 - В кач-ве text указать произвольный HTML.
//		 - В кач-ве callback указать ссылку на функцию callback из п.15.

	// Она выполнится при нажатии на кнопку, которая создана в HTML-файле.














// Вспомогательные функции




/*	Получить объект с:
		- Размерами по осям X,Y окна браузера.
		- Клиентскими коорд. ЛВ и ПН углов окна бра-ра (нач. коорд. ЛВ угол окна бра-ра)
		- Документными коорд. ЛВ и ПН углов окна бра-ра относ. document
				getBrowserWindowMetrics			|
																		Размеры окна браузера:
																		- width
																		- height

																		Клиентские коорд. ЛВ и ПН углов окна браузера:
																		- clientTop
																		- clientLeft
																		- clientBottom
																		- clientRight

																		Документные коорд. ЛВ и ПН углов окна браузера:
																		- docTop
																		- docLeft
																		- docBottom
																		- docRight

																		Особенности:
																		- На самом деле клиент. коорд. ЛВ угла - это (0,0),
																			а правого нижнего угла - это (width,height).
																			А отдельные обозначения (выше) им даны просто для удобства.
================================*/

function getBrowserWindowMetrics() {
	var body,
			docElem,
			scrollTop,
			scrollLeft,

			width,
			height,

			clientTop,
			clientLeft,
			clientBottom,
			clientRight,

			docTop,
			docLeft,
			docBottom,
			docRight;


	// Получить ссылки на элементы body и document
	body = document.body;
	docElem = document.documentElement;


	// Получить размеры прокручЕННой области ио осям X и Y
	// (понадобятся для вычисления документных координат)
	scrollTop = window.pageYOffset 	|| docElem.scrollTop || body.scrollTop;
	scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;


	// Получить ширину и высоту клиентской области окна браузера

		// Если код выполняется в не-IE браузерах:
		if( typeof( window.innerWidth ) == 'number' ) {
			width = window.innerWidth;
			height = window.innerHeight;
		}

		// Если код выполняется в IE>=6 в 'standards compliant mode'
		else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
			width = document.documentElement.clientWidth;
			height = document.documentElement.clientHeight;
		}

		// Если код выполняется в IE4
		else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
			width = document.body.clientWidth;
			height = document.body.clientHeight;
		}


	// Получить клиентские координаты клиентской области браузера
	clientTop = 0;
	clientLeft = 0;
	clientBottom = clientTop + height
	clientRight	= clientLeft + width;

	// Получить документные координаты клиентской области браузера
	docTop = clientTop + scrollTop;
	docLeft = clientLeft + scrollLeft;
	docBottom = docTop + height;
	docRight = docLeft + width;


	// Вернуть объект с координатами и размерами
	return {
		width: Math.round(width),
		height: Math.round(height),

		clientTop: Math.round(clientTop),
		clientLeft: Math.round(clientLeft),
		clientBottom: Math.round(clientBottom),
		clientRight: Math.round(clientRight),

		docTop: Math.round(docLeft),
		docLeft: Math.round(docLeft),
		docBottom: Math.round(docBottom),
		docRight: Math.round(docRight)
	};

}












