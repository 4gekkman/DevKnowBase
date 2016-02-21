/* ---------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Клиентский браузерный JS.
9. Работа с координатами


Стандартные свойства

	Получить объект с клиентскими координатами относительно окна браузера
		> e.getBoundingClientRect			|
																	Координаты верхнего левого угла элемента:
																	- top			| координата Y
																	- left		| координата X

																	Координаты правого нижнего угла элемента:
																	- bottom	| координата Y
																	- right		| координата X

																	Размеры элемента:
																	- width		| ширина, включая границы и padding, не включая margin
																	- height	| высота, включая границы и padding, не включая margin

																	Особенности:
																	- Координаты и размеры - для внешней зоны элемента.
																	- Меняются при прокрутке


	Работа с экранными координатами относительно левого верхнего угла экрана
		> window.screen				| ссылка на объект screen, связанный с этим окном

		Ширина и высота экрана
		> screen.width				| ширина экрана в px
		> screen.height				| высота экрана в px
		> screen.availWidth		| эффективная ширина экрана в px
		> screen.availHeight	| эффективная высота экрана в px

		Координаты верхнего левого угла браузера:
		> window.screenX			| по оси X
		> window.screenY			| по оси Y

		Координаты DOM-элемента на экране получить нельзя - браузер
		НЕ предоставляет свойств и методов для этого.
		>


	Получить ссылку на элемент по клиентским координатам
		> document.elementFromPoint		| Получить ссылку на элемент по клиентским координатам



Нестандартные свойства (пользовательские функции)

	Получить объект с документными координатами относительно document (или иного элемента)
		> getBoundingDocRect					|
																	Координаты верхнего левого угла элемента:
																	- top			| координата Y
																	- left		| координата X

																	Координаты правого нижнего угла элемента:
																	- bottom	| координата Y
																	- right		| координата X

																	Размеры элемента:
																	- width		| ширина, включая границы и padding, не включая margin
																	- height	| высота, включая границы и padding, не включая margin

																	Особенности:
																	- Координаты и размеры - для внешней зоны элемента.
																	- НЕ меняются при прокрутке
																	- Используются при позиционировании элементов
																		с position: absolute


	Получить объект с:
	- Размерами по осям X,Y окна браузера.
	- Клиентскими коорд. ЛВ и ПН углов окна бра-ра (нач. коорд. ЛВ угол окна бра-ра)
	- Документными коорд. ЛВ и ПН углов окна бра-ра относ. document
			getBrowserWindowMetrics			|
																	Размеры окна браузера:
																	- width
																	- height

																	Клиентские коорд. ЛВ и ПН углов окна браузера:
																	- clientTop
																	- clientLeft
																	- clientBottom
																	- clientRight

																	Документные коорд. ЛВ и ПН углов окна браузера:
																	- docTop
																	- docLeft
																	- docBottom
																	- docRight

																	Особенности:
																	- На самом деле клиент. коорд. ЛВ угла - это (0,0),
																		а правого нижнего угла - это (width,height).
																		А отдельные обозначения (выше) им даны просто для удобства.


Техники

	> Получать клиентские и документные координаты курсора realtime





База
> Получение оконных координат                       | getBoundingClientRect()
> Получение страничных координат                    | getPageCoords(elem)
> Получить элемент по оконным координатам           | elementFromPoint(x,y)
> Получение экранных координат                      |

Техники и наработки
> Найти оконные координаты верхнего левого и
 правого нижнего углов блока с учетом и без
 границы блока                                     | findCornersCoords(...)
> Разместить элемент A с абсолютным position
 относительно элемент Б                            | positionAt(...)

-------------------------------------------------- */


var e, ball, clientCoords;

