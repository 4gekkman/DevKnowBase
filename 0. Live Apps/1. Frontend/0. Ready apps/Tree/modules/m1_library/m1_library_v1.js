
// ========================================
// Модуль "m1_library_v1" приложения "tree"
// ========================================



/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------

Ссылки:




/*
*****************************************************
Оглавление:

	> О модуле
		> Описание модуля
		> Вход: зависимости модуля
		> Выход: что возвращает модуль

	> Список функций библиотеки
	> Архитектура модуля


*****************************************************


> О модуле:

	> Описание модуля
		- Модуль содержит библиотеку функций, которые нужны для работы
			большинства других модулей приложения "дерево".
		- Сюда стоит добавлять небольшие по размеру функции, которые нужны
			в более, чем 1 модуле приложения.

	> Вход: зависимости модуля
		- нет

	> Выход: что возвращает модуль
		- Ссылку на объект, который содержит ссылки на все функции библиотеки.
		- В этом объекте ключи - это имена функций библиотеки.



> Список функций библиотеки


	A. Общий раздел
	=====================
		- Сюда попадают функции, для которых не требуется создавать
			отдельный раздел со специальным описанием

	a1.	fixEvent				//	Принимает объект-событие, исправляет его
													кроссбраузерные недостатки.

	a2.	checkClass			//	Проверить наличие указанного класса в атрибуте className
													у указанного элемента.


	a3.	addClass				//	Добавить указанный класс в атрибут className указанного
													элемента.

	a4.	removeClass			//	Удалить указанный класс из атрибута className указанного
													элемента.

	a5.	addEvent				//	Кроссбраузерно добавляет функцию-обработчик события
													указанному элементу для обработки указанного события.

	a6.	removeEvent			//	Кроссбраузерно удаляет функцию-обработчик события
													из указанного элемента для обработки указанного события.

	a7.	getTrees()
											// Возвращает список ссылок на все элементы div в документе,
													которые олицетворяют собой и своим содержимым экземпляры
													приложения дерево.


	B. Анимационные функции
	============================
		> Это специальный раздел для анимационных функций, позволяющих
			анимировать CSS-свойства с начальным/конечным значениями типа
			fixed/auto, auto/fixed, auto/auto. Анимация производится с помощью CSS3.
			Без этих функций анимировать CSS-свойства в указанных выше ситуациях
			с помощью CSS3 не получится.
		> Процесс анимации в случае fixed/auto
			> Проблема
				- При изменении значения CSS-свойства от FIXED-значения к AUTO-значению,
					CSS3 анимация не сработает, и значение будет изменено рывком.
			> Решение
				- Сразу после изменения значения CSS-свойства на AUTO, применить
					функцию animateCssAfter.
		> Процесс анимации в случае auto/fixed
			> Проблема
				- При изменении значения CSS-свойства от AUTO-значения к FIXED-значению,
					CSS3 анимация не сработает, и значение будет изменено рывком.
			> Решение
				- Непосредственно перед изменением значения CSS-свойства на FIXED-значение,
					применить функцию animateCssBefore.
		> Процесс анимации в случае auto/auto
			> Проблема
				- Обе вышеописанные проблемы одновременно.
			> Решение
				- Непосредственно перед изменением значения CSS-свойства на FIXED-значение,
					применить функцию animateCssBefore.
				- Сразу после изменения значения CSS-свойства на AUTO, применить
					функцию animateCssAfter.
		> Дополнительная проблема с display:none
			> Проблема
				- Допустим нам надо анимировать схлопывание элемента так, чтобы его
					размер уменьшился с AUTO до 0, а значение его CSS-свойства display стало 0.
					Но последнее должно произойти ПОСЛЕ, а не ДО анимации схлопывания.
					И допустим, мы можем использовать animateCssAfter только после того,
					как display уже установлено в none.
			> Решение (только для анимаций типа auto/fixed)
				- Вместо функции animateCssAfter, сразу после изменения значения
					CSS-свойства использовать функцию animateCssAfterSpec. Её отличие
					в том, что она на время анимации делает элементу значение CSS-свойства
					display равным block вместо none. И Т.О. анимация становится возможной.


	b1.	animateCssBefore			//	Функция изменяет значение CSS-свойства property элемента
																element с auto на соответствующее ему точное значение.



	b2.	animateCssAfter				//	Функция проводит CSS-анимацию целевого свойства, и
																подчищает за собой "следы".

	b3.	animateCssAfterSpec		//	Специальная версия функции animateCssAfter.


> Архитектура модуля

[-----IN. Входы модуля]

IN1.	С помощью функции define определить модуль. Внутри callback-функции
			модуля выполнить следующее: [x1,x2,x3]

	[-----X. Реализация библиотеки]
	x1.	Создать переменную library и инициировать её объектом. Далее в этот
			объект будут записаны все функции библиотеки.



[-----OUT. Выходы модуля]

OUT1.	Вернуть ссылку на объект из x1, содержащий все функции библиотеки.


*/


