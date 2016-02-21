/**
 * Задача:
 *
 * > Сделать так, чтобы на эл-те img можно было сфокусироваться, и после
 * 	 этого двигать его стрелками вправо/влево/вверх/вниз
 *
 * > Перемещение вправо/влево происходит на ширину внешней зоны img.
 *
 * > Перемещение вправо/влево происходит на высоту внешней зоны img.
 *
 * > При получении фокуса img должен выделятсья по контуру штриховой
 * 	 линией.
 *
 * > Т.К. события blur/focus не всплывают, то для того, чтобы их поймать,
 * 	 следует использовать кроссбраузерное решение:
 * 	 - Для всех браузеров, кроме IE<=8, ловить их на стадии захвата
 * 	 - Для IE6-7 использовать события focusin, focusout.
 *
 * > Мышонок может находиться где угодно в документе, на любом уровне
 * 	 вложенности, в т.ч. в элементах с position: relative, как в этом
 * 	 примере.
 * 	 - Поэтому при получении фокуса его надо перемещать в body,
 * 	 	 и давать position: absolute. Тогда его можно будет двигать
 * 	 	 по всему документу.
 *
 * > Когда элемент в фокусе, нажатия на клавиши срабатывают прямо на нем.
 *   - Поэтому нажатие на клавиши стрелок на клавиатуре можно отлавливать
 *   	 прямо на элементе div с id='mousie'
 *
 * > Коды символов-стрелок:
 *   - Влево		| 37
 *   - Вверх		| 38
 *   - Вправо		| 39
 *   - Вниз			| 40
 *
 *
 *
 *
 *
 * Архитектура решения:
 *
 * 1. Подготовить HTML и CSS:
 * 		- Создать div с id='container'. Установить ему position: relative.
 * 		- Создать div с id='mousie', и стиль для него.
 * 	 	- Добавить этому эл-ту атрибут tabindex='1', чтобы на нем можно было
 * 	 		бы сфокусироватсья (а без него на эл-тах div нельзя сфокусироваться)
 * 	  - Создать класс mousie:focus с рамкой для эл-та с фокусом.
 *
 * 2. Получить ссылку на элемент div с id='mousie'
 *
 * 3.	Написать функцию-обработчик onMousieFocus, и назначить её в качестве
 *     обработчика события onfocus элементу body таким образом, чтобы можно было отлавливать это
 * 		события на предках целевого эл-та кроссбраузерно.	Цель - отлавливать
 * 		возбуждение события focus на элементе mousie. В ней:
 *     - Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
 *     - Кроссбраузерно получить target-элемент
 *     - Переместить div из п.2 в body (старый mousie сам удалится)
 *
 * 4.	Написать фукнцию-обработчик onMousieClick. Она нужна потому, что в
 *     некоторых браузерах (IE, FF) вызов метода focus() из функции-обработчика
 *     события focus запрещен. А нам это нужно. Поэтому данный функционал
 * 		вынесен в функцию-обработчик события onclick. В ней:
 *     - Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
 *     - Кроссбраузерно получить target-элемент
 *     - Получить текущие док. коорд. mousie относ. document
 *     - Назначить mousie CSS-свойство positon: absolute
 *     - Изменить его координаты на полученные выше, чтобы при придании ему
 *  			position: absolute он остался на месте.
 *     - Дать фокус элементу mousie
 *
 * 5. Назначить функцию-обработчик события onkeydown для элемента
 * 		div с id='mousie'. В ней выполнить следующее: [6-9]
 *
 * 6. Кроссбраузерно получить ссылки на объект-событие event, а также
 *    на целевой объект target, в котором изначально произошло событие.
 *
 * 7. С помощью пользовательской функции getBoundingDocRect получить
 * 		размеры div с id='mousie'
 *
 * 8. Отслеживать нажатие на клавиши стрелок:
 * 		- Если нажата клавиша "вправо", то с помощью CSS-свойства left
 * 			сместить положение div с id='mousie' вправо на её ширину.
 * 		- Если нажата клавиша "влево", то с помощью CSS-свойства left
 * 			сместить положение div с id='mousie' влево на её ширину.
 * 		- Если нажата клавиша "вверх", то с помощью CSS-свойства left
 * 			сместить положение div с id='mousie' вверх на её высоту.
 * 		- Если нажата клавиша "вниз", то с помощью CSS-свойства left
 * 			сместить положение div с id='mousie' вниз на её высоту.
 *
 * 9. Отменить действия браузера по умолчанию, иначе при нажатии на
 * 		стрелки вверх/вниз будет прокручиваться браузер, а не смещаться
 * 		div.
 *
 *
 */