//обработчики событий для отображения на экране текущих
//клиентских и документных координат мяча, а также его размеров

	document.onscroll = function() {
		ball = document.getElementById('ball');
		
		
		// Клиентские координаты
			// Клиентские координаты верхнего левого угла мяча
			document.getElementsByClassName('top1')[0].innerHTML =
				'clientTopX = '+ball.getBoundingClientRect().left;
	
			document.getElementsByClassName('top2')[0].innerHTML =
				'clientTopY = '+ball.getBoundingClientRect().top;
	
			// Клиентские координаты правого нижнего угла мяча
			document.getElementsByClassName('top3')[0].innerHTML =
				'clientBottomX = '+ball.getBoundingClientRect().right;
	
			document.getElementsByClassName('top4')[0].innerHTML =
				'clientBottomY = '+ball.getBoundingClientRect().bottom;
	
			// Размеры мяча
			document.getElementsByClassName('top5')[0].innerHTML =
				'width мяча = '+ball.getBoundingClientRect().width;
	
			document.getElementsByClassName('top6')[0].innerHTML =
				'height мяча = '+ball.getBoundingClientRect().height;

		
		// Документные координаты
			// Документные координаты верхнего левого угла мяча
			document.getElementsByClassName('top7')[0].innerHTML =
				'docTopX = '+getBoundingDocRect(ball).left;
	
			document.getElementsByClassName('top8')[0].innerHTML =
				'docTopY = '+getBoundingDocRect(ball).top;

			// Документные координаты правого нижнего угла мяча
			document.getElementsByClassName('top9')[0].innerHTML =
				'docBottomX = '+getBoundingDocRect(ball).right;

			document.getElementsByClassName('top10')[0].innerHTML =
				'docBottomY = '+getBoundingDocRect(ball).bottom;

			// Размеры мяча
			document.getElementsByClassName('top11')[0].innerHTML =
				'width мяча = '+getBoundingDocRect(ball).width;

			document.getElementsByClassName('top12')[0].innerHTML =
				'height мяча = '+getBoundingDocRect(ball).height;
	};






// ==============
// ============ Стандартные свойства ---------------------------------
//===============






/* Получить объект с клиентскими координатами относительно окна браузера
		 > e.getBoundingClientRect
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
																		- Меняются при прокрутке
================================*/

// Вывести в консоль клиентские координаты мяча
e = document.getElementById('ball');
clientCoords = e.getBoundingClientRect();
console.log(clientCoords);		// объект с координатами и размерами

	// Координаты верхнего левого угла
	console.log(clientCoords.top);			// 75
	console.log(clientCoords.left);			// 393

	// Координаты правого нижнего угла
	console.log(clientCoords.bottom);		// 126
	console.log(clientCoords.right);		// 444

	// Размеры элемента
	console.log(clientCoords.width);		// 51
	console.log(clientCoords.height);		// 51





/* Работа с экранными координатами относительно левого верхнего угла экрана
				> Координаты DOM-элемента на экране получить нельзя - браузер
					НЕ предоставляет свойств и методов для этого
================================*/


//window.screen				| ссылка на объект screen, связанный с этим окном
console.log(window.screen);		// объект screen
console.log(screen);					// объект screen


// ---- Ширина и высота экрана
//screen.width				| ширина экрана в px
console.log(screen.width);		// 1600


//screen.height				| высота экрана в px
console.log(screen.height);		// 900


//screen.availWidth		| эффективная ширина экрана в px
console.log(screen.availWidth);		// 1600


//screen.availHeight	| эффективная высота экрана в px
console.log(screen.availHeight);	// 854


// ---- Координаты верхнего левого угла браузера:
//window.screenX			| по оси X
console.log(window.screenX);			// координаты по оси X
console.log(screenX);							// координаты по оси X

//window.screenY			| по оси Y
console.log(window.screenY);			// координаты по оси Y
console.log(screenY);							// координаты по оси Y




/* > document.elementFromPoint		| Получить ссылку на элемент по клиентским координатам
================================*/

e = document.elementFromPoint(393,75);		// (393,75) - координаты мяча после загрузки страницы
console.log(e);		// мяч - img#ball (получится, если при загрузке страница не прокручена)








// ==============
// ============ Нестандартные свойства (пользовательские функции) ----
//===============



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




