/* ---------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Клиентский браузерный JS.
7. Метрики, размеры, прокрутка элементов


		!! См. иллюстрацию для всех метрик:
				Иллюстрации -> "0. Иллюстрация для всех метрик"


Стандартные свойства

	Размеры клиентской зоны, т.е. внутренние размеры элемента (внутренняя обл. + padding)
	см. Иллюстрации -> a. clientWidth, clientHeight
		> clientWidth		|		ширина   	|	= width + 2*padding - scroll
		> clientHeight 	|		высота		| = height + 2*padding - scroll

	Размеры прокручЕННой области
	см. Иллюстрации -> b. scrollTop, scrollHeight
		> scrollTop			| по вертикали		 | = clientTop +
		> scrollLeft		| по горизонтали

	Размеры прокручИВАемой области
	см. Иллюстрации -> c. scrollHeight, scrollWidth
		> scrollWidth		| по горизонтали	| = scrollLeft + clientWidth + scrollRight
		> scrollHeight	| по вертикали		| = scrollTop + clientHeight + scrollBottom

	Внешние размеры элемента (все включено, кроме margin)
	см. Иллюстрации -> d. offsetLeft, offsetTop
		> offsetWidth 	|	ширина		| = width + 2*borderWidth + 2*padding + ширина прокрутки
		>	offsetHeight 	| высота		| = height + 2*borderHeight + 2*padding + ширина прокрутки

	Расстояние от нач. коорд. внешней зоны эл-та до нач. коорд. внутр. зоны
	внешнего для него элемента
		> offsetLeft		| по горизонтали
		> offsetTop			| по вертикали

	Расстояние между началами коорд. внутренней и внешней зон элемента
	Т.Е. по сути это просто размеры рамок элемента.
		> clientTop			|	по горизонтали	| = borderWidth
		> clientLeft		| по вертикали		| = borderHeight



Нестандартные свойства (пользовательские функции)

	Размеры НЕ прокручЕННой области					формулы ниже выведены из формул для прокручИВАемой области
		> scrollRight		| по горизонтали	| = scrollWidth - scrollLeft - clientWidth
		> scrollBottom	| по вертикали		| = scrollHeight - scrollTop - clientHeight

	Размеры полосы прокрутки
		> scrollBarWidth	| ширина прокрутки справа	| = offsetWidth - 2*borderWidth - 2*padding - width = offsetWidth - clientWidth - 2*clientLeft;
		> scrollBarHeight	| ширина прокрутки сверху | = offsetWidth - 2*borderHeight - 2*padding - height = offsetHeight - clientHeight - 2*clientTop;



Техники

	> Распахнуть/запахнуть элемент на ширину/высоту контента
	> Прокрутить контент элемента на X px вверх/вниз
	> Функция для проверки видимости элемента
	> Подменить старый блок новым такого же размера, а старый абсолютно
		позиционировать и перенести в указанное место
	> Подменить блок A блоком Б





-------------------------------------------------- */

var e;



// ==============
// ============ Стандартные свойства ---------------------------------
//===============




/* Размеры клиентской зоны, т.е. внутренние размеры элемента (внутренняя обл. + padding)
================================*/


//clientWidth		|		ширина   	|	= width + 2*padding - scroll
e = document.getElementById('example');
console.log('clientWidth = '+e.clientWidth);		// 323 = 300(width) + 2*20(padding) - 17(scroll в Chrome)


//clientHeight 	|		высота		| = height + 2*padding - scroll
console.log('clientHeight = '+e.clientHeight);	// 240 = 200(width) + 2*20(padding)




/* Размеры прокручЕННой области
================================*/


//scrollTop			| по вертикали
console.log(e.scrollTop);		// 0

e.scrollTop = 20;						// scrollTop можно не только читать, но и записывать
console.log(e.scrollTop);		// 20		- это именно число, а не строка


//scrollLeft		| по горизонтали
console.log(e.scrollLeft);		// 0

e.scrollLeft = 20;						// scrollTop можно не только читать, но и записывать
console.log(e.scrollLeft);		// 0   - но толкько, если соответствующая полоса прокрутки присутствует




/* Размеры прокручИВАемой области
================================*/


//scrollWidth		| по горизонтали	| = scrollLeft + clientWidth + scrollRight
console.log(e.scrollWidth);			// 323


