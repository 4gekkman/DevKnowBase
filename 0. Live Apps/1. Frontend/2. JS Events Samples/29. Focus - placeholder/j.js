/**
 * Задача:
 *
 * > Сделать плейсхолдер, который бы работал с input типа text.
 *
 * > Он должен быть сделан на основе паттерна "Поведение" - т.е. плейсхолдер
 * 	 должен работать со всеми эл-тами input типа text класса placeholder, у
 * 	 которых есть атрибут data-placeholder  = 'text', где text используется в
 * 	 качестве текста плейсхолдера
 *
 * >
 *
 *
 *
 *
 * Архитектура решения:
 *
 * 1. Получить NodeList со всеми элементами класса placeholder.
 *
 * 2. Для всех элементов с tagName = 'INPUT' и атрибутом type = 'text',
 * 		и у которых есть не пустой атрибут data-placeholder, присвоить
 * 	 	значение value, равное значению атрибута data-placeholder.
 *
 * 3. Создать функцию-обработчик для события focus, и назначить её
 * 		элементу body - таким образом, чтобы это событие можно было
 * 	  кроссбраузерным образом ловить на body. В этой функции
 * 	  сделать следующее: [4,5]
 *
 * 4. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
 * 		Также, кроссбраузерно получить target-элемент
 *
 * 5. Установить значение свойству target.value = ''
 *
 * 6. Создать функцию-обработчик для события blur, и назначить её
 * 		элементу body - таким образом, чтобы это событие можно было
 * 	  кроссбраузерным образом ловить на body. В этой функции
 * 	  сделать следующее: [7,8]
 *
 * 7. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
 * 		Также, кроссбраузерно получить target-элемент
 *
 * 8. Установить значение свойству target.value =
 * 		target.getAttribute('data-placeholder');
 *
 */



// Задействованыне переменные
var target,													// целевой элемент события
		elementsWithPlaceholderClass,		// NodeList со всеми эл-ми, содержащими класс 'placeholder'
		onInputFocus,										// функция-обработчик для события focus
		onInputBlur;										// функция-обработчик для события blur

//1. Получить NodeList со всеми элементами класса placeholder.
elementsWithPlaceholderClass = document.getElementsByClassName('placeholder');




//2. Для всех элементов с tagName = 'INPUT' и атрибутом type = 'text',
//		и у которых есть не пустой атрибут data-placeholder, присвоить
//	 	значение value, равное значению атрибута data-placeholder.
for(var i=elementsWithPlaceholderClass.length-1; i>=0; i--) {

	if(elementsWithPlaceholderClass[i].tagName==='INPUT' &&
		 elementsWithPlaceholderClass[i].type === 'text' &&
		 elementsWithPlaceholderClass[i].getAttribute('data-placeholder')) {

		elementsWithPlaceholderClass[i].value =
				elementsWithPlaceholderClass[i].getAttribute('data-placeholder');

	}
}



//3. 	Создать функцию-обработчик для события focus, и назначить её
//		элементу body - таким образом, чтобы это событие можно было
//	  кроссбраузерным образом ловить на body. В этой функции
//	  сделать следующее: [4,5]

	// Функция-обработчик
	onInputFocus = function(event) {


		//4. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
		//		Также, кроссбраузерно получить target-элемент

			//Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
			event = fixEvent(event);

			//Кроссбраузерно получить target-элемент
			target = 	event && event.target ||
										event.srcElement;


		//5. Установить значение свойству target.value = ''
		target.value = '';


	};

	// Назначение функции-обработчика события onfocus

		// Для всех браузеров, кроме IE<=8
		if (document.body.addEventListener) {
			document.body.addEventListener('focus', onInputFocus, true);
		}

		// Для IE<=8
		else {
			document.body.onfocusin = onInputFocus;
		}



	//6. Создать функцию-обработчик для события blur, и назначить её
	//		элементу body - таким образом, чтобы это событие можно было
	//	  кроссбраузерным образом ловить на body. В этой функции
	//	  сделать следующее: [7,8]

	// Функция-обработчик
	onInputBlur = function(event) {


		//4. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
		//		Также, кроссбраузерно получить target-элемент

			//Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
			event = fixEvent(event);

			//Кроссбраузерно получить target-элемент
			target = 	event && event.target ||
										event.srcElement;


		//8. Установить значение свойству target.value =
		//		target.getAttribute('data-placeholder');
		target.value = target.getAttribute('data-placeholder');

	};

	// Назначение функции-обработчика события onfocus

		// Для всех браузеров, кроме IE<=8
		if (document.body.addEventListener) {
			document.body.addEventListener('blur', onInputBlur, true);
		}

		// Для IE<=8
		else {
			document.body.onfocusout = onInputBlur;
		}








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