/*	Получить объект с:
		- Размерами по осям X,Y окна браузера.
		- Клиентскими коорд. ЛВ и ПН углов окна бра-ра (нач. коорд. ЛВ угол окна бра-ра)
		- Документными коорд. ЛВ и ПН углов окна бра-ра относ. document
				getBrowserWindowMetrics			|
																		Размеры окна браузера:
																		- width
																		- height

																		Клиентские коорд. ЛВ и ПН углов окна браузера:
																		- clientTop
																		- clientLeft
																		- clientBottom
																		- clientRight

																		Документные коорд. ЛВ и ПН углов окна браузера:
																		- docTop
																		- docLeft
																		- docBottom
																		- docRight

																		Особенности:
																		- На самом деле клиент. коорд. ЛВ угла - это (0,0),
																			а правого нижнего угла - это (width,height).
																			А отдельные обозначения (выше) им даны просто для удобства.
================================*/

function getBrowserWindowMetrics() {
	var body,
			docElem,
			scrollTop,
			scrollLeft,

			width,
			height,

			clientTop,
			clientLeft,
			clientBottom,
			clientRight,

			docTop,
			docLeft,
			docBottom,
			docRight;


	// Получить ссылки на элементы body и document
	body = document.body;
	docElem = document.documentElement;


	// Получить размеры прокручЕННой области ио осям X и Y
	// (понадобятся для вычисления документных координат)
	scrollTop = window.pageYOffset 	|| docElem.scrollTop || body.scrollTop;
	scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;


	// Получить ширину и высоту клиентской области окна браузера

		// Если код выполняется в не-IE браузерах:
		if( typeof( window.innerWidth ) == 'number' ) {
			width = window.innerWidth;
			height = window.innerHeight;
		}

		// Если код выполняется в IE>=6 в 'standards compliant mode'
		else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
			width = document.documentElement.clientWidth;
			height = document.documentElement.clientHeight;
		}

		// Если код выполняется в IE4
		else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
			width = document.body.clientWidth;
			height = document.body.clientHeight;
		}


	// Получить клиентские координаты клиентской области браузера
	clientTop = 0;
	clientLeft = 0;
	clientBottom = clientTop + height
	clientRight	= clientLeft + width;

	// Получить документные координаты клиентской области браузера
	docTop = clientTop + scrollTop;
	docLeft = clientLeft + scrollLeft;
	docBottom = docTop + height;
	docRight = docLeft + width;


	// Вернуть объект с координатами и размерами
	return {
		width: Math.round(width),
		height: Math.round(height),

		clientTop: Math.round(clientTop),
		clientLeft: Math.round(clientLeft),
		clientBottom: Math.round(clientBottom),
		clientRight: Math.round(clientRight),

		docTop: Math.round(docLeft),
		docLeft: Math.round(docLeft),
		docBottom: Math.round(docBottom),
		docRight: Math.round(docRight)
	};

}













// ==============
// ============ Техники ----
//===============




/* Получать клиентские и документные координаты курсора realtime
================================*/

document.documentElement.onmouseover = function(e) {

	// Отображать клиентские координаты курсора
	document.getElementsByClassName('top13')[0].innerHTML =
		'X: '+ e.clientX;
	document.getElementsByClassName('top14')[0].innerHTML =
		'Y: '+ e.clientY;


	// Отображать документные координаты курсора
	var x = e.clientX - this.getBoundingClientRect().left - this.clientLeft + this.scrollLeft;
	var y = e.clientY - this.getBoundingClientRect().top - this.clientTop + this.scrollTop;
	document.getElementsByClassName('top15')[0].innerHTML =
		'X: '+ x;
	document.getElementsByClassName('top16')[0].innerHTML =
		'Y: '+ y;


	// Отображать экранные координаты курсора
	document.getElementsByClassName('top17')[0].innerHTML =
		'X: '+ e.screenX;
	document.getElementsByClassName('top18')[0].innerHTML =
		'Y: '+ e.screenY;

};







/*



insertHTML('<p><b>Задачи</b></p>');*/
// -- ------------------------- -- //
// -- ------ З А Д А Ч И ------ -- //
// -- ------------------------- -- //
/*      1. На оконные координаты
> Найти координаты верхнего левого угла блока.
> Найти координаты правого нижнего угла блока.
> Найти координаты верхнего левого угла блока без учета рамки.
> Найти координаты правого нижнего угла блока без учета рамки.
 */