// Задействованные переменные
var target,
		mousie,						// ссылка на div с id='mousie'
		onMousieFocus,		// функция, срабатывающая при фокусе на div с id='mousie'
		mousieMetrics,		// документные коорд. относ. document внеш. зоны и размеры div с id='mousie'
		char;							// нажатая в п.6 клавиша

//2. Получить ссылку на элемент div с id='mousie'
mousie = document.getElementById('mousie');



//3.	Написать функцию-обработчик onMousieFocus, и назначить её в качестве
//    обработчика события onfocus элементу body таким образом, чтобы можно было отлавливать это
//		события на предках целевого эл-та кроссбраузерно.	Цель - отлавливать
//		возбуждение события focus на элементе mousie. В ней:
//    - Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
//    - Кроссбраузерно получить target-элемент
//    - Переместить div из п.2 в body (старый mousie сам удалится)


	// Написать функцию-обработчик onMousieFocus
	onMousieFocus = function(event) {

		//Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
		event = fixEvent(event);

		//Кроссбраузерно получить target-элемент
		target = 	event && event.target ||
									event.srcElement;

		// Получить текущие док. коорд. относ. document div из п.2.
		mousieMetrics = getBoundingDocRect(target);

		//Переместить div из п.2 в body (старый mousie сам удалится)
		if(target.parentNode !== document.body)
			document.body.appendChild(target);

		// Назначить ему CSS-свойство positon: absolute
		target.style.position = 'absolute';

		//Изменить его координаты на полученные выше, чтобы при придании ему
		//position: absolute он остался на месте.
		target.style.left = mousieMetrics.left + 'px';
		target.style.top = mousieMetrics.top + 'px';

		// Дать фокус элементу div из п.2
		target.focus();

	};

	// Назначить функцию-обработчик onfocus так, чтобы можно было кроссбраузерно
	// поймать на предках невсплывающее событие focus

		// Для всех браузеров, кроме IE<=8
		if (mousie.addEventListener) {
			mousie.addEventListener('focus', onMousieFocus, true);
		}

		// Для IE<=8
		else {
			mousie.onfocusin = onMousieFocus;
		}


//4.	Написать фукнцию-обработчик onMousieClick. Она нужна потому, что в
//    некоторых браузерах (IE, FF) вызов метода focus() из функции-обработчика
//    события focus запрещен. А нам это нужно. Поэтому данный функционал
//		вынесен в функцию-обработчик события onclick. В ней:
//    - Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
//    - Кроссбраузерно получить target-элемент
//    - Получить текущие док. коорд. mousie относ. document
//    - Назначить mousie CSS-свойство positon: absolute
//    - Изменить его координаты на полученные выше, чтобы при придании ему
// 			position: absolute он остался на месте.
//    - Дать фокус элементу mousie


	// Написать функцию-обработчик onMousieClick
	onMousieClick = function(event) {

		//Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
		event = fixEvent(event);

		//Кроссбраузерно получить target-элемент
		target = 	event && event.target ||
									event.srcElement;

		// Дать фокус элементу div из п.2
		target.focus();

	};


	// Назначить фукнцию-обработчик onclick для элемента mousie.
	mousie.onclick = onMousieClick;



