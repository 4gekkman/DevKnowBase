/**
 * Задача:
 *
 * > Сделать так, что при прокрутке вниз главное меню не скрывалось бы
 * 	 за кромкой окна браузера, а фиксировалось в его верхней части. А
 * 	 при прокрутке вверх возвращалось на свое обычное место.
 *
 * > Фиксация происходит тогда, когда размер прокрученной области
 * 	 >= документной координате Y ЛВ угла внешней зоны элемента меню.
 *
 * > Расфиксация происходит тогда, когда размер прокрученной области
 * 	 <= докумен 1тной координате Y ЛВ угла внешней зоны элемента меню.
 *
 *
 * > Основная идея такова:
 * 	 	 Если прокрутка больше, чем Y ЛВ угла меню, то делаем статичное
 * 	 	 меню невидимым, и создаем его фиксированную копию в том месте,
 * 	 	 где было статичное меню, когда оно стало невидимым.
 * 	 	 Если прокрутка меньше, чем Y ЛВ угла меню, то производим
 * 	 	 обратный процесс.
 *
 *
 *
 *
 * Архитектура решения:
 *
 * 1. Подготовить весь необходимый HTML и CSS.
 *
 * 2. Получить ссылку на элемент меню и на шапку.
 *
 * 3. Назначить функцию-обрабочтик события onscroll элементу window.
 * 		В ней выполнить следующее: [4-8]
 *
 * 4. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
 * 		Также, кроссбраузерно получить target-элемент
 *
 * 5. Получить документные координаты ЛВ угла внешней зоны элемента меню из п.2
 * 		относительно document.
 * 		- Для этого восползоваться польз. ф-ей getBoundingDocRect
 *
 * 6. Кроссбраузерно получить текущее значение прокручЕННой области окна window.
 *
 * 7. 	Если значение прокручЕННой области из п.6 >= координаты Y из п.5,
 *  		и нового меню (с id='newMenu') еще не существует, то:
 *  		> Создать новый элемент меню - копию старого.
 *      > Назначить новому меню тот же класс со стилями, что и у старого
 * 			> Назначить новому меню newMenu.id = 'newMenu'
 *  		> Назначить новому меню следующие свойства:
 *				- position: fixed
 *				- top: 0;
 * 				- left: 0;
 * 				- marginLeft: auto;
 * 				- marginRight: auto;
 * 				- margin: 0;
 * 			> Вставить новое меню в body
 * 			> Сделать старое меню невидимым: visibility: hidden
 *
 *
 *
 * 8. Если значение прокручЕННой области из п.6 < координаты Y из п.5, и
 *    новое меню (с id='newMenu') существует, то:
 * 	 	> Удалить элемент новое меню с id='newMenu'
 * 	 	> Сделать старое меню видимым
 *
 *
 */


// Задействованные переменные:
var target,				// целевой элемент события
		menu,					// ссылка на элемент меню
		head,					// ссылка на шапку
		menuMetrics,	// док. коорд. внеш. зоны относ. document эл-та меню и его размеры
		headMetrics,	// док. коорд. внеш. зоны относ. document эл-та шапки и его размеры
		scrollTop,		// текущие размеры прокручЕННой области
		newMenu;			// новый элемент меню


//2. Получить ссылку на элемент меню и на шапку.
menu = document.getElementById('menu');
head = document.getElementById('head');



//3. Назначить функцию-обрабочтик события onscroll элементу window.
//		В ней выполнить следующее: [4-8]
window.onscroll = function(event) {


	//4. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
	//		Также, кроссбраузерно получить target-элемент

		//Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
		event = fixEvent(event);

		//Кроссбраузерно получить target-элемент
		target = 	event && event.target ||
									event.srcElement;


	//5. Получить документные координаты ЛВ угла внешней зоны элемента меню
	//		относительно document.
	//		- Для этого восползоваться польз. ф-ей getBoundingDocRect
	menuMetrics	= getBoundingDocRect(menu);


	//6. Кроссбраузерно получить текущее значение прокручЕННой области окна window.
	scrollTop = window.pageYOffset 	||
								document.documentElement.scrollTop ||
								document.body.scrollTop;



	//7. 	Если значение прокручЕННой области из п.6 >= координаты Y из п.5,
	// 		и нового меню (с id='newMenu') еще не существует, то:
	// 		> Создать новый элемент меню - копию старого.
	//    > Назначить новому меню тот же класс со стилями, что и у старого
	//		> Назначить новому меню newMenu.id = 'newMenu'
	// 		> Назначить новому меню следующие свойства:
	//			- position: fixed
	//			- top: 0;
	//			- left: 0;
	//			- marginLeft: auto;
	//			- marginRight: auto;
	//			- margin: 0;
	//		> Вставить новое меню в body
	//		> Сделать старое меню невидимым: visibility: hidden
	if(scrollTop >= menuMetrics.top && !document.getElementById('newMenu')) {

		// Создать новый элемент меню
		newMenu = menu.cloneNode(true);

		// Назначить новому меню тот же класс со стилями, что и у старого
		newMenu.className = 'menu';

		// Назначить новому меню следующие свойства:
		newMenu.id = 'newMenu';
		newMenu.style.position = 'fixed';
		newMenu.style.top = '0';
		newMenu.style.left = '0';
		newMenu.style.marginLeft = 'auto';
		newMenu.style.marginRight = 'auto';
		newMenu.style.marginTop = '0';

		// Вставить новое меню в body
		document.body.appendChild(newMenu);

		// Сделать старое меню невидимым: visibility: hidden
		menu.style.visibility = 'hidden';

	}

	//8. Если значение прокручЕННой области из п.6 < координаты Y из п.5, и
	//   новое меню (с id='newMenu') существует, то:
	//	 > Удалить элемент новое меню с id='newMenu'
	//	 > Сделать старое меню видимым
	if(scrollTop < menuMetrics.top && document.getElementById('newMenu')) {

		// Получить ссылку на элемент нового меню
		newMenu = document.getElementById('newMenu');

		// Удалить элемент новое меню с id='newMenu'
		newMenu.parentNode.removeChild(newMenu);

		// Сделать старое меню видимым
		menu.style.visibility = 'visible';

	}

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






