/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
JavaScript.
0. Practical samples and techniques
9. Drag of absolute HTML-element











-------------------------------------------------- */

// Вспомогательная функция для получения смещения полос прокрутки кроссбраузерно.
var getScrollOffsets = function(w){
	// Если ф-ия вызвана без аргумента, использовать окно window вместо w
	w = w || window;

	// Для всех браузеров кроме IE <= 8
	if(w.pageXOffset != null) {
		return {x: w.pageXOffset,
						y: w.pageYOffset};
	}

	// Для IE <= 8
	var d = w.document;
	if(document.compatMode == 'CSS1Compat') {
		return {x: d.documentElement.scrollLeft,
						y: d.documentElement.scrollTop};
	}

	// Для браузеров в режиме совместимости
	return {x: d.body.scrollLeft,
					y: d.body.scrollTop};

};



// Функция-обработчик
var drag = function(elementToDrag, event){

	// Преобразовать начальные координаты указателя мыши в координаты документа
	var scroll = getScrollOffsets();
	var startX = event.clientX + scroll.x;
	var startY = event.clientY + scroll.y;

	// > Первоначальные координаты элемента - страничные, относительно начала
	// 	 документа, который будет перемещаться
	// > Так как elementToDrag имеет абсолютное позиционирование, предполагается,
	//   что его свойство offsetParent ссылается на тело документа.
	var origX = elementToDrag.offsetLeft;
	var origY = elementToDrag.offsetTop;

	// Найти расстояние между точкой события mousedown и верхним левым углом
	// элемента. Это расстояние будет учитываться при перемещении указателя мыши
	var deltaX = startX - origX;
	var deltaY = startY - origY;

	// Зарегистрировать обработчики событий mousemove и mouseup,
	// которые последуют за событием mousedown
	if(document.addEventListener) {				// стандартная модель событий
		// Зарегистрировать перехватывающие обработчики в документе
		document.addEventListener('mousemove', moveHandler, true);
		document.addEventListener('mouseup', upHandler, true);
	} else if(document.attachEvent) {			// модель событий для IE
		// В модели событий IE перехват событий осуществляется вызовом
		// метода setCapture() элемента
		elementToDrag.setCapture();
		elementToDrag.attachEvent('onmousemove', moveHandler);
		elementToDrag.attachEvent('onmouseup', upHandler);
		elementToDrag('onlosecapture', upHandler);
	}

	// Это событие обработано и не должно передаваться другим обработчикам
	if(event.stopPropagation) event.stopPropagation();  // стандартная модель событий
	else event.cancelBubble = true;                     // модель событий IE

	// Предотвратить выполнение действий, предусмотренных по умолчанию
	if(event.preventDefault) event.preventDefault();		// стандартная модель событий
	else event.returnValue = false;											// модель событий IE

	// Этот обработчик перехватывает событий mousemove, возникающие в
	// процессе буксировки элемента. Он отвечает за перемещение элемента.
	function moveHandler(e) {
		if(!e) e = window.element;		// модель событий IE

		// Переместить элемент в позицию указателя мыши с учетом позиций
		// полос прокрутки и смещений относительно начального щелчка.
		var scroll  =getScrollOffsets();
		elementToDrag.style.left = (e.clientX + scroll.x - deltaX) + 'px';
		elementToDrag.style.top = (e.clientY + scroll.y - deltaY) + 'px';

		// Прервать дальнейшее распространение события
		if(event.stopPropagation) event.stopPropagation();  // стандартная модель событий
		else event.cancelBubble = true;                     // модель событий IE

	}

	// Этот обработчик перехватывает заключительное событие mouseup, которое
	// завершает операцию буксировки
	function upHandler(e) {
		if(!e) e = window.event;			// Модель событий IE

		// Удалить перехватывающие обработчики событий
		if(document.removeEventListener) {		// стандартная модель событий
			document.removeEventListener('mouseup', upHandler, true);
			document.removeEventListener('mousemove', moveHandler, true);
		} else if(document.detachEvent) {			// // модель событий IE
			elementToDrag.detachEvent('onlosecapture', upHandler);
			elementToDrag.detachEvent('onmouseup', upHandler);
			elementToDrag.detachEvent('onmousemove', moveHandler);
			elementToDrag.releaseCapture();
		}

		// И прервать дальнейшее распространение события
		if(event.stopPropagation) event.stopPropagation();  // стандартная модель событий
		else event.cancelBubble = true;                     // модель событий IE

		// Обновить все элементы класса lines
		// > Функция находит все элементы класса lines, удаляет их, и отрисовыает
		//   заново с учетом новых координат.
		refreshLines();

	}






};



/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	>




*****************************************************
Оглавление:

	> О функциии getScrollOffsets(w)
	> О функциии drag(elementToDrag, event)








*****************************************************




> О функциии getScrollOffsets(w)
	> Позволяет получить позиции полос прокрутки окна кроссбраузерно.
	> w - ссылка на окно, чьи позиции полос прокретки надо получить.

> О функциии drag(elementToDrag, event)
	> Буксировка абсолютно позиционированных HTML-элементов
		> Функция drag() должна вызываться из обработчика события mousedown.
		> Последующие события mousemove будут вызывать перемещение указанного
			элемента.
		> События mouseup будет завершать буксировку.
		> Эта реализация действует в обеих моделях событий - стандартной и IE.
		> Дополнительно используется функция getScrollOffsets()
	> Аргументы:
		> elementToDrag - элемент, принявший событие mousedown, или содержащий
			его элемент. Должен иметь position: absolute. Значения его свойств
			style.left и style.top будут изменяться при перемещении указателя
			мыши пользователем.
		> event - объект Event, полученный обработчиком события mousedown.







-------------------------------------------------- */