/*insertHTML('<p><b>1. На оконные координаты</b></p>');


function findCornersCoords(elem) {
    var result = {};
    var cords = elem.getBoundingClientRect();
    result.top = cords.top;
    result.left = cords.left;
    result.bottom = cords.bottom;
    result.right = cords.right;
    result.topWithoutBorder = cords.top + parseInt(getComputedStyle(elem,'').borderTopWidth);
    result.leftWithoutBorder = cords.left + parseInt(getComputedStyle(elem,'').borderLeftWidth);
    result.bottomWithoutBorder = cords.bottom - parseInt(getComputedStyle(elem,'').borderBottomWidth);
    result.rightWithoutBorder = cords.right - parseInt(getComputedStyle(elem,'').borderRightWidth);

    return result;
}

insertHTML("<section id='sec55' style='width: 200px; height: 100px; background: gray; border: 4px solid dodgerblue;'></section>");
var res = findCornersCoords(document.getElementById('sec55'));
insertHTML('<p>('+res.left+','+res.top+') - оконные координаты левого верхнего угла прямоугольника (+рамка) </p>');
insertHTML('<p>('+res.right+','+res.bottom+') - оконные координаты правого нижнего угла прямоугольника (+рамка) </p>');
insertHTML('<p>('+res.leftWithoutBorder+','+res.topWithoutBorder+') - оконные координаты левого верхнего угла прямоугольника (без учета рамки) </p>');
insertHTML('<p>('+res.rightWithoutBorder+','+res.bottomWithoutBorder+') - оконные координаты правого нижнего угла прямоугольника (без учета рамки) </p>');*/


/*      2. На страничные координаты
 > Оригинальное описанип: http://learn.javascript.ru/task/razmestit-zametku-ryadom-s-elementom
 > Функция позиционирует элемент elem относительно элемента anchor
   > У elem свойство стиля position должно быть равно absolute
   > Возможные значения аргумента position:
     > 'top'
     > 'right'
     > 'bottom'
 */
/*    function positionAt(elem, anchor, position) {
        var anchorPageCoords = getPageCoords(anchor);  // страничные элементы элемента-anchor
        var elemPageCoords = getPageCoords(elem);      // страничные элементы элемента-elem
        if(position == 'top') {
            elem.style.left = anchorPageCoords.left + 'px';
            if(!arguments[3])
               elem.style.top = anchorPageCoords.top - elem.offsetHeight + 'px';
            else
                elem.style.top = anchorPageCoords.top + 'px';
        }
        if(position == 'right') {
            if(!arguments[3])
               elem.style.left = anchorPageCoords.left + anchor.offsetWidth + 'px';
            else
                elem.style.left = anchorPageCoords.left + anchor.offsetWidth - elem.offsetWidth + 'px';
            elem.style.top = anchorPageCoords.top + 'px';
        }
        if(position == 'bottom') {
            elem.style.left = anchorPageCoords.left + 'px';
            if(!arguments[3])
               elem.style.top = anchorPageCoords.top + anchor.offsetHeight + 'px';
            else
                elem.style.top = anchorPageCoords.top + anchor.offsetHeight - elem.offsetHeight + 'px';
        }

    }

    insertHTML('<p><b>На страничные координаты</b></p>');
    insertHTML('<section id="top1" class="note">Top</section>');
    insertHTML('<section id="Right1" class="note">Right</section>');
    insertHTML('<section id="Bottom1" class="note">Bottom</section>');
    insertHTML('<blockquote id="anch1">'+ '\n' +
        '- Что на завтрак, Бэрримор?\n'+
        '- Овсянка, сэр.\n'+
        '- А на обед?\n'+
        '- Овсянка, сэр\n'+
        '- Ну а на ужин?\n'+
        '- Котлеты, сэр.\n'+
        '- Уррра!!!\n'+
        '- Из овсянки, сэр!!!\n\r'+
        '</blockquote><br>');
    var anch =  document.getElementById('anch1');
    var topEl = document.getElementById('top1');
    var rightEl = document.getElementById('Right1');
    var bottomEl = document.getElementById('Bottom1');
    button("positionAt(topEl,anch,'top')","top");
    button("positionAt(rightEl,anch,'right')","right");
    button("positionAt(bottomEl,anch,'bottom')","bottom");
    button("positionAt(topEl,anch,'top',true)","top inside");
    button("positionAt(rightEl,anch,'right',true)","right inside");
    button("positionAt(bottomEl,anch,'bottom',true)","bottom inside");*/








