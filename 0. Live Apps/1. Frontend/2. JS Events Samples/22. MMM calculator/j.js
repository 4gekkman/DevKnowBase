/**
 * Задача:
 *
 * > Сделать калькурятор было/станет для МММ образца лета 2011.
 *
 * > Доступные виды вкладов:
 *
 * 	 Срок:		 			%-ая ставка в мес. (не льготник)		%-ая ставка в мес (льготник)
 * 	   1 месяц				20%																	30%
 * 	   3 месяца				30%																	40%
 * 	   6 месяцев			40%																	50%
 * 	   12 месяцев			50%																	60%
 *
 *
 * > Элементы, которые должны присутствовать в форме:
 *
 * 	 > 1. Поле для ввода суммы вклада - input типа text
 * 	 	 		- Только цифры
 * 	 	 	 	- В диапазоне от 0 до 100000
 * 	 	 	 	- Учитывать разные методы ввода, а не только клавиатуру
 *
 * 	 > 2. Поле для выбора срока вклада - input типа select
 * 	 			- Можно выбрать 1 из 4 вариантов.
 * 	 		  - Использовать событие change
 *
 * 	 > 3. Поле, в котором можно поставить галочку "льготник" - input типа checkbox
 *				- Если галочки нет, то рассчитывать как для "не льготника"
 *				- Если галочка стоит, то рассчитывать как для "льготника"
 *				- Использовать событие change + событие propertychange (для IE<=8)
 *
 *
 * > Каков должен быть выходной визуальный результат для пользователей:
 *
 * 		> 1. %-ая ставка в месяц.
 * 				 - Должна актуализироваться при изменении любого из вышеописанных полей.
 *
 * 		> 2. Два горизонтальных блока типа div.
 * 				 > Верхний:
 * 				 	 - Серого цвета.
 * 				 	 - Визуально показывает сколько было. Размер - в % относительно
 * 				 	 	 нижнего блока.
 * 				 	 - Слева от блока показывается абсолютное значение в виде суммы
 * 				 	   денег, введенной в поле для вводы суммы вклада, с названием валюты.
 * 				 > Нижний:
 * 				 	 - Зеленого цвета.
 * 				 	 - Визуально показывает сколько стало. Размер фиксированный.
 * 				 	 - Слева от блока показывается абсолютное значение в виде суммы
 * 				 	   денег, введенной в поле для вводы суммы вклада, с названием валюты.
 *
 *
 * Обсуждение решения:
 *
 * > Работа с вводом суммы вклада через input типа text:
 *
 * 	 - Использовать события:
 * 	 	 - input  	|	отслеживать любое изменение кроме вставки командой
 * 	 	 	 						"вставки" в старых Opera, а также удаления символов в IE<=9
 * 	 	 - paste  	| отслеживать ввод командой "вставка"
 * 	 	 - keyup		| отслеживать удаление клавишами delete/backspace
 * 	 	 - cut			| отслеживать удаление командой "вырезать"
 *
 * 	 - Отследив изменение значения input, изменить и значения информационных
 * 	 	 эл-тов - итоговой % ставки и наглядных баров.
 *
 *
 * > Работа с вводом срока вклада через элемент формы select:
 *
 * 	 - Использовать события:
 * 	   - change						| отслеживать изменения значения элемента не дожидаясь
 * 	   											пока он потеряет фокус (кроме IE<=8)
 *
 * 	 - Отследив изменение значения, изменить и значения информационных
 * 	 	 эл-тов - итоговой % ставки и наглядных баров.
 *
 *
 * > Работа с отметкой "льготный" - через элемент формы input типа checkbox:
 *
 * 	 - Использовать события:
 * 	   - change						| отслеживать изменения значения элемента не дожидаясь
 * 	   											пока он потеряет фокус (кроме IE<=8)
 * 	   - propertychange		| тоже самое, только для IE<=8. В обработчике этого
 * 	   											события не забыть поставить проверку того, что изменение
 * 	   										  произошло в атрибуте value.
 *
 * 	 - Отследив изменение значения, изменить и значения информационных
 * 	 	 эл-тов - итоговой % ставки и наглядных баров.
 *
 *	> Как работать с HTML-элементом select описано здесь:
 *				http://stackoverflow.com/questions/1085801/how-to-get-the-selected-value-of-dropdownlist-using-javascript
 *	>
 *
 *
 *
 *
 *
 * Архитектура решения:
 *
 * 1. Сделать HTML/CSS заготовку для виджета.
 *
 * 2. Получить ссылки на следующие объекты, и сохранить эти ссылки в переменные:
 *    1) На элемент input с id='sumInput'.
 *    2) На элемент select с id='sel'.
 *    3) На элемент input с id='check'.
 *    4) На элемент span с id='resultPersent'.
 *    5) На элемент div с id='was'.
 *    6) На элемент div с id='now'.
 *
 * 3. Создать 2 функции для отслеживания изменений эл-тов:
 * 		одна для sumInput, другая для sel и check. Они должны:
 * 		1) Реагировать на изменение значений соотв-его элемента формы,
 * 			 рассчитывать новые значения и изменять значения информационных
 * 			 элементов (4-6).
 * 		2) А sumInput должна приводить значение sumInput.value в соответствие
 * 			 с требованиями:
 * 	 		 - Оно должно быть числом. Если нет, то изменить на 0.
 * 	 		 - Оно должно быть числом больше 0. Если нет, то изменить на 0.
 * 	 		 - Оно должно быть числом меньше 100000. Если нет, то изменить на 100000.
 *
 * 4. Назначить функцию из п.3 для sumInput элементу sumInput в качестве
 * 		функции-обработчика следующих событий: input, keyup, paste, cut.
 * 	  - Причем, с помощью пользовательской функции setImmediate сделать так,
 * 	  	чтобы задача выполнения этого обработчика в стеке задач потока
 * 	  	пропустила вперед себя действия браузера "по умолчанию" для всех
 * 	  	вышеуказанных событий.
 *
 * 5. Назначить функцию из п.3 для sel и check элементу sel в качестве
 * 		функции-обработчика события change, и элементу check в качестве
 * 		функции-обработчика событий change и propertychange.
 *
 * 6. (упразднен)
 *
 *
 *
 * 7. Написать ф-ию для актуализации размера %-й ставки в эл-те resultPersent
 *
 * 8. Написать ф-ию для актуализации надписей над барами was и now.
 *
 * 9. Написать ф-ию для актуализации размеров баров was и now
 *
 *
 *
 *
 *
 */


