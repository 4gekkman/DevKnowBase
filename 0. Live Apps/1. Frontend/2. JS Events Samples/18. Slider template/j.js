/**
 * Задача:
 *
 * > Создать слайдер.
 *
 * > Бегунок должен двигаться только вправо-влево, и останавливаться четко
 * 	 у концов полосы.
 *
 * > Слайдер должен нормально работать при резком движении мыши вправо/влева,
 * 	 за пределы полосы. Поэтому надо назначать обработчики не на бегунок, а
 * 	 на document.
 *
 * > Курсор при передвижении слайдера должен быть рукой.
 *
 * > При нажатом бегунке курсор мыши может выходить за пределы полосы
 * 	 слайдера, но слайдер должен все равно работать. Для этого, опять же,
 * 	 надо назначать обработчик события mousemove элементу document, а не
 * 	 элементу слайдера.
 *
 *
 *
 * Задействованые пользовательские функции:
 *
 * > FixEvent
 * > getBoundingDocRect
 * > checkClass
 *
 *
 *
 *
 * Архитектура решения:
 *
 * 1. Подготовить HTML/CSS-заготовку слайдера.
 *
 * 2. Назначить функцию-обработчик события onmousedown элементу document.
 * 		Она будет перехватывать нажатие ЛК мыши на любой элемент DOM.
 * 		Внутри функции выполнить: [3-6]
 *
 * 3. Применить функцию FixEvent, устраняющую все основные IE-несовместимости.
 *    И одновременно кроссбраузерно получить ссылку на объект-событие,
 *    которую и возвращает функция FixEvent. Также, кроссбраузерно получить
 *		target-элемент.
 *
 * 4. Проверить, есть ли у элемента target класс sliderSlider.
 * 		- Если нет, то закончить работу функции-обработчика.
 * 		- Если да, то ничего не делать.
 *
 * 5. Получить документные координаты и размеры полосы слайдера, а также
 *  	бегунка.	Записатьвсе это в виде объектов в переменные. В этой задаче
 *  	нам понадобятся только их размеры.
 *
 * 6. Получить и сохранить в переменные следующие значения:
 * 		- Текущая документная координата X курсора мыши.
 * 	 	- Текущая локальная координата X бегунка слайдера.
 * 	 	- Минимальное значение локальной координаты X слайдера.
 * 	 	- Максимальное значение локальной координаты X слайдера.
 *
 *
 * 7. Внутри этой функции-обработчика назначить функцию-обработчик для
 * 		события mousemove. Внутри неё выполнить: [3,8]
 *
 * 8. Изменить позиционирование бегунка слайдера по оси X по формуле:
 * 		текущая лок. коорд. X бегунка из п.6 + разница между док. координатой
 * 		X курсора мыши из п.6 и текущей док. координатой X курсора мыши.
 * 		Но изменять его только в том случае, если бегунок не выходит за
 * 		крайнее левое или крайнее правое положение слайдера из п.6.
 *
 *
 * 9. Внутри функции-обработчика событий onmousedown назначить еще одну
 * 		 функцию-обработчик для события mouseup. Внутри неё выполнить: [10]
 *
 * 10. Удалить функцию-обработчик mousemove.
 *

 *
 *
 */



var target,			// целевой элемент, в котором изначально произошло событие
		doc,				// document.documentElement
		strip,			// ссылка на полосу слайдера
		stripDocMetrics,		// док. коорд. относ. document внеш. зоны полосы слайдера и его размеры
		sliderDocMetrics,		// док. коорд. относ. document внеш. зоны бегунка слайдера и его размеры
		startDocCursorX,		// Текущая документная координата X курсора мыши.
		curLocalSliderX,		// Текущая локальная координата X бегунка слайдера.
		minLocalSliderX,		// Минимальное значение локальной координаты X слайдера.
		maxLocalSliderX;		// Максимальное значение локальной координаты X слайдера.

doc = document.documentElement;
strip = document.getElementsByClassName('sliderStrip')[0];


