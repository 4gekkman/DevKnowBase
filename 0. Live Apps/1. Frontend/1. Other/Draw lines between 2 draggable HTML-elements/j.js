

// Функция возвращает страничные координаты верхнего левого угла элемента
    function getPageCoords(elem) {
        // подготовка
        var box = elem.getBoundingClientRect();  // оконные координаты
        var body = document.body;                // ссылка на body
        var docEl = document.documentElement;    // ссылка на html

        // получить значения прокрутки сверху и слева
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

        // получить ширину рамки сверху и слева
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;

        // получить страничные координаты
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;

        // вернуть объект
        return { top:  Math.round(top),
                 left: Math.round(left)};
    }


// Функция возвращает объект, содержащий ширину, высоту, отступ от начала
// документа сверху, отступ от левого края документа слева.
function getOffset( el ) {
	var _x = getPageCoords(el).left;
	var _y = getPageCoords(el).top;
	var _w = el.offsetWidth|0;
	var _h = el.offsetHeight|0;
	return { top: _y, left: _x, width: _w, height: _h };
}


// Функция рисует линию от правого-нижнего угла div1 к правому-верхнему
// углу div2. Делает она это с помощью абсолютно позиционированного элемента
// div, который выглядит как линия, и поворачивается с помощью CSS-свойств
// семейства transform.
// > div1 - первый элемент
// > div2 - второй элемент
// > color - цвет линии
// > thickness - толщина линии
// > n1 - от какого угла элемента рисовать линию у div1
// > n2 - от какого угла элемента рисовать линию у div2
function connect(div1, div2, color, thickness, n1, n2) {

	// Получить размеры и координаты div1 и div2
	var off1 = getOffset(div1);
	var off2 = getOffset(div2);

	// Вычислить координаты всех углов для div1
	var div1X1, div1Y1, div1X2, div1Y2, div1X3, div1Y3, div1X4, div1Y4;

		// Левый верхний
		div1X1 = off1.left; div1Y1 = off1.top;

		// Правый верхний
		div1X2 = off1.left + off1.width; div1Y2 = off1.top;

		// Правый нижний
		div1X3 = off1.left + off1.width; div1Y3 = off1.top + off1.height;

		// Левый нижний
		div1X4 = off1.left; div1Y4 = off1.top + off1.height;

	// Вычислить координаты всех углов для div2
	var div2X1, div2Y1, div2X2, div2Y2, div2X3, div2Y3, div2X4, div2Y4;

		// Левый верхний
		div2X1 = off2.left; div2Y1 = off2.top;
	
		// Правый верхний
		div2X2 = off2.left + off2.width; div2Y2 = off2.top;

		// Правый нижний
		div2X3 = off2.left + off2.width; div2Y3 = off2.top + off2.height;

		// Левый нижний
		div2X4 = off2.left; div2Y4 = off2.top + off2.height;

	// В зависимости от n1 и n2 выбрать актуальную пару точкек для рисования
	// между ними линии
	var x1,y1, x2,y2;
	switch(+n1) {
		case 1: x1=div1X1; y1 = div1Y1; break;
		case 2: x1=div1X2; y1 = div1Y2; break;
		case 3: x1=div1X3; y1 = div1Y3; break;
		case 4: x1=div1X4; y1 = div1Y4; break;
		default: console.log('В switch(n1) что-то пошло не так');
	}

	switch(+n2) {
		case 1: x2=div2X1; y2 = div2Y1; break;
		case 2: x2=div2X2; y2 = div2Y2; break;
		case 3: x2=div2X3; y2 = div2Y3; break;
		case 4: x2=div2X4; y2 = div2Y4; break;
		default: console.log('В switch(n2) что-то пошло не так');
	}

	// Вычислить расстояние между этими 2-мя точками (гипотенуза)
	var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));

	// Вычислить координаты центра линии (гипотинузы)
	var cx = ((x1 + x2) / 2) - (length / 2);
	var cy = ((y1 + y2) / 2) - (thickness / 2);

	// Найти угол между осью X и линией, проведенной из начала координат
	// (в верхнем левом углу документа) в точку (x,y). Причем в нашем случае:
	// - x = (x1-x2);
	// - y = (y1-y2);
	// > Math.atan2(y,x) возвращает значение в радианах от -Пи до +Пи: от -3.14 до 3.14.
	//   Чтобы получить угол в градусах, нужно перевести радианы в градусы:
	//   	градусы = радианы * (180/Пи).
	var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);

	// Подготовить HTML-текст со стилем для нашей линии
	var htmlLine =
			"<div class='lines' data-div1corner="+n1+" data-div2corner="+n2+" style='padding:0px; " +
									"margin:0px; " +
									"height:" + thickness + "px; " +
									"background-color:" + color + "; " +
									"line-height:1px; " +
									"position:absolute; " +
									"left:" + cx + "px; " +
									"top:" + cy + "px; " +
									"width:" + length + "px; " +
									"-webkit-transform:rotate(" + angle + "deg);"+
									"-moz-transform:rotate(" + angle + "deg);"+
									"-ms-transform:rotate(" + angle + "deg);"+
									"-o-transform:rotate(" + angle + "deg);"+
									"transform:rotate(" + angle + "deg);' />";

	// Вывести в консоль отладочную информацию
	//console.log(htmlLine);

	// Добавить HTML-текст htmlLine к HTML-тексту элемента body
	document.body.innerHTML += htmlLine;
}