//scrollHeight	| по вертикали		| = scrollTop + clientHeight + scrollBottom
console.log(e.scrollHeight);		// 702



/* Внешние размеры элементв (все включено, кроме margin)
================================*/


//offsetWidth 	|	ширина		| = width + 2*borderWidth + 2*padding + ширина прокрутки
console.log(e.offsetWidth);		// 390 = 300(width+scroll) + 2*25(border) + 2*20(padding)


//offsetHeight 	| высота		| = height + 2*borderHeight + 2*padding + ширина прокрутки
console.log(e.offsetHeight);	// 290 = 200(height) + 2*25(border) + 2*20(padding)



/* Расстояние от нач. коорд. внешней зоны эл-та до нач. коорд. внутр. зоны
	 внешнего для него элемента
================================*/


//offsetLeft		| по горизонтали
console.log(window.getComputedStyle(document.body,'').margin);		// '8px'
console.log(e.offsetLeft);		// 28 (потому что document.body.style.margin = '8px' по умолчанию)


//offsetTop			| по вертикали
console.log(e.offsetTop);			// 20 (потому что по вертикали document.body.style.margin не применяется)



/* 	Расстояние между началами коорд. внутренней и внешней зон элемента
		Т.Е. по сути это просто размеры рамок элемента.
================================*/


//clientTop			|	по горизонтали	| = borderWidth
console.log(e.clientTop);			// 25 (это ширина рамки)


//clientLeft		| по вертикали		| = borderHeight
console.log(e.clientLeft);		// 25 (это высота рамки)





// ==============
// ============ Нестандартные свойства (пользовательские функции) ----
//===============



/* Размеры НЕ прокручЕННой области					формулы ниже выведены из формул для прокручИВАемой области
================================*/


//scrollRight		| по горизонтали	| = scrollWidth - scrollLeft - clientWidth

	var scrollRight = function(e) {
		return e.scrollWidth - e.scrollLeft - e.clientWidth;
	};

console.log(scrollRight(e));		// 0


//scrollBottom	| по вертикали		| = scrollHeight - scrollTop - clientHeight

	var scrollBottom = function(e) {
		return e.scrollHeight - e.scrollTop - e.clientHeight;
	};

console.log(scrollBottom(e));		// 442



/* Размеры полосы прокрутки
================================*/


//scrollBarWidth	| ширина прокрутки справа	| = offsetWidth - 2*borderWidth - 2*padding - width = offsetWidth - clientWidth - 2*clientLeft;

	var scrollBarWidth = function(e) {
		return e.offsetWidth - e.clientWidth - 2* e.clientLeft;
	};

console.log(scrollBarWidth(e));			// 17

//scrollBarHeight	| ширина прокрутки сверху | = offsetWidth - 2*borderHeight - 2*padding - height = offsetHeight - clientHeight - 2*clientTop;

	var scrollBarHeight = function(e) {
		return e.offsetHeight - e.clientHeight - 2* e.clientTop;
	};

console.log(scrollBarHeight(e));		// 0









// --------------------------------- Техники и наработки





// Распахнуть/запахнуть элемент на ширину/высоту контента
// > работает как переключатель распахнуть/запахнуть
// > инфа о старых width и height хранятся в замыканиях
// > в параметра how надо указать 1 из 2 значений:
//   > 'width'   -  распахнет по ширине
//   > 'height'  -  по высоте
function openWideWrap() {   // завернул ф-ию openWide в обертку, в которой хранятся старые данные
		var oldWidth = 0; var oldHeight = 0;
		function openWide(id,how) {   // распахивает, если запахнуто; запахивает, если распахнуто.
				id = document.getElementById(id);
				var count = 0;
				if(how == 'width') {
						if(id.clientWidth != id.scrollWidth) {
								oldWidth = id.clientWidth - 2*parseInt(getComputedStyle(id,'').paddingLeft);
								id.style.width = id.scrollWidth + 'px';
						} else {
								id.style.width = oldWidth + 'px';
						}
				}
				if(how == 'height') {
						if(id.clientHeight != id.scrollHeight) {
								oldHeight = id.clientHeight - 2*parseInt(getComputedStyle(id,'').paddingTop);
								id.style.height = id.scrollHeight + 'px';
						} else {
								id.style.height = oldHeight + 'px';
						}
				}
		}
		return openWide;
}
		// Тест работы функции
				var f = openWideWrap();
				document.body.insertAdjacentHTML
						('beforeEnd', "<button onclick=\"f('example','height')\">Распахнуть | Запахнуть</button>");