// Используемые переменные
var inputSumInput,			// переменная для п.2
		selectSel,					// переменная для п.2
		inputCheck,					// переменная для п.2
		spanResultPersent,	// переменная для п.2
		divWas,							// переменная для п.2
		divNow,							// переменная для п.2
		spanWas,						// переменная для п.2
		spanNow,						// переменная для п.2

		funcForInput,						// функция для п.3 для sumInput
		funcForSelectAndCheck;	// функция для п.3 для sel



//2. Получить ссылки на следующие объекты, и сохранить эти ссылки в переменные:
//   1) На элемент input с id='sumInput'.
//   2) На элемент select с id='sel'.
//   3) На элемент input с id='check'.
//   4) На элемент span с id='resultPersent'.
//   5) На элемент div с id='was'.
//   6) На элемент div с id='now'.
inputSumInput = document.getElementById('sumInput');
selectSel = document.getElementById('sel');
inputCheck = document.getElementById('check');
spanResultPersent = document.getElementById('resultPersent');
divWas = document.getElementById('was');
divNow = document.getElementById('now');
spanWas = document.getElementById('wasSpan');
spanNow = document.getElementById('nowSpan');



//3. Создать 3 функции для отслеживания изменений эл-тов
//		sumInput, sel, check. Они должны:
//		1) Реагировать на изменение значений соотв-его элемента формы,
//			 рассчитывать новые значения и изменять значения информационных
//			 элементов (4-6).
//		2) Приводить значение sumInput.value в соответствие со требованиями:
//	 		 - Оно должно быть числом. Если нет, то изменить на 0.
//	 		 - Оно должно быть числом больше 0. Если нет, то изменить на 0.
//	 		 - Оно должно быть числом меньше 100000. Если нет, то изменить на 100000.


	// Функция для отслеживания изменений в sumInput
	funcForInput = function() {

		// Фильрация ввода

			// Получить текущее значение input
			var curInput = inputSumInput.value;

			// Если curInput не число, изменить значение inputSumInput.value на ''.
			if(!isNumeric(curInput)) inputSumInput.value = '';

			// Если curInput < 0, присвоить св-ву inputSumInput.value значение 0
			if(curInput < 0) inputSumInput.value = 0;

			// Если curInput > 100000, присвоить св-ву inputSumInput.value значение 100000
			if(curInput > 100000) inputSumInput.value = 100000;


		// Изменение надписей на барах
		actualyzeWasAndNowSpan();

		// Изменение размеров баров
		actualyzeWasAndNowBars();

	};

	// Функция для отслеживания изменений в sel и check
	funcForSelectAndCheck = function() {

		// Изменение размера отображаемой % ставки
		actualyzeResultPersent();

		// Изменение надписей на барах
		actualyzeWasAndNowSpan();

		// Изменение размеров баров
		actualyzeWasAndNowBars();

	};