// ------------------------ Вспомогательные функции
/*function write(x,text) {
    if(text == undefined) text='';
    if(x == undefined) x='';
    document.write(text+x);
}        // написать
function insertHTML(text) {
    var brNumSrt = 0; var brNumEnd = 0;
    var brNumStrString = ''; var brNumEndString = '';
    (arguments[1] == undefined) ? brNumSrt = 0 : brNumSrt = arguments[1];
    (arguments[2] == undefined) ? brNumEnd = 0 : brNumEnd = arguments[2];
    for(var i=0; i<brNumSrt; i++) brNumStrString+='<br>';
    for(i=0; i<brNumEnd; i++) brNumEndString+='<br>';

    document.body.insertAdjacentHTML
        ('beforeEnd', brNumStrString+text+brNumEndString);
}     // вставить HTML 5 в конец родителя
function button(x,text) {
    var afterText = ''; var id = '';
    (arguments[2] == undefined) ? afterText = '' : afterText = arguments[2];
    (arguments[3] == undefined) ? id = '' : id = arguments[3];
    document.body.insertAdjacentHTML
        ('beforeEnd', "<br><button id='"+id+"' onclick=\"" + x + "\">" + text + "</button>" + afterText);

    return x;
}       // создать кнопку;
//  > x - текст функции,
//  > text - текст в кнопке,
//  > 3 переменная - текст после кнопки;
//  > 4 переменная - id кнопки.
/*function insertInput(where,type) {  // вставить инпут
    // > where - beforeEnd | afterEnd | beforeBegin | afrerBegin
    // > type - тип инпута
    // > аргумент #2 (если есть) - ID
    // > аргумент #3 (если есть) - value | для submit текст кнопки
    // > аргумент #4 (если есть) - onclick для button
    var id = (arguments[2] == undefined) ? '' : arguments[2];
    var v = (arguments[3] == undefined) ? '' : arguments[3];
    var onclick = (arguments[4] == undefined) ? '' : arguments[4];
    var text = '';
    if(type!='submit')
        text = "<input type=type id="+id+" value="+v+">";
    else
        text = "<button onclick=\""+onclick+"\" type='submit' id='"+id+"'>"+v+"</button>";
    document.body.insertAdjacentHTML(where, '<br>'+text);
}*/









