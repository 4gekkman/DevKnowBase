/**
 * Задача:
 *
 * > Сделать такой div, HTML-текст внутри которого можно редактировать.
 *
 * > Концпеция такова:
 * 	 - Должно быть 2 элемента - div и textarea.
 * 	 - Они должны быть одинаковых размеров.
 * 	 - У них должны быть одинаковые наборы координат (т.е. они находятся
 * 	 	 в одном и том же месте).
 * 	 - Одновременно: один из них видим, а другой нет.
 * 	 	 - В режиме просмотра: div видим, textarea - нет.
 * 	 	 - В режиме редактирования: textarea видим, div - нет.
 *
 * > Что будем использовать в этом примере, чтобы делать элемент невидимым?
 * 	 Варианты:
 * 	 - display: none
 * 	 - visibility: hidden
 *
 *		> В этой задаче будем использовать display: none, потому что у элемента
 *			с display: none размеры и координаты становятся нулевыми. В отличие
 *			от элемента с visibility: hidden.
 *
 *
 *
 * Архитектура решения:
 *
 * 1. Подготовить необходимый HTML и CSS. Должно быть:
 * 		- 2 HTML-элемента - div и textarea.
 * 		- Размеры одинаковые
 * 	  - У элемента textarea CSS-свойство display: none
 *
 * 2. Получить ссылки и сохранить их в переменные на элементы:
 * 		- div
 * 	  - textarea
 *
 * 3. Назначить функцию-обработчик события keydown элементу body.
 * 		В ней выполнить следующее: []
 *
 * 4. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
 * 		Также, кроссбраузерно получить target-элемент
 *
 * 5. Кроссбраузерно получить нажатый символ.
 *
 * 6. Если было нажато сочетание CTRL-E, выполнить:
 * 		- Для элемента div сделать display: none.
 * 	  - Для элемента textarea сделать display: block
 * 	  - Свойству textarea.value присвоить значение div.innerHTML.
 *
 * 7. Если было нажато сочетание CTRL-S, выполнить:
 * 		- Для элемента div сделать display: block.
 * 	  - Для элемента textarea сделать display: none
 * 	  - Свойству div.innerHTML присвоить значение textarea.value.
 * 	  - Отменить действия браузера по умолч., иначе появится окно сохранения.
 *
 *
 *
 */



// Задействованные переменные
var target,			// целевой элемент события
		char,				// нажатый символ
		div,				// ссылка на div с id='view'
		textarea;		// ссылка на textarea с id='area'






//2. Получить ссылки и сохранить их в переменные на элементы:
//		- div
//	  - textarea
div = document.getElementById('view');
textarea = document.getElementById('area');




//3. Назначить функцию-обработчик события keydown элементу body.
//		В ней выполнить следующее: []
document.body.onkeydown = function(event) {



	//4. Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами.
	//		Также, кроссбраузерно получить target-элемент

		//Кроссбраузерно получить объект-событие с уже примененными IE FIX-ами
		event = fixEvent(event);

		//Кроссбраузерно получить target-элемент
		target = 	event && event.target ||
									event.srcElement;


	//5. Кроссбраузерно получить нажатый символ.
	char = getChar(event);

	console.log('event.which = '+event.which);
	console.log('event.charCode = '+event.charCode);
	console.log('char = '+char);

	//6. Если было нажато сочетание CTRL-E, выполнить:
	//		- Для элемента div сделать display: none.
	//	  - Для элемента textarea сделать display: block
	//	  - Свойству textarea.value присвоить значение div.innerHTML.
	if((char === 'e' || char === 'E') && event.ctrlKey) {

		// Для элемента div сделать display: none.
		div.style.display = 'none';

		// Для элемента textarea сделать display: block
		textarea.style.display = 'block';

		// Свойству textarea.value присвоить значение div.innerHTML.
		textarea.value = div.innerHTML;

	}



	//7. Если было нажато сочетание CTRL-S, выполнить:
	//		- Для элемента div сделать display: block.
	//	  - Для элемента textarea сделать display: none
	//	  - Свойству div.innerHTML присвоить значение textarea.value.
	if((char === 's' || char === 'S') && event.ctrlKey) {

		// Для элемента textarea сделать display: none
		textarea.style.display = 'none';

		// Для элемента div сделать display: block.
		div.style.display = 'block';

		// Свойству textarea.value присвоить значение div.innerHTML.
		div.innerHTML = textarea.value;

		// Отменить действия браузера по умолч., иначе появится окно сохранения.

			// Кроссбраузерно отменить действия браузера "по умолчанию" в ответ
			// на возникновение события:
			event.preventDefault ? event.preventDefault() :
														(event.returnValue=false);

	}


};






// Вспомогательные функции


	// Кроссбраузерная функция для получения символа из события keypress
	// > event.type должен быть keypress
	// > Этот вариант фукнции не позволяет получить спец. символы
	function getChar(event) {
		if (event.which == null) {  // IE
			if (event.keyCode < 32) return null; // спец. символ
			return String.fromCharCode(event.keyCode)
		}

		if (event.which!=0 || event.charCode!=0) { // все кроме IE
			if (event.which < 32) return null; // спец. символ
			return String.fromCharCode(event.which); // остальные
		}

		return null; // спец. символ
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