// Прокрутить контент элемента на X px вверх/вниз
// > в параметре where нужно указать куда покручивать
//   > 'down'   -   значит вниз
//   > 'up'     -   значит вверх
// > в параметре px надо указать на сколько пикселей прокручивать
// > в elem надо передать элемент, который надо прокрутить
function scroll(where,px,elem) {
		if(where == 'down') {
				elem.scrollTop += px;
		} else if(where == 'up') {
				elem.scrollTop -= px;
		}
}
		// тест работы функции
				var e = document.getElementById('example');
				document.body.insertAdjacentHTML
						('afterEnd','&nbsp;&nbsp;&nbsp;<button onclick="scroll(\'down\',10,e)">Прокрутить на 10 пунктов вниз</button>');
				document.body.insertAdjacentHTML
						('afterEnd','&nbsp;&nbsp;&nbsp;<button onclick="scroll(\'up\',10,e)">Прокрутить на 10 пунктов вверх</button>');




// Функция для проверки видимости элемента
// > Если да, то вернет true. Если не скрыт, то false.
function isHidden(element) {
		return !element.offsetWidth && !element.offsetHeight;
}



/*

// Подменить старый блок новым такого же размера, а старый абсолютно
// позиционировать и перенести в указанное место
// > Смысл функции в том, чтобы текст до и после блока остался на местах
// > Ничего не возвращает
// > id - старого элемента
// > newID - нового элемента
// > top - расстояние нового элемента от верхней границы окна
// > right - расстояние нового элемента от правой границы окна
function moveBlock(id,newID,top,right) {
		var block = document.getElementById(id);

		// создать новый блок и вставить перед этим
		block.insertAdjacentHTML('beforeBegin','<section id='+newID+'></section>');
		var newBlock = document.getElementById(newID);
		newBlock.style.width = block.offsetWidth + 'px';
		newBlock.style.height = block.offsetHeight + 'px';

		// применить абсолютное позиционирование к блоку
		block.style.position = 'absolute';
		block.style.top = top+'px';
		block.style.right = right+'px';

		//return newBlock;
}
		// Тест функции
				document.body.insertAdjacentHTML
						('afterEnd','&nbsp;&nbsp;&nbsp;<button onclick="moveBlock(\'example\',\'example1\',0,0)">Подменить блок</button>');

*/




// Подменить блок A блоком Б
// > блок A скрыть (visibility: hidden)
// > блок Б сделать видимым (visibility: visible)
// > обоим блокам установить position: absolute;
// > в качестве оконных координат левого верхнего угла блока Б
//   установить оные блока А
function replaceBlocks(blockId1, blockId2) {
    // функция возвращает значение стиля элемента e
    function getStyleSafe(e) {
        return window.getComputedStyle ? getComputedStyle(e,'') :
            e.currentStyle;
    }

    // настройка visibility элеметов
    var blockA = document.getElementById(blockId1);
    var blockB = document.getElementById(blockId2);
    blockA.style.visibility = 'hidden';
    blockB.style.visibility = 'visible';

    // если position элементов не absolute или fixed, сделать его absolute
    switch(getStyleSafe(blockA).position) {
        case '': break;
        case 'absolute': break;
        case 'fixed': break;
        default: blockA.style.position = 'absolute';
    }
    switch(getStyleSafe(blockB).position) {
        case '': break;
        case 'absolute': break;
        case 'fixed': break;
        default: blockB.style.position = 'absolute';
    }

    // установить блоку Б оконные координаты блока А
    blockB.style.top = blockA.getBoundingClientRect().top;
    blockB.style.left = blockA.getBoundingClientRect().left;
}
// Тест функции
document.body.insertAdjacentHTML
    ('afterEnd','&nbsp;&nbsp;&nbsp;<button onclick="replaceBlocks(\'example\',\'example2\')">Заменить блок А на блок Б</button>');


    // Поместить элемент B точно в центр элемента A
    // > При этом элемент B должен быть потомком элемента A
    function centrize(A,B) {
        var top = (A.clientHeight)/2 - (B.offsetHeight)/2;
        var left = (A.clientWidth)/2 - (B.offsetWidth)/2;
        B.style.top = top+'px';
        B.style.left = left+'px';
    }



