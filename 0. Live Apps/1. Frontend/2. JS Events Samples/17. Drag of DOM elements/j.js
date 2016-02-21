/**
 * Задача:
 *
 * > Сделать так, чтобы элементы с классом draggable можно было бы
 * 	 перетаскивать мышью на любое место в пределах окна браузера.
 *
 * > Если у перетаскиваемого элемента значение CSS-свойства position
 *	 не равно absolute, то делать его таковым.
 *
 * > Отменить буксировку картинок браузера по умолчанию
 *
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
 * Архитектура решения:
 *
 * 1. Назначить функцию-обработчик события onmousedown элементу document.
 * 		Она будет перехватывать нажатие ЛК мыши на любой элемент DOM.
 * 		Внутри функции выполнить: [2-9]
 *
 * 2. Применить функцию FixEvent, устраняющую все основные IE-несовместимости.
 *    И одновременно кроссбраузерно получить ссылку на объект-событие,
 *    которую и возвращает функция FixEvent. Также, кроссбраузерно получить
 *		target-элемент.
 *
 * 3. Проверить, есть ли у элемента target класс draggable.
 * 		- Если нет, то закончить работу функции-обработчика.
 * 		- Если да, то ничего не делать.
 *
 * 4. Получить документные координаты и размеры элемента target. Записать
 * 		все это в виде объекта в переменную. Также записать в эту переменную
 * 	 	документные координаты (x,y) центра элемента target.
 *
 * 5. Проверить CSS-свойство position элемента target (вычисленные стили).
 * 		- Если его значение = 'absolute', ничего не делать.
 * 	 	- В противном случае, установить ему значение 'absolute'
 *
 * 6. Переместить элемент target в элемент body, сделав его его дочерним
 * 		элементом. Т.О. можно быть уверенным в том, что target не находится
 * 		внутри какого-нибудь элемента в position: relative, и при назначении
 * 		положения target с помощью left и top будут использоваться координаты
 * 	 	с точкой отсчета относительно ЛВ угла документа, а не ЛВ угла того
 * 	 	самого эл-та с position: relative.
 *
 * 7. Получить документные координаты курсора мыши при клике. Записать их
 * 		в виде объекта в переменную.
 *
 * 8. Получить разницу между координатами курсора из п.7 и координатами
 * 		ЛВ угла элемента target из п.4, по осям X и Y. Записать в переменную
 * 		в виде объекта.
 *
 * 9. С помощью свойств left и top, воспользовавшись координатами, полученными
 * 		в п.4, позиционировать элемент target в том же месте, где он был
 * 		до того, как по нему кликнули.
 * 		> Не забыть добавить в конце суффикс 'px'.
 *
 *
 *
 * 10. Внутри этой функции-обработчика назначить функцию-обработчик для
 * 		события mousemove. Внутри неё выполнить: [2,11]
 *
 * 11. Изменить позиционирование элемента по осям X и Y.
 * 		 - По оси X = текущая координата курсора X - разница из п.8.
 * 		 - По оси Y = текущая координата курсора Y - разница из п.8.
 * 		 > Не забыть добавить в конце суффикс 'px'.
 *
 *
 *
 * 12. Внутри функции-обработчика событий onmousedown назначить еще одну
 * 		 функцию-обработчик для события mouseup. Внутри неё выполнить: [13]
 *
 * 13. Удалить функцию-обработчик mousemove.
 *
 *
 *
 *
 *
 */


// Использованные переменные
var target,			// целевой элемент, в котором изначально произошло событие
		doc,				// document.documentElement
		targetDocMetrics,		// документные координаты относ. document и размеры внешней зоны эл-та doc
		cursorDocCoords,		// док. коорд. курсора относ. document при клике
		shift;							// разница между коорд. cursorDocCoords и ЛВ угла targetDocMetrics, по осям X,Y в px

doc = document.documentElement;