//2. Назначить функцию-обработчик события onmousedown элементу document.
//		Она будет перехватывать нажатие ЛК мыши на любой элемент DOM.
//		Внутри функции выполнить: [3-6]
doc.onmousedown = function(event) {




	//3. Применить функцию FixEvent, устраняющую все основные IE-несовместимости.
	//   И одновременно кроссбраузерно получить ссылку на объект-событие,
	//   которую и возвращает функция FixEvent. Также, кроссбраузерно получить
	//   target-элемент.

		// Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
		event = fixEvent(event);

		// Кроссбраузерно получить target-элемент
		var target = 	event && event.target ||
									event.srcElement;



	//4. Проверить, есть ли у элемента target класс sliderSlider.
	//		- Если нет, то закончить работу функции-обработчика.
	//		- Если да, то ничего не делать.
	if(!checkClass(target,'sliderSlider')) return;



	//5. Получить документные координаты и размеры полосы слайдера, а также
	// 	 бегунка.	Записатьвсе это в виде объектов в переменные. В этой задаче
	// 	 нам понадобятся только их размеры.
	stripDocMetrics = getBoundingDocRect(strip);
	sliderDocMetrics = getBoundingDocRect(target);



	//6. Получить и сохранить в переменные следующие значения:
	//		- Текущая документная координата X курсора мыши.
	//	 	- Текущая локальная координата X бегунка слайдера.
	//	 	- Минимальное значение локальной координаты X слайдера.
	//	 	- Максимальное значение локальной координаты X слайдера.

		// Текущая документная координата X курсора мыши.
		startDocCursorX = event.pageX;

		// Текущая локальная координата X бегунка слайдера.
		curLocalSliderX = parseInt(window.getComputedStyle(target).left);

		// Минимальное значение локальной координаты X слайдера.
		minLocalSliderX = 0;

		// Максимальное значение локальной координаты X слайдера.
		maxLocalSliderX = stripDocMetrics.width - sliderDocMetrics.width;




	//7. Внутри этой функции-обработчика назначить функцию-обработчик для
	//		события mousemove. Внутри неё выполнить: [3,8]
	doc.onmousemove = function(event) {


		//3. Применить функцию FixEvent, устраняющую все основные IE-несовместимости.
		//   И одновременно кроссбраузерно получить ссылку на объект-событие,
		//   которую и возвращает функция FixEvent. Также, кроссбраузерно получить
		//   target-элемент.

			// Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
			event = fixEvent(event);



		//8. Изменить позиционирование бегунка слайдера по оси X по формуле:
		//		текущая лок. коорд. X бегунка из п.6 - разница между док. координатой
		//		X курсора мыши из п.6 и текущей док. координатой X курсора мыши.
		var curLeft = parseInt(window.getComputedStyle(target).left);
		if(curLeft >= minLocalSliderX && curLeft <= maxLocalSliderX) {

			// Результирующая локальная координата движка слайдера
			var resultLeft = curLocalSliderX - (startDocCursorX - event.pageX);

			// Крайний случай - левое положение слайдера. Если resultLeft меньше,
			// чем крайнее левое значение left движка, то завершить работу обработчика.
			if(resultLeft < minLocalSliderX) return;

			// Крайний случай - левое положение слайдера. Если resultLeft меньше,
			// чем крайнее левое значение left движка, то завершить работу обработчика.
			if(resultLeft > maxLocalSliderX) return;

			// ... иначе позиционировать движок по оси X с помощью resultLeft
			target.style.left = curLocalSliderX -
													(startDocCursorX - event.pageX) + 'px';
		}


	};


	//9. Внутри функции-обработчика событий onmousedown назначить еще одну
	//		 функцию-обработчик для события mouseup. Внутри неё выполнить: [10]
	doc.onmouseup = function(event) {


		//10. Удалить функцию-обработчик mousemove.
			doc.onmousemove = self.onmouseup = null;


	};



};














// Проверить наличие класса cls у элемента el
// > Возвращает true, если у элемента есть класс cls. Иначе - false.
function checkClass(el, cls) {
	for(var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
		if (c[i] == cls) return true;
	}
	return false;
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