/*
    // Распахнуть/запахнуть элемент на ширину окна
    // > ID - элемента, с которым надо проделать манипуляции
    // > Работает как переключатель - распахивает/запахивает элемент
    function openWideLikeBodyWrap() {
        var oldWidth = 0;
        function openWideLikeBody(id) {
            var block = document.getElementById(id);

            var blockPaddingLeft = parseInt(getComputedStyle(block,'').paddingLeft);
            var blockPaddingRight = parseInt(getComputedStyle(block,'').paddingRight);
            var blockBorderLeftWidth = parseInt(getComputedStyle(block,'').borderLeft);
            var blockBorderRightWidth = parseInt(getComputedStyle(block,'').borderRight);
            var diff = blockPaddingLeft + blockPaddingRight + blockBorderLeftWidth + blockBorderRightWidth;

            document.body.style.border = '1px solid black';

            if(block.style.width != (document.body.clientWidth - diff) + 'px' && block.style.width != 'auto') {
                oldWidth = block.style.width;
                document.body.style.border = '1px solid black';
                if(getComputedStyle(block,'').position != 'absolute') {
                    block.style.width = (document.body.clientWidth - diff) + 'px';
                } else {
                    block.style.width = 'auto';
                }
            } else {
                if(block.style.width == 'auto') {
                    document.body.style.border = '';
                    block.style.width = oldWidth;
                } else {
                    document.body.style.border = '';
                    block.style.width = oldWidth;
                }
            }


        }
        return openWideLikeBody;
    }
*/






