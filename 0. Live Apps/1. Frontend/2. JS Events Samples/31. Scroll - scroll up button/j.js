/**
 * Задача:
 *
 * > Создать кнопку, которая будет улучшать навигацию при прокрутке.
 * 	 1 Когда размер прокрутки больше Y, появляется кнопка "вверх". Если её
 * 	 	 нажать, то страница будет прокручена в начало.
 * 	 2 При этом кнопка останется, но теперь это будет кнопка "вниз". Если
 * 	 	 её нажать, то размер прокрутки станет таким, какой он был непосредственно
 * 	 	 перед тем, как была нажата кнопка в п.1
 * 	 3 Кнопка остается такой, как в п.2, до тех пор, пока размер прокрутки
 * 	 	 не станет больше, чем 1 высота окна браузера.
 *
 *
 *
 *
 * Архитектура решения:
 *
 * 1. Подготовить весь необходимый HTML и CSS. Должно быть заготовлено
 * 		2 кнопки с position: fixed. Одна кнопка "вверх", другая кнопка "вниз".
 * 		У обоих кнопок при старте display: none.
 *
 * 2. Получить ссылки на следующие элементы и сохранить их в переменные:
 * 		- Стрелка вверх
 * 	  - Стрелка вниз
 *
 * 3. Назначить функцию-обработчик onscroll объекту window. С её помощью
 * 		можно будет отслеживать текущий размер прокручЕННой области. В этой
 * 		функции сделать следующее: [4-9]
 *
 * 4. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
 * 		Также, кроссбраузерно получить target-элемент
 *
 * 5. Кроссбраузерно получить текущее значение прокручЕННой области окна window.
 *
 * 6. Получить размеры окна window, и сохранить в отдельную переменную.
 * 		- Для этого воспользоваться польз. ф-ией: getBrowserWindowMetrics()
 *
 * 7. Если размер прокрутки из п.5 станет больше, чем высота окна браузера
 * 		из п.6, то:
 * 		- Сделать display: none для кнопки "вниз"
 * 	  - Сделать display: block для кнопки "вверх"
 *
 * 8. Если размер прокрутки из п.5 станет меньше, чем высота окна браузера
 * 		из п.6, то:
 * 		- Сделать display: none для кнопки "вверх"
 *
 *
 * 9. Вывести информацию о размере прокручЕННой области на экран в
 * 		элементе с id='showScroll'
 *
 *
 * 10. Назначить функцию-обработчик события onclick, который будет ловить
 * 		 клики по кнопкам "вверх" и "вниз".
 * 		 - Выполнить: [4,5]
 * 	   - Если клик был по кнопке "вверх", то выполнить еще и: [11,12,13]
 * 	   - Если клик был по кнопке "вниз", то выполнить еще и:  [14]
 *

 *
 * 11. Сохранить текущий размер прокручЕННой области окна window в
 * 		пользовательском атрибуте data-scrollSize кнопки "вниз".
 *
 * 12. Изменить текущий размер прокручЕННой области окна window на 0.
 *
 * 13. Сделать display: none для кнопки "вверх" и display: block
 * для кнопки "вниз"
 *
 *
 *
 * 14. Проверить, если значение пользовательского атрибута data-scrollSize
 * 		 кнопки "вниз" не нулевое, то изменить размер текущей прокручЕННой
 * 		 области окна window на это значение.
 *
 *
 *
 */


// Задействованные переменные
var target,				// целевой элемент события
		up,							// ссылка на кнопку "вверх"
		down,						// ссылка на кнопку "вниз"
		scrollTop,			// текущие размеры прокручЕННой области
		windowMetrics;	// метрика окна браузера




//2. Получить ссылки на следующие элементы и сохранить их в переменные:
//		- Стрелка вверх
//	  - Стрелка вниз
up = document.getElementById('upButton');
down = document.getElementById('downButton');



//3. 	Назначить функцию-обработчик onscroll объекту window. С её помощью
// 		можно будет отслеживать текущий размер прокручЕННой области. В этой
// 		функции сделать следующее: [4-9]
window.onscroll = function(event) {


	//4. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
	//		Также, кроссбраузерно получить target-элемент

		//Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
		event = fixEvent(event);

		//Кроссбраузерно получить target-элемент
		target = 	event && event.target ||
									event.srcElement;


	//5. Кроссбраузерно получить текущее значение прокручЕННой области окна window.
	scrollTop = window.pageYOffset 	||
								document.documentElement.scrollTop ||
								document.body.scrollTop;


	//6. Получить размеры окна window, и сохранить в отдельную переменную.
	//		- Для этого воспользоваться польз. ф-ией: getBrowserWindowMetrics()
	windowMetrics = getBrowserWindowMetrics();



	//7. Если размер прокрутки из п.5 станет больше, чем высота окна браузера
	//		из п.6, то:
	//		- Сделать display: none для кнопки "вниз"
	//	  - Сделать display: block для кнопки "вверх"
	if(scrollTop >= windowMetrics.height) {

		//Сделать display: none для кнопки "вниз"
		down.style.display = 'none';

		//Сделать display: block для кнопки "вверх"
		up.style.display = 'block';

	}


	//8. Если размер прокрутки из п.5 станет меньше, чем высота окна браузера
	//		из п.6, то:
	//		- Сделать display: none для кнопки "вверх"
	if(scrollTop < windowMetrics.height) {

		//Сделать display: none для кнопки "вверх"
		up.style.display = 'none';

	}



	//9. Вывести информацию о размере прокручЕННой области на экран в
	//		элементе с id='showScroll'
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('showScroll').innerHTML = scrolled;

};




//10. Назначить функцию-обработчик события onclick, который будет ловить
//		 клики по кнопкам "вверх" и "вниз".
//		 - Выполнить: [4]
//	   - Если клик был по кнопке "вверх", то выполнить еще и: [11,12]
//	   - Если клик был по кнопке "вниз", то выполнить еще и:  [14]
document.body.addEventListener('click',function(event){


	//4. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
	//		Также, кроссбраузерно получить target-элемент

		//Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
		event = fixEvent(event);

		//Кроссбраузерно получить target-элемент
		target = 	event && event.target ||
									event.srcElement;


	//5. Кроссбраузерно получить текущее значение прокручЕННой области окна window.
	scrollTop = window.pageYOffset 	||
								document.documentElement.scrollTop ||
								document.body.scrollTop;


	// Если клик был по кнопке "вверх"
	if(target === up) {

		//11. Сохранить текущий размер прокручЕННой области окна window в
		//		пользовательском атрибуте data-scrollSize кнопки "вниз".
		down.setAttribute('data-scrollSize', scrollTop);


		//12. Изменить текущий размер прокручЕННой области окна window на 0.
		window.scrollTo(0,0);


		//13. Сделать display: none для кнопки "вверх" и display: block
		// для кнопки "вниз"
		up.style.display = 'none';
		down.style.display = 'block';

	}


	// Если клик был по кнопке "вниз"
	if(target === down) {

		//14.  Проверить, если значение пользовательского атрибута data-scrollSize
		//		 кнопки "вниз" не нулевое, то изменить размер текущей прокручЕННой
		//		 области окна window на это значение.
		if(down.getAttribute('data-scrollSize'))
			window.scrollTo(0, down.getAttribute('data-scrollSize'));


	}



});









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