/* --------------------------------------------------
---------------- Р Е А Л И З А Ц И Я ----------------*/


//[-----IN.. Входы модуля]

//IN1.	С помощью функции define определить модуль. Внутри callback-функции
//			модуля выполнить следующее: [x1,x2,x3]

define(function(){

	console.log('Загрузился модуль "m1_library_v1"');


//[-----X. Реализация библиотеки]

//x1.	Создать переменную library и инициировать её объектом. Далее в этот
//		объект будут записаны все функции библиотеки.
var library = {};


//x2.	Как свойства объекта library, определить все функции библиотеки.


	// [-----A. Общий раздел]

	//a1.	fixEvent			|	Принимает объект-событие и исправляет все его кроссбраузерные
	//										недостатки.
	//										Аргументы:
	//											- e			| объект-событие
	//											- _this	| ?
	//										Возвращает:
	//											- объект-события и исправленными кроссбраузерными недостатками
	//										Пример использования:
	//											- event = fixEvent(event);

	library.fixEvent = function(e, _this) {
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
	};


	//a2.	checkClass(id, classname, element)
	//									|	Проверить наличие указанного класса в атрибуте className
	//										у указанного элемента.
	//										Аргументы:
	//											- id					| id элемента
	//											- classname		| имя класса
	//											- element			| ссылка на элемент
	//										Особенности:
	//											- аргумент element не обязателен, но если он указан,
	//												то аргумент id будет проигнорирован.
	//										Возвращает:
	//											- -1, если элемент с id не найден
	//											- 0, если класс className в элементе с id не найден
	//											- 1, если класс className в элементе с id найден

	library.checkClass = function(id, classname, element) {

		// Получить ссылку на эл-т, в котором надо производить поиск
		var e;

			// Если element передан:
			// - проигнорировать id
			// - использовать element для поиска в нём classname
			if(element) e = element;

			// Если element не передан:
			// - используя id получить ссылку на эл-т, и в нём искать classname
			else e = document.getElementById(id);

		// Если элемент с id не найден, вернуть -1
		if(e == null || e == undefined) return -1;

		// Получить строку с содержимым className элемента e:
		var classes = e.className;

		// Проверить, есть ли в строке classes подстрока className
		// - если нет, то вернуть 0.
		// - если да, то вернуть 1.
		if(classes.search(new RegExp(classname,'i')) !== -1) return 1;
		else return 0;

	};


	//a3.	addClass(id, classname, element)
	//									|	Добавить указанный класс в атрибут className указанного
	//										элемента.
	//										Аргументы:
	//											- id					| id элемента
	//											- classname		| имя класса
	//											- element			| ссылка на элемент
	//										Особенности:
	//											- аргумент element не обязателен, но если он указан,
	//												то аргумент id будет проигнорирован.
	//											- перед добавлением класса функция проверяет, есть ли
	//												уже у эл-та такой класс, и если есть, то повторно
	//												его не добавляет.
	//										Возвращает:
	//											- -1, если элемент с id не найден
	//											- 0, если класс className уже есть у element
	//											- 1, если класса className не было у element, и он был добавлен

	library.addClass = function(id, classname, element) {

		// Получить ссылку на эл-т, к которому надо добавить класс
		var e;

			// Если element передан:
			// - проигнорировать id
			// - использовать element
			if(element) e = element;

			// Если element не передан:
			// - используя id получить ссылку на элемент
			else e = document.getElementById(id);

		// Если элемент с id не найден, вернуть -1
		if(e == null || e == undefined) return -1;

		// Получить строку с содержимым className элемента e:
		var classes = e.className;

		// Проверить, есть ли в строке classes подстрока className
		// - если нет, то добавить её в e.className последней через пробел,
		//	 и вернуть 1.
		// - если да, то вернуть 0.
		if(classes.search(new RegExp(classname,'i')) == -1) {

			// Проверить, если classes == '', то добавлять без пробела в начале
			if(classes == '') e.className += classname;

			// В иных случаях с пробелом в начале:
			else e.className += " " + classname;

			return 1;

		}
		else return 0;

	};


	//a4.	removeClass(id, classname, element)
	//									|	Удалить указанный класс из атрибута className указанного
	//										элемента.
	//										Аргументы:
	//											- id					| id элемента
	//											- classname		| имя класса
	//											- element			| ссылка на элемент
	//										Особенности:
	//											- аргумент element не обязателен, но если он указан,
	//												то аргумент id будет проигнорирован.
	//											- перед удалением класса функция проверяет, есть ли
	//												уже у эл-та такой класс, и если есть, то просто
	//												завершает свою работу.
	//										Возвращает:
	//											- -1, если элемент с id не найден
	//											- 0, если класс className и так не было у element
	//											- 1, если класса className был у element, и он был удалён

	library.removeClass = function(id, classname, element) {

		// Получить ссылку на эл-т, из которого надо удалить класс
		var e;

			// Если element передан:
			// - проигнорировать id
			// - использовать element
			if(element) e = element;

			// Если element не передан:
			// - используя id получить ссылку на элемент
			else e = document.getElementById(id);

		// Если элемент с id не найден, вернуть -1
		if(e == null || e == undefined) return -1;

		// Получить строку с содержимым className элемента e:
		var classes = e.className;

		// Проверить, есть ли в строке classes подстрока className
		// - если нет, то вернуть 0.
		if(classes.search(new RegExp(classname,'i')) == -1) return 0;

		// Найти все вхождения classname в classes, и заменить их на ''
		classes = classes.replace(new RegExp(classname, 'ig'), '');

		// Найти все вхождение 2-х и более пробелов в classes, и заменить их на ' '
		classes = classes.replace(/\s{1,}/ig ,' ');

		// Записать в e.className обработанную строку classes:
		e.className = classes;

		// Вернуть 1
		return 1;

	};


	//a5.	addEvent(element, event, phase, handler)
	//									|	Кроссбраузерно добавляет функцию-обработчик события
	//										указанному элементу для обработки указанного события.
	//										Аргументы:
	//											- element		| ссылка на элемент
	//											-	event			| имя события без приставки "on"
	//											- handler		| ссылка на функцию-обработчик
	//											- phase			| фаза, в которой ловить событие (только для addEventListener, в IE<=8 не работает)
	//										Возвращает:
	//											- ничего

	library.addEvent = function(element, event, phase, handler) {

		// Проверить, существует ли в этом браузере метод addEventListener
		// - Если да, то использовать его.
		// - Если нет, значит это старый IE, и использовать attachEvent

			// Если да, то использовать его.
			if (document.addEventListener) {
				element.addEventListener(event, handler, phase);
			}

			// Если нет, значит это старый IE, и использовать attachEvent
			else {
				element.attachEvent("on" + event, handler);
			}

	};


	//a6.	removeEvent(element, event, phase, handler)
	//									| Кроссбраузерно удаляет функцию-обработчик события
	//										из указанного элемента для обработки указанного события.
	//										Аргументы:
	//											- element		| ссылка на элемент
	//											-	event			| имя события без приставки "on"
	//											- handler		| ссылка на функцию-обработчик
	//											- phase			| фаза, в которой ловить событие (только для addEventListener, в IE<=8 не работает)
	//										Возвращает:
	//											- ничего

	library.removeEvent = function(element, event, phase, handler) {

		// Проверить, существует ли в этом браузере метод addEventListener
		// - Если да, то использовать removeEventListener.
		// - Если нет, значит это старый IE, и использовать detachEvent

			// Если да, то использовать removeEventListener.
			if (document.addEventListener) {
				element.removeEventListener(event, handler, phase);
			}

			// Если нет, значит это старый IE, и использовать detachEvent
			else {
				element.detachEvent("on" + event, handler);
			}

	};


	//a7.	getTrees()
	//									| Возвращает список ссылок на все элементы div в документе,
	//										которые олицетворяют собой и своим содержимым экземпляры
	//										приложения дерево.
	//										Аргументы:
	//											- нет
	//										Особенности:
	//											- фактически, ищет все HTML-элементы DIV в документе,
	//												у которых значение атрибута ID выглядит так:
	//												"treeUID" + любая цифра
	//										Возвращает:
	//										- 0, если ничего не найдено
	//										- Обычный массив со списком ссылок на найденные элементы.
	//											Индексы массива: 0, 1, 2 и т.д. Найденные элементы входят
	//											в него в том же порядке, в котором были найдены.

	library.getTrees = function() {

		// Получить список всех указанных элементов
		var allDivs = document.getElementsByTagName('div');
		var divs = [];
		for(var i=0; i<allDivs.length; i++) {

			// Регулярное выражение для проверки
			var reg = /^treeUID\d+/i;

			// Получить id текущего эл-та div
			var id = allDivs[i].id;

			// Проверить, проходит ли id проверку рег.выр. reg
			// - если false, значит не проходит, тогда перейти к след.итерации
			// - если true, значит проходит, тогда добавить allDivs[i] в конец массива divs
			if(!reg.test(id)) continue;
			else divs.push(allDivs[i]);

		}

		// Если массив divs пуст, вернуть 0 (значит не найден ни 1 div на странице)
		if(divs.length == 0) return 0;

		// Если массив divs не пуст, вернуть ссылку на него
		else return divs;

	};







	//[-----B. Анимационные функции]

	//b1.	animateCssBefore(property, id, element)
	//									|	Функция изменяет значение CSS-свойства property элемента
	//										element с auto на соответствующее ему точное значение.
	//										Аргументы:
	//										- Property	|	Имя CSS-свойства для анимации (например: "height")
	//										- id 				|	ID эл-та, CSS-свойство которого надо анимировать
	//										- element		|	Ссылка на эл-т, CSS-свойство котороно надо анимировать;
	//																	если указана ссылка, ID игнорируется
	//										Особенности:
	//											- Функцию надо применять при анимации CSS-свойства
	//												от AUTO-значения к [auto/fixed значению].
	//											- В случае, если значение CSS-свойство display элемента
	//												равно none, то значение свойства будет явно установлено
	//												в 0.
	//										Возвращает:
	//											- ничего
	//										Способ использования:
	//											- запустить непосредственно перед изменением значения
	//												целевого CSS-свойства.

	library.animateCssBefore = function(property, id, element) {

		// Получить ссылку на целевой элемент
		var e;

			// Если element передан:
			// - проигнорировать id
			// - использовать element
			if(element) e = element;

			// Если element не передан:
			// - используя id получить ссылку на элемент
			else e = document.getElementById(id);

		// Определить текущее значение property (до трансформации)
		var valueBefore = getComputedStyle(e,'')[property];

		// В случаях, когда у элемента установле CSS: "display: none",
		// или "display: inline", getComputedStyle может вернуть auto.
		// В случае "display: none" назначим ему "valueBefore = 0":
		if(getComputedStyle(e,'')['display'] == 'none') {
			valueBefore = 0;
		}

		// Установить свойству property элемента e явное значение valueBefore
		e.style[property] = valueBefore;

	};


	//b2.	animateCssAfter(property, speed, type, id, element)
	//									|	Функция проводит CSS-анимацию целевого свойства, и
	//										подчищает за собой "следы".
	//										Аргументы:
	//											- Property	|	Имя CSS-свойства для анимации (например: "height")
	//											- Speed			|	Скорость анимации в секундах (например: "0.5")
	//											- Type			|	Тип анимации (linear, ease, ease-in, ease-out, ease-in-out)
	//											- id 				|	ID эл-та, CSS-свойство которого надо анимировать
	//											- element		|	Ссылка на эл-т, CSS-свойство котороно надо анимировать;
	//											если указана ссылка, ID игнорируется
	//										Особенности:
	//											- Функцию надо применять при анимации CSS-свойства
	//												от [auto/fixed значения] к AUTO-значению.
	//											- При анимации типа [auto/auto] использовать только в
	//												связке с функцией animateCssBefore
	//											- В случае, если значение CSS-свойство display элемента
	//												равно none, то значение свойства будет явно установлено
	//												в 0.
	//										Возвращает:
	//											- ничего
	//										Способ использования:
	//											- запустить непосредственно после изменения значения
	//												целевого CSS-свойства.

	library.animateCssAfter = function(property, speed, type, id, element) {

		// Получить ссылку на целевой элемент
		var e;

			// Если element передан:
			// - проигнорировать id
			// - использовать element
			if(element) e = element;

			// Если element не передан:
			// - используя id получить ссылку на элемент
			else e = document.getElementById(id);

		// Определить текущее значение property (до трансформации)
		var valueBefore = e.style[property];

		// Определить, какие будет значение property после трансформации

			// Изменить текущее значение property на auto
			e.style[property] = 'auto';

			// Записать значение property после трансформации
			var valueAfter = getComputedStyle(e,'')[property];

			// В случаях, когда у элемента установле CSS: "display: none",
			// или "display: inline", getComputedStyle может вернуть auto.
			// В случае "display: none" назначим ему "valueBefore = 0":
			if(getComputedStyle(e,'')['display'] == 'none') {
				valueAfter = 0;
			}

			// Изменить текущее значение property обратно
			// (чтобы никто ничего не заметил =) )
			e.style[property] = valueBefore;

		// Заставить всё перерисоваться (без этого анимации не будет)
		e.offsetWidth;

		// Назначить transition (с учётом вендорных префиксов)
		e.style['-webkit-transition'] = property+' '+speed+'s'+' '+type;
		e.style['-moz-transition'] = property+' '+speed+'s'+' '+type;
		e.style['-ms-transition'] = property+' '+speed+'s'+' '+type;
		e.style['-o-transition'] = property+' '+speed+'s'+' '+type;
		e.style['transition'] = property+' '+speed+'s'+' '+type;

		// Изменить значение property на то, какое оно должно было бы стать,
		// если бы мы назначили его равным "auto". Этим справоцировать анимацию.
		e.style[property] = valueAfter;

		// После окончания работы transition подчистить за собой:
		// - Убрать значение transition
		// - Установить значение property на auto
		// - Удалить подчищавшую всё функцию-обработчик
		e.addEventListener('transitionend', function transitionEnd(event) {

			// Если transition завершился у свойтва с именем property
			if(event.propertyName = property) {
				e.style.transition = '';
				e.style[property] = 'auto';
				e.removeEventListener('transitionend', transitionEnd, false);
			}

		});

	};






	//b3.	animateCssAfterSpec(property, speed, type, id, element)
	//									|	Специальная версия функции animateCssAfter.
	//										Отличия от animateCssAfter
	//											- Используется в тех случаях, когда после изменения
	//												целевого свойства CSS-свойство display становится
	//												равным none у целевого элемента. В этом случае
	//												анимация с использованием стандартной animateCssAfter
	//												становится невозможно, потому что элемент с display: none
	//												мгновенно становится невидим. В функции animateCssAfterSpec
	//												значение CSS-свойства display на время анимации меняется
	//												с none на block.
	//										Аргументы:
	//											- Property	|	Имя CSS-свойства для анимации (например: "height")
	//											- Speed			|	Скорость анимации в секундах (например: "0.5")
	//											- Type			|	Тип анимации (linear, ease, ease-in, ease-out, ease-in-out)
	//											- id 				|	ID эл-та, CSS-свойство которого надо анимировать
	//											- element		|	Ссылка на эл-т, CSS-свойство котороно надо анимировать;
	//											если указана ссылка, ID игнорируется
	//										Особенности:
	//											- Функцию надо применять при анимации CSS-свойства
	//												от [auto/fixed значения] к AUTO-значению.
	//											- При анимации типа [auto/auto] использовать только в
	//												связке с функцией animateCssBefore
	//											- В случае, если значение CSS-свойство display элемента
	//												равно none, то значение свойства будет явно установлено
	//												в 0.
	//										Возвращает:
	//											- ничего
	//										Способ использования:
	//											- запустить непосредственно после изменения значения
	//												целевого CSS-свойства.

	library.animateCssAfterSpec = function(property, speed, type, id, element) {

		// Получить ссылку на целевой элемент
		var e;

			// Если element передан:
			// - проигнорировать id
			// - использовать element
			if(element) e = element;

			// Если element не передан:
			// - используя id получить ссылку на элемент
			else e = document.getElementById(id);

		// Определить текущее значение property (до трансформации)
		var valueBefore = e.style[property];

		// Определить, какие будет значение property после трансформации

			// Изменить текущее значение property на auto
			e.style[property] = 'auto';

			// Записать значение property после трансформации
			var valueAfter = getComputedStyle(e,'')[property];

			// В случаях, когда у элемента установле CSS: "display: none",
			// или "display: inline", getComputedStyle может вернуть auto.
			// В случае "display: none" назначим ему "valueBefore = 0":
			if(getComputedStyle(e,'')['display'] == 'none') {
				valueAfter = 0;
			}

			// Изменить текущее значение property обратно
			// (чтобы никто ничего не заметил =) )
			e.style[property] = valueBefore;

		// Изменить CSS-свойство display с 'none' на 'block'
		e.style.display = 'block';


		// Заставить всё перерисоваться (без этого анимации не будет)
		e.offsetWidth;

		// Назначить transition (с учётом вендорных префиксов)
		e.style['-webkit-transition'] = property+' '+speed+'s'+' '+type;
		e.style['-moz-transition'] = property+' '+speed+'s'+' '+type;
		e.style['-ms-transition'] = property+' '+speed+'s'+' '+type;
		e.style['-o-transition'] = property+' '+speed+'s'+' '+type;
		e.style['transition'] = property+' '+speed+'s'+' '+type;

		// Изменить значение property на то, какое оно должно было бы стать,
		// если бы мы назначили его равным "auto". Этим справоцировать анимацию.
		e.style[property] = valueAfter;

		// После окончания работы transition подчистить за собой:
		// - Убрать значение transition
		// - Установить значение property на auto
		// - Удалить подчищавшую всё функцию-обработчик
		// - Убрать установленный ранее "display: block" (чтобы в соответствии
		//	 со стилем "tree-node-closed" стало "display: none"
		e.addEventListener('transitionend', function transitionEnd(event) {

			// Если transition завершился у свойтва с именем property
			if(event.propertyName = property) {
				e.style.transition = '';
				e.style[property] = 'auto';
				e.removeEventListener('transitionend', transitionEnd, false);
				e.style.display = '';
			}

		});

	};




//[-----OUT. Выходы модуля]

//OUT1.	Вернуть ссылку на объект из x1, содержащий все функции библиотеки.
return library;

});		// конец определения модуля с помощью define