/* ---------------------------------------------------
 ---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Глава "Размеры и прокрутка элементов" учебника по JavaScript
		от Ильи Кантора:
				http://learn.javascript.ru/metrics



*****************************************************
Оглавление:

	> Javascript-метрики
	> Прокрутка в разных браузерах
	> Зачем нужны св-ва clientTop/clientLeft?
	> По умолчанию, document.body.style.margin = '8px'
	> Метрики для невидимых элементов равны 0
	> Определимся с терминами



*****************************************************



> Javascript-метрики
	> Метрики - ряд свойств в JS, содержащие размеры элементов.
	> Метрики являются свойствами объектов Element и HTMLElement.
	> Метрики содержат числа, всегда в px, без единиц измерения на конце.
	> Большинство метрик только для чтения. Но некоторые можно записывать:
		- scrollTop		|	только если соотв. полоса прокрутки присутствует
		- scrollLeft	| --//--

> Прокрутка в разных браузерах
	> В зависимости от браузера, полоса прокрутки может занимать
		0px, 16px, 17px, 18px.
	> 0px - когда она прозрачная, и не занимает места, а лежит "поверх".
		Например, в Chrome в MacOS.

> Зачем нужны св-ва clientTop/clientLeft?
	> Ведь в современных браузерах в них лежит всего-лишь ширина/высота
		рамки элемента соответственно.
	> Есть 2 ситуации, когда эти свойства нужны:
		1. В IE<=7 document.documentElement немного смещен относительно
			верхнего левого угла документа. Не смотря на то, что рамки там
			нет, сдвиг существует и хранится в document.body.clientLeft/clientTop
			(обычно, это 2px).
		2. В случае, когда документ распогалается справа-налево (арабский язык,
			иврит), свойство clientLeft включает в себя еще и ширину правой
			полосы прокрутки.
	> Таким образом, поскольку поддержка для IE<=7 уже не нужна, а
		правосторонними документами пользоваться вряд ли придется,
		эти свойства врядли когда-нибудь понядобятся.

> По умолчанию, document.body.style.margin = '8px'
	> Если разработчик не изменял в коде body.style.margin, то он по умолчанию
		равен 8px во всех браузерах.
	> Причем он имеет интересную особенность, хотя marginTop и marginBottom
		тоже равны 8px, как и marginLeft и marginRight, но не смотря на это,
		по горизонтали эти 8px срабатывают, а по вертикали нет.
		> Это хорошо видно в примере выше с offsetLeft и offsetTop

> Метрики для невидимых элементов равны 0
	> То есть для элементов с display: none.
	> Даже не смотря на то, такие элементы занимают место на страницы,
		просто они невидимы.
	> Св-во offsetParent для таких элементов тоже null.
	> Это можно использовать для того, чтобы проверить, виден ли
		элемент, или нет:

			var isHidden = function(element) {
				return !element.offsetWidth && !element.offsetHeight;
			}

> Определимся с терминами

	-----
	> Внутренняя зона 			| это все, что находится внутри границ элемента,
		элемента (клиентская)		включая прокрутку, padding, не включая сами границы.
														> См. Иллюстрации -> 'a. clientWidth, clientHeight'

	> Внешняя зона					| это внутренняя зона + границы элемента
		элемента

	> Документ в элементе		| ограничен прямоугольником, охватывающим всю
														прокручИВАемую область
														> Когда прокрутка = 0, начало координат документа
															в элементе совпадает с началом координат внутренней
															зоны элемента

	-----
	> Начало координат			| самая левая верхняя её точка
		внутренней зоны эл-та

	> Конец координат				| самая правая нижняя её точка
		внутренней зоны эл-та


	> Начало координат			| самая левая верхняя её точка
		внешней зоны эл-та

	> Конец координат				| самая правая нижняя её точка
		внешней зоны эл-та


	> Начало координат			| самая верхняя левая точка документа в элементе
		документа в элементе

	> Конец координат				| самая правая нижняя точка документа в элементе
		документа в элементе


	> Координаты элемента		| обычно координатами элемента называют точку
														начала координат его внешней зоны

	-----
	> Внутренние размеры		| размеры внутренней зоны элемента
		элемента

	> Внешние размеры				| размеры внешне зоны элемента
		элемента

	> Размеры элемента			| Под размерами элемента имеют в виду его внешние размеры

	-----
	> ПрокручИВАемая				| если увеличить размеры внутренней зоны элемента
		область									так, чтобы исчезли полосы прокрутки, то тогда
														внутренняя зона элемента совпадет с прокручИВАемой
														областью.
														> Бывает 2-х видов:
															- горизонтальная (берутся координаты x)
															- вертикальная	(берутся координаты y)
														> См. Иллюстрации -> c. scrollHeight, scrollWidth

	> ПрокручЕННая					| это область от начала координат документа в элементе
		область									до начала координат внутренней зоны элемента
														> Бывает 2-х типов:
															- горизонтальная (берутся координаты x)
															- вертикальная	(берутся координаты y)
														> См. Иллюстрации -> 'b. scrollTop, scrollHeight'

	> НЕ прокручЕННая				| это область от конца координат документа в элементе
														область до конца координат внутренней зоны элемента
														> Бывает 2-х типов:
															- горизонтальная (берутся координаты x)
															- вертикальная	(берутся координаты y)












	> Документ в элементе		| в клиентской области элемента находится некий
	 													HTML-код, и его можно условно называть
	 													HTML-документом в элементе

	> Начало координат			| находится в левой верхней части документа в
		документа в элементе		элементе, и имеет координаты (0,0)
	 													> Не путать с началом координат элемента.
	 													> Начало координат документа - по сути аналог
	 														начала страничных координат.
	 													> А начало координат элемента - по сути аналог
	 														начала оконных координат.

	> Конец координат				| находится в правой нижней части документа
		документа в элементе		в элементе

	> Начало координат			| находится в левой верхней части элемента,
		элемента								и имеет координаты (0,0)
														> Не путать с началом координат документа в
															элементе (см. выше)

	> Конец координат				| находится в правой нижней части элемента
		элемента

	> ПрокручЕННая область	| это область от начала координат документа в
														элементе до начала координат этого элемента
														> Бывает 2-х типов:
															- горизонтальная (берутся координаты x)
															- вертикальная	(берутся координаты y)
														> См. Иллюстрации -> 'b. scrollTop, scrollHeight'

	> НЕ прокрученная				| это область от конца координат элемента, до
		область									конца координат документа в элементе
														> Бывает 2-х типов:
															- горизонтальная (берутся координаты x)
															- вертикальная	(берутся координаты y)

	> ПрокручИВАемая 				| это область от начала координат документа в
		область									элементе, до конца его координат
														> Бывает 2-х видов:
															- горизонтальная (берутся координаты x)
															- вертикальная	(берутся координаты y)
														> См. Иллюстрации -> c. scrollHeight, scrollWidth






 -------------------------------------------------- */