/* ---------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Глава "Координаты" учебника по JavaScript от Ильи Кантора:
				http://learn.javascript.ru/coordinates



*****************************************************
Оглавление:

	> Немного о системах координат и координатах
	> Координаты при работе с элементами DOM
		> Какая используется система координат?
		> Где находится начало координат? 3 варианта, 3 названия координат.
	> Особенности метода getBoundingClientRect






*****************************************************



> Немного о системах координат и координатах

	> Система координат
		> Позволяет определять местоположение точки или тела с помощью чисел
			или других символов.

	> Координаты
		> Совокупность чисел или других символов, определяющих положение
			конкретной точки.
		> В данной статье, это будут именно числа.

	> Декартова (прямоугольная) система координат
		> Прямолинейна система координат со взаимно перпендикулярными
			осями координат.

	> Начало прямоугольной сиситемы координат в евклидовом пространстве
		> Это точка, в которой пересекаются все оси координат, и в которой
			все координаты = 0.



> Координаты при работе с элементами DOM

	> Какая используется система координат?
		> Используется в основном 2-мерная прямоугольная система координат.
		> Редко, при работе с 3d (например, через CSS3), используется
			3-мерная прямоугольная система координат. Но здесь мы будем рассматривать
			только 2-мерную.

	> Где находится начало координат? 3 варианта, 3 названия координат.
		> Есть 3 варианта, где может располагаться система координат.
		> Соответственно, для каждого случая сами координаты одного и того
			же элемента будут разные.
		> Координаты элемента для каждого из этих 3-х вариантов начала координат
			имеют особое название - для того, чтобы сразу было понятно,
			где находится начало вот этих вот координат. Я буду называть их так:

			- Клиентские
				> Начало координат - в левом верхнем углу клиентской зоны элемента.
				> Например, если элемент - window, и в нем слегка прокрученный документ,
					то начало клиентских координат - в л.в. углу видимой области окна браузера.
				> Меняются при прокрутке

			- Документные
				> Начало координат - в левом верхнем углу документа в этом элементе.
				> Например, если элемент - window, то чтобы увидеть начало документных
					координат, надо промотать его назад (прокрутка = 0), и они будут в
					левом верхнем углу - и в этом случае совпадут с клиентскими.
				> Таким образом, документные координаты НЕ меняются при прокрутке
					документа.
				> Для примера можешь открыть в браузере документ
					"8. Метрики, размеры, прокрутка всего документа", там в левом
					верхнем углу в реальном времени при прокрутке отображаются документные
					координаты для точки - начала координат клиентской области.

			- Экранные
				> Начало координат - верхний левый угол экрана монитора.
				> Могут быть полезны, например:
					- Для открытия нового окна посередине экрана
					- Для работы с мобильными устройствами
				> Координаты DOM-элемента на экране получить нельзя - браузер
					НЕ предоставляет свойств и методов для этого.

		> См. иллюстрацию, где клиентские и документные координаты совпадают:
				"a. Клиентские и документные координаты совпадают"
		> См. иллюстрацию, где клиентские и документные координаты НЕ совпадают:
				"b. Клиентские и документные координаты НЕ совпадают"


> Особенности метода getBoundingClientRect
	> Это метод объекта Element.
	> Поддерживается всеми современными браузерами, а также IE>=6.
	> Возвращает объект со свойствами left,top, right,bottom
		- (left,top) - это координаты (x,y) левого верхнего угла элемента.
		- (right,bottom) - это координаты (x,y) правого нижнего угла элемента.
	> А кроме того, в современных браузерах в возврщаемом объекте есть еще
		2 свойства, которые содержат размеры элемента. Эти размеры включают
		границы и padding, и не включают margin.
		- width		- X-размер
		- height	- Y-размер
		> Работа с блочными элементами
			> Тут все просто - блочный элемент сам по себе образует прямоугольник,
			 	и для вычисления координат метод берет верхний левый и правый нижний
			 	углы этого прямоугольника.
		> Работа со строчными элементами
			> В строчном элементе каждая строка - это отдельный прямоугольник с
				одинаковой высотой, но разной длиной.
				> Если потребуется, получить доступ к этип прямоугольникам можно
					с помощью метода e.getClientRects(), который возвращает коллекцию
					этих самых прямоугольников.
			> Также есть один охватывающий все строки прямоугольник, как раз таки
				с ним и работает getBoundingClientRect.













 > Кординаты элемента - это координаты его верхнего угла.
 > Координаты бывают:
   > Экранные  |  (screenX, screenY)  |  начало в левом верхнем углу монитора
   > Оконные   |  (clientX, clientY)  |  начало в л.в. углу браузера
   > Странчные |  (pageX, pageY)      |  начало в л.в. углу страницы

 > Получить оконные координаты можно встроенной функцией:
   > e.getBoundingClientRect().(top | left | bottom | right | width | height)  |  получить оконные координаты в виде объекта {top,left,right,bottom,width,height}

 > Получить страничные координаты можно пользовательской функцией:
   > Можно получить пользовательской функцией getPageCoords(e)

 > Можно получить элемент по его координатам с помощью встроенной функции:
   > var element = document.elementFromPoint(clientX, clientY);
     > Здесь (clientX, clientY) - оконные координаты.


-------------------------------------------------- */