//4. Назначить функцию из п.3 для sumInput элементу sumInput в качестве
//		функции-обработчика следующих событий: input, keyup, paste, cut.
//	  - Причем, с помощью пользовательской функции setImmediate сделать так,
//	  	чтобы задача выполнения этого обработчика в стеке задач потока
//	  	пропустила вперед себя действия браузера "по умолчанию" для всех
//	  	вышеуказанных событий.
inputSumInput.oninput =
inputSumInput.onkeyup =
inputSumInput.onpaste =
inputSumInput.oncut = function(event) {

	setImmediate(funcForInput);

};




//5. Назначить функцию из п.3 для sel элементу sel в качестве
//		функции-обработчика события change.
selectSel.onchange =
inputCheck.onchange =
inputCheck.propertychange = funcForSelectAndCheck;




//7. Написать ф-ию для актуализации размера %-й ставки в эл-те resultPersent
function actualyzeResultPersent() {

	// Получить новое значение чекбокса "льготник" - true или false
	var curCheckboxVal = inputCheck.checked;

	// Получить выбранное значение select
	var newSelectedValue = selectSel.options[selectSel.selectedIndex].value;

	// Изменить отображаемый размер итоговой % ставки:
	switch(parseInt(newSelectedValue)) {
		case 1: spanResultPersent.innerHTML = 20; break;
		case 3: spanResultPersent.innerHTML = 30; break;
		case 6: spanResultPersent.innerHTML = 40; break;
		case 12: spanResultPersent.innerHTML = 50; break;
		default: spanResultPersent.innerHTML = 20;
	}
	if(curCheckboxVal)
		spanResultPersent.innerHTML = parseInt(spanResultPersent.innerHTML) + 10;

}



//8. Написать ф-ию для актуализации надписей над барами was и now.
function actualyzeWasAndNowSpan() {

	// Изменить надпись на баре "было"
	if(inputSumInput.value) spanWas.innerHTML = parseFloat(inputSumInput.value).toFixed(2);
	else spanWas.innerHTML = '0.00';


	// Изменить надпись на баре "стало"

			// Получить текущее значение срока вклада (1/3/6/12):
			var curDepoTime = selectSel.options[selectSel.selectedIndex].value;

			// Получить текущее значение итоговой % ставки:
			var curPersent = spanResultPersent.innerHTML;

			// Изменить надпись на баре "стало"
			var r = spanWas.innerHTML;
			for(var i=curDepoTime; i>=1; i--) {
				r *= 1+curPersent/100;
			}
			spanNow.innerHTML = r.toFixed(2);

}




//9. Написать ф-ию для актуализации размеров баров was и now
function actualyzeWasAndNowBars() {

	// Изменить размер бара было:
	divWas.style.width = 100*(spanWas.innerHTML/spanNow.innerHTML) + '%';

	// Изменить размер бара стало:
	if(parseInt(spanNow.innerHTML) > 0)
	divNow.style.width = 100 + '%';

}
















// Вспомогательные функции




	// boolean isNumeric(n)
	// > Пользовательская функция
	// > Проверяет, является ли аргумент числом
	// > Возвращает true, если аргумент - число; иначе false
			function isNumeric(n) {
					return !isNaN(parseFloat(n)) && isFinite(n);
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