//5. Назначить функцию-обработчик события onkeydown для элемента
//		div с id='mousie'. В ней выполнить следующее: [6-9]
mousie.onkeydown = function(event) {



	//6. Кроссбраузерно получить ссылки на объект-событие event, а также
	//   на целевой объект target, в котором изначально произошло событие.

		//Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
		event = fixEvent(event);

		//Кроссбраузерно получить target-элемент
		target = 	event && event.target ||
									event.srcElement;



	//7. С помощью пользовательской функции getBoundingDocRect получить
	//		размеры div с id='mousie'
	mousieMetrics = getBoundingDocRect(target);



	//8. Отслеживать нажатие на клавиши стрелок:
	//		- Если нажата клавиша "вправо", то с помощью CSS-свойства left
	//			сместить положение div с id='mousie' вправо на её ширину.
	//		- Если нажата клавиша "влево", то с помощью CSS-свойства left
	//			сместить положение div с id='mousie' влево на её ширину.
	//		- Если нажата клавиша "вверх", то с помощью CSS-свойства left
	//			сместить положение div с id='mousie' вверх на её высоту.
	//		- Если нажата клавиша "вниз", то с помощью CSS-свойства left
	//			сместить положение div с id='mousie' вниз на её высоту.

		// Получить нажатый символ

			// Для IE:
			if(event.which == null) char = event.keyCode;

			// Для остальных браузеров
			else char = event.which;


		// Если char == 37 (стрелка влево)
		if(char === 37) {
			target.style.left = mousieMetrics.left - mousieMetrics.width + 'px';
		}

		// Если char == 38 (стрелка вверх)
		if(char === 38) {
			target.style.top = mousieMetrics.top - mousieMetrics.height + 'px';
		}

		// Если char == 39 (стрелка вправо)
		if(char === 39) {
			target.style.left = mousieMetrics.left + mousieMetrics.width + 'px';
		}

		// Если char == 40 (стрелка вниз)
		if(char === 40) {
			target.style.top = mousieMetrics.top + mousieMetrics.height + 'px';
		}



	//9. Отменить действия браузера по умолчанию, иначе при нажатии на
	//		стрелки вверх/вниз будет прокручиваться браузер, а не смещаться
	//		div.

		// Кроссбраузерно отменить действия браузера "по умолчанию" в ответ
		// на возникновение события:
		event.preventDefault ? event.preventDefault() :
													(event.returnValue=false);





};









// Дополнительные функции





/* Получить объект с документными координатами относительно document
		 > getBoundingDocRect(e)
																	> Координаты верхнего левого угла элемента:
																		- top			| координата Y
																		- left		| координата X
																	> Координаты правого нижнего угла элемента:
																		- bottom	| координата Y
																		- right		| координата X
																	> Размеры элемента:
																		- width		| ширина, включая границы и padding, не включая margin
																		- height	| высота, включая границы и padding, не включая margin
																	> Особенности:
																		- Координаты и размеры - для внешней зоны элемента.
																		- НЕ меняются при прокрутке
																		- Используются при позиционировании элементов
																			с position: absolute
																		- Если у элемента display: none, то все значения,
																			которые вернет функция - будут 0.
																			А вот если у элементе visibility: hidden, то
																			все значения будут нормально вычисляться.
================================*/


function getBoundingDocRect(e) {
	var rect,
			body,
			docElem,
			scrollTop,
			scrollLeft,
			clientTop,
			clientLeft,
			top,
			left,
			bottom,
			right,
			width,
			height;

	rect = e.getBoundingClientRect();
	body = document.body;
	docElem = document.documentElement;

	// Размеры прокручЕННой области
	scrollTop = window.pageYOffset 	|| docElem.scrollTop || body.scrollTop;
	scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

	// Размеры рамок элемента
	clientTop = docElem.clientTop || body.clientTop || 0;
	clientLeft = docElem.clientLeft || body.clientLeft || 0;

	// Документные координаты левого верхнего угла элемента (на внеш. стороне
	top  = rect.top +  scrollTop - clientTop;
	left = rect.left + scrollLeft - clientLeft;

	// Документные координаты правого нижнего угла элемента
	bottom = rect.bottom + scrollTop - clientTop;
	right = rect.right + scrollLeft - clientLeft;

	// Внешние размеры элемента
	width = e.getBoundingClientRect().width;
	height = e.getBoundingClientRect().height;

	// Вернуть объект с координатами и размерами
	return {
		top: Math.round(top),
		left: Math.round(left),
		bottom: Math.round(bottom),
		right: Math.round(right),
		width: Math.round(width),
		height: Math.round(height)
	};
}





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



