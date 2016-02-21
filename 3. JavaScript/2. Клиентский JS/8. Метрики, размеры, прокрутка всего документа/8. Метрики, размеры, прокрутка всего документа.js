/* ---------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Клиентский браузерный JS.
8. Метрики, размеры, прокрутка всего документа


Стандартные свойства

	Размеры видимой части окна
		> document.documentElement.clientWidth	| по горизонтали
		> document.documentElement.clientHeight	| по вертикали

	Размеры всего документа - с учетом прокручиваемой области
		> Math.max(scrollWidth, clientWidth)		| по горизонтали
		> Math.max(scrollHeight, clientHeight)	| по вертикали

	Узнать текущие размеры прокручЕННой области
		> window.pageXOffset	| по горизонтали
		> window.pageYOffset	| по вертикали

	Изменение прокрутки
		> window.scrollTo(x,y)		| прокручивает документ так, что размер
																прокручЕННой области становится:
																> x пикселей по горизонтали
																> y пикселей
		> window.scrollBy(x,y)		| прокручивает документ на:
																> x пикселей вправо
																> y пикселей вниз
		> Element.
				scrollIntoView(p)			| совмещает координату y целевого элемента с:
																> Если p отсутствует, то с началом координат
																	по оси y родительского для этого элемента
																	элемента.
																> Если p = false, то то с концом координат
																	по оси y родительского для этого элемента
																	элемента.

	Запретить/разрешить прокрутку
		> e.style.overflow = 'hidden'		| запретить прокрутку в элементе
		> e.style.overflow = ''					| разрешить прокрутку в элементе



Нестандартные свойства

	Узнать текущие размеры НЕ прокручЕННой области
	> pageXOffsetRight		| по горизонтали	| = Math.max(e.scrollWidth, e.clientWidth) - window.pageXOffset - e.clientWidth
	> pageYOffsetBottom		| по вертикали		| = Math.max(e.scrollHeight, e.clientHeight) - window.pageYOffset - e.clientHeight






-------------------------------------------------- */

var e = document.documentElement;

//обработчики событий для отображения на экране текущих размеров
//	прокрученной и не прокрученной областей

	document.onscroll = function() {

		// При прокрутке отображать текущие размеры прокрученной области
		document.getElementsByClassName('top1')[0].innerHTML =
				'pageXOffset = '+window.pageXOffset;

		document.getElementsByClassName('top2')[0].innerHTML =
			'pageYOffset = '+window.pageYOffset;

		// ... и НЕ прокрученной
		document.getElementsByClassName('top3')[0].innerHTML =
				'pageXOffsetRight = '+pageXOffsetRight(e);

		document.getElementsByClassName('top4')[0].innerHTML =
			'pageYOffsetBottom = '+pageYOffsetBottom(e);

	};





// ==============
// ============ Стандартные свойства ---------------------------------
//===============



/* Размеры видимой части окна
================================*/


//document.documentElement.clientWidth	| по вертикали
console.log(e.clientWidth);			// 767


//document.documentElement.clientHeight	| по горизонтали
console.log(e.clientHeight);			// 496



/* Размеры всего документа - с учетом прокручиваемой области
================================*/


//Math.max(scrollWidth, clientWidth)		| по горизонтали
console.log(Math.max(e.scrollWidth, e.clientWidth));		// 767


//Math.max(scrollHeight, clientHeight)	| по вертикали
console.log(Math.max(e.scrollHeight, e.clientHeight));	// 930



/* Узнать текущие размеры прокручЕННой области
================================*/


//window.pageXOffset	| по горизонтали
console.log(window.pageXOffset);


//window.pageYOffset	| по вертикали
console.log(window.pageYOffset);



/* Запретить/разрешить прокрутку
================================*/

//e.style.overflow = 'hidden'		| запретить прокрутку в элементе
function forbidScroll(e) {
	e.style.overflow = 'hidden';
}


//e.style.overflow = ''					| разрешить прокрутку в элементе
function allowScroll(e) {
	e.style.overflow = '';
}




/* 	> window.scrollTo(x,y)
			> прокручивает документ так, что размер прокручЕННой области становится:
				- x пикселей по горизонтали
				- y пикселей
================================*/


	window.scrollTo(50,50);

		// + см. в HTML-документе кнопку, при нажатии на которую
		// 	 происходит scrollTo(100,100)





/* 	> window.scrollBy(x,y)
			> прокручивает документ на:
				- x пикселей вправо
				- y пикселей вниз
================================*/


	window.scrollBy(0,10);

		// + см. в HTML-документе кнопку, при нажатии на которую
		// 	 происходит scrollBy(0,10)





/* 	> Element.scrollIntoView(p)
			> совмещает координату y целевого элемента с:
				- Если p отсутствует, то с началом координат по оси y родительского
					для этого элемента элемента.
				- Если p = false, то то с концом координат по оси y родительского
					для этого элемента элемента.
================================*/


	// См. примеры c мячём в документе (2 кнопки):
	// 1 кнопка: document.getElementById('ball').scrollIntoView();
	// 2 кнопка: document.getElementById('ball').scrollIntoView(false);










// ==============
// ============ Нестандартные свойства (пользовательские функции) ----
//===============



/* Узнать текущие размеры НЕ прокручЕННой области
================================*/

//pageXOffsetRight		| по горизонтали	| = Math.max(e.scrollWidth, e.clientWidth) - window.pageXOffset - e.clientWidth

	function pageXOffsetRight(e) {
		return Math.max(e.scrollWidth, e.clientWidth) - window.pageXOffset - e.clientWidth;
	}

console.log(pageXOffsetRight(e));			// 0