//1. Назначить функцию-обработчик события onmousedown элементу document.
//		Она будет перехватывать нажатие ЛК мыши на любой элемент DOM.
//		Внутри функции выполнить: [2-9]
doc.onmousedown = function(event) {




	//2. Применить функцию FixEvent, устраняющую все основные IE-несовместимости.
	//   И одновременно кроссбраузерно получить ссылку на объект-событие,
	//   которую и возвращает функция FixEvent. Также, кроссбраузерно получить
	//   target-элемент.

		// Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
		event = fixEvent(event);

		// Кроссбраузерно получить target-элемент
		target = 	event && event.target ||
									event.srcElement;




	//3. Проверить, есть ли у элемента target класс draggable.
	//		- Если нет, то закончить работу функции-обработчика.
	//		- Если да, то ничего не делать.
	if(!checkClass(target,'draggable')) return;




	//4. Получить документные координаты и размеры элемента target. Записать
	//		все это в виде объекта в переменную. Также записать в эту переменную
	//	 	документные координаты (x,y) центра элемента target.
	targetDocMetrics = getBoundingDocRect(target);




	//5. Проверить CSS-свойство position элемента target (вычисленные стили).
	//		- Если его значение = 'absolute', ничего не делать.
	//	 	- В противном случае, установить ему значение 'absolute'
	if(window.getComputedStyle(target,'').position !== 'absolute') {
		target.style.position = 'absolute';
	}



	//6. Переместить элемент target в элемент body, сделав его его дочерним
	//		элементом. Т.О. можно быть уверенным в том, что target не находится
	//		внутри какого-нибудь элемента в position: relative, и при назначении
	//		положения target с помощью left и top будут использоваться координаты
	//	 	с точкой отсчета относительно ЛВ угла документа, а не ЛВ угла того
	//	 	самого эл-та с position: relative.
	document.body.appendChild(target);



	//7. Получить документные координаты курсора мыши при клике. Записать их
	//		в виде объекта в переменную.
	cursorDocCoords = {};
	cursorDocCoords.x = event.pageX;
	cursorDocCoords.y = event.pageY;



	//8. Получить разницу между координатами курсора из п.7 и координатами
	//		ЛВ угла элемента target из п.4, по осям X и Y. Записать в переменную
	//		в виде объекта.
	shift = {};
	shift.x = targetDocMetrics.left - cursorDocCoords.x;
	shift.y = targetDocMetrics.top - cursorDocCoords.y;



	//9. С помощью свойств left и top, воспользовавшись координатами, полученными
	//		в п.4, позиционировать элемент target в том же месте, где он был
	//		до того, как по нему кликнули.
	//		> Не забыть добавить в конце суффикс 'px'.
	target.style.left = targetDocMetrics.left + 'px';
	target.style.top = targetDocMetrics.top + 'px';



	//10. Внутри этой функции-обработчика назначить функцию-обработчик для
	//		события mousemove. Внутри неё выполнить: [2,11]
	doc.onmousemove = function(event) {



		//2. Применить функцию FixEvent, устраняющую все основные IE-несовместимости.
		//   И одновременно кроссбраузерно получить ссылку на объект-событие,
		//   которую и возвращает функция FixEvent. Также, кроссбраузерно получить
		//   target-элемент.

			// Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
			event = fixEvent(event);



		//11. Изменить позиционирование элемента по осям X и Y.
		//		 - По оси X = текущая координата курсора X + разница из п.8.
		//		 - По оси Y = текущая координата курсора Y + разница из п.8.
		//		 > Не забыть добавить в конце суффикс 'px'.
		target.style.left = event.pageX + shift.x + 'px';
		target.style.top = event.pageY + shift.y + 'px';



	};



	//12. Внутри функции-обработчика событий onmousedown назначить еще одну
	//		 функцию-обработчик для события mouseup. Внутри неё выполнить: [13]
	doc.onmouseup = function(event) {


		//13. Удалить функцию-обработчик mousemove.
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