// Нарисовать линию от угла №n1 элемента div1 до угла №n2 элемента div2.
// > n1 и n2 - целые числа в диапазоне от 1 до 4.
//   - 1 - левый верхний
//   - 2 - правый верхний
//   - 3 - правый нижний
//   - 4 - левый нижний
window.drawLine = function(n1,n2) {

	// Если переменная n1 не передана
	if(!n1) {
		// Получить значения n1 и n2 из групп group1 и group2 элементов radio button
		var n1,n2, i,group1,group2;
		group1 = document.getElementsByName('group1');
		for(i=0; i<group1.length; i++ ) {
			if(group1[i].checked) {
				n1 = group1[i].value;
			}
		}
	}

	// Если переменная n2 не передана
	if(!n2) {
		group2 = document.getElementsByName('group2');
		for(i=0; i<group2.length; i++ ) {
			if(group2[i].checked) {
				n2 = group2[i].value;
			}
		}
	}

	// Получить элементы div
	var div1 = document.getElementById('div1');
	var div2 = document.getElementById('div2');

	connect(div1, div2, "#0F0", 5, n1, n2);
};


// Функция удаляет все элементы с классом lines - нужна, чтобы можно было
// нажатием на кнопку удалить все нарисованные линии
// > Здесь надо учесть, что нельзя циклом пройтись про объекту NodeList,
//   который получает lines, и удалить все элементы, потому что при удалении
//   каждого элемента индекс остальных смещается так, что 1-й становится 0-м,
//   и так далее.
deleteLines = function() {
	var lines = document.getElementsByClassName('lines');
	while(lines.length) {
		lines[0].parentNode.removeChild(lines[0]);
	}
};


// Обновить позицию всех линий
refreshLines = function() {

	// Сначала удалить все линии, и сохранить их n1/n2 в массив
	var corners = [];
	var lines = document.getElementsByClassName('lines');
	while(lines.length) {
		// Получить n1 и n2
		var cornerN1 = lines[0].getAttribute('data-div1corner');
		var cornerN2 = lines[0].getAttribute('data-div2corner');

//		console.log(cornerN1);
//		console.log(cornerN2);
//		console.log(lines[0]);

		// Поместить их в массив
		corners.push([cornerN1, cornerN2]);

		// Удалить эту линию
		lines[0].parentNode.removeChild(lines[0]);
	}

	// Отрисовать заново все линии, но уже с новыми координатами
	for(var i=0; i<corners.length; i++) {
		drawLine(corners[i][0], corners[i][1]);
	}

};