//pageXOffsetBottom		| по вертикали		| = Math.max(e.scrollHeight, e.clientHeight) - window.pageYOffset - e.clientHeight

	function pageYOffsetBottom(e) {
		return Math.max(e.scrollHeight, e.clientHeight) - window.pageYOffset - e.clientHeight;
	}

console.log(pageYOffsetBottom(e));		// 0
























/*



// Запретить / Разрешить вертикальную прокрутку   |   работает с любым элементом
    // -> примечание: после запрета полоса прокрутки исчезает, и страница дергается,
    //    занимая освободившееся место. Этого можно избежать, добавив одновременно
    //    соответствующий padding. Как в примере ниже.
        function scrollStateWrap() {
            var scrollWid = 0;
            function changeScrollState() {
                var e = document.body;
                var state = e.style.overflow;
                if(state == 'hidden') {       // если прокрутка уже запрещена
                    e.style.overflow = '';
                    e.style.paddingRight = parseInt(getComputedStyle(e,'').paddingRight) - scrollWid + 'px';
                } else if(state == '') {      // если прокрутка уже разрешена
                    scrollWid = parseInt(getComputedStyle(e,'').width);
                    e.style.overflow = 'hidden';
                    scrollWid = Math.abs(scrollWid - parseInt(getComputedStyle(e,'').width));
                    e.style.paddingRight = parseInt(getComputedStyle(e,'').paddingRight) + scrollWid + 'px';
                } else {
                    alert('Ошибка в функции scrollStateWrap()');
                }
            }
            return changeScrollState;
        }
    var f = scrollStateWrap();
    button("f()",'Запретить прокрутку | Разрешить прокрутку',
        ' при запрете прокрутки автоматом к padding-right прибавляется ширина ' +
            'прокрутки, а при разрешении убавляется, поэтому текст не скачет');


// Узнать страничные коориданы видимой области:
// > верхней и нижней границ, и ее высоту.
// > Функция возвращает объект со следующими данными:
//   > top     | страничная координата y верхней границы видимой области
//   > bottom  | страничная координата y нижней границы видимой области
//   > height  | высота видимой области
        function getDocumentScroll() {
            var top = 0, bottom = 0, height = 0;

            // вычислить top
            getPageScroll = (window.pageXOffset != undefined) ?
                function() {         //
                    return {
                        top: pageYOffset,
                        left: pageXOffset
                    };
                } :
                function() {
                    var html = document.documentElement;
                    var body = document.body;

                    var top = html.scrollTop || body && body.scrollTop || 0;
                    top -= html.clientTop;

                    var left = html.scrollLeft || body && body.scrollLeft || 0;
                    left -= html.clientLeft;

                    return {
                        top: top,
                        left: left
                    }
                };
            top = getPageScroll().top;

            // вычислить bottom = top + высота видимой части
            bottom = top + document.documentElement.clientHeight;

            // вычислить height
            function windowHeight() {
                var scrollHeight = document.documentElement.scrollHeight;
                var clientHeight = document.documentElement.clientHeight;
                return Math.max(scrollHeight, clientHeight);
            }
            height = windowHeight();


            return {top: top, bottom: bottom, height: height};
        }
    button('alert(getDocumentScroll().top);',' top', ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Узнать координату верхней границы видимой области');
    button('alert(getDocumentScroll().bottom);',' bottom', ' &nbsp;&nbsp;Узнать координату нижней границы видимой области');
    button('alert(getDocumentScroll().height);',' height', ' &nbsp;&nbsp;&nbsp;Узнать полную высоту документа включая прокрутку');
    document.body.insertAdjacentHTML
        ('beforeEnd', "<p>top(y) ="+getDocumentScroll().top+"</p>" +
                      "<p>bottom(y) = "+getDocumentScroll().bottom+"</p>" +
                      "<p>height = "+getDocumentScroll().height()+"</p>");



// ------------------------ Вспомогательные функции
function write(x,text) {
    if(text == undefined) text='';
    if(x == undefined) x='';
    document.write(text+x);
}
function button(x,text) {
    var afterText = arguments[2];
    if (!afterText)
        document.body.insertAdjacentHTML
            ('beforeEnd', "<br><button onclick=\"" + x + "\">" + text + "</button>");
    else
        document.body.insertAdjacentHTML
            ('beforeEnd', "<br><button onclick=\"" + x + "\">" + text + "</button>" + afterText);
    return x;
}



*/




/* ---------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Глава "Размеры и прокрутка для страницы" учебника по JavaScript
		от Ильи Кантора:
				http://learn.javascript.ru/metrics-window



*****************************************************
Оглавление:

	> Чем этот документ отличается от '7. Метрики элементов'?
	> Проблема при определении ширины/высоты прокручиваемой области,
		характерная именно для document.documentElement





*****************************************************


> Чем этот документ отличается от '7. Метрики элементов'?
	> Ведь по сути, весь глобальный HTML-документ - это тоже самое, что
		HTML-документ в элементе.
	> Особо ничем, но для этого глобального документа есть еще дополнительные
		метрики и методы (см. оглавление).

> Проблема при определении ширины/высоты прокручиваемой области,
	характерная именно для document.documentElement
	> Если полоса прокрутки на странице присутствует, то проблем нет, и её
		размеры можно взять из document.documentElement.scrollWidth/scrollHeight.
	> Проблема появляется, когда прокрутка то есть, то нет. В браузерах
		Chrome/Safari и Opera при отсутствии прокрутки значение:
			document.documentElement.scrollHeight
		может быть меньше, чем
			document.documentElement.clientHeigh
		что является нонсенсом.
	> Решение проблемы - надо брать максимум из этих двух свойств, это и будет
		нужным значением:








-------------------------------------------------- */


