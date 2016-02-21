/**
 * В чем основные сложности таких задач:
 *
 * > Мы легко можем получить документные координаты любой точки любого
 * 	объекта относительно глобального document.
 *
 * > Проблема №1 в том, что координаты клика события click - это клиентские
 * 	локальные координаты НЕ относительно document, а относительно окна браузера.
			> Решение: преобразовать координаты клика в документные координаты
 									относительно внут. зоны document.

 *
 * > Проблема №2 - чтобы управлять положением ball на field, требуется
 * 	задавать его CSS-свойства left и top. Эти свойства требуют именно
 * 	локальные клиентские координаты относительно родительского элемента
 * 	для ball - а именно field - относ. ЛВ угла его внутренней зоны.
 * 		> Решение: преобразовать документные координаты клика относ. document,
 * 								полученные при решении проблемы №1, в документные координаты
 * 								клика относительно элемента field.
 * 							Для этого из них надо просто вычесть координаты ЛВ угла
 * 							внутренней зоны field.
 *

 *
 * Архитектура решения:
 *
 * 1. Вычислить документные координаты внут. ЛВ угла field относ. document.
 * 		> Поможет польз. функ-ия getBoundingDocRect()
 *
 * 2. 2. Вычислить ширину и высоту для ball (внешнюю) и field (внутреннюю).
 *
 * 3. Вычислить документные координаты клика относ. внут зоны document,
 * 		преобразовав их из клиентских координат относ. окна.
 *
 * 4. Вычислить документные координаты клика относ. внут. зоны field.
 * 		> Это преобразование нужно потому, что атрибутам top и left,
 * 			управляющим положением ball в field, надо задавать именно
 * 			документные координаты относ. внут. зоны field.
 *
 * 5. Использовать вычисленные в п.4 координаты, и исходя из того, что
 * 		это будет центр мяча, вычислить док. координаты относ. внутренней
 * 		зоны filed для его:
 * 		> верхнего-левого угла
 * 		> правого-нижнего угла
 *
 * 6. Осуществить проверку:
 * 		- Не выходит ли ЛВ угол мяча за Л и В границы клиентской области field
 * 		- Не выходит ли ПН угол мяча за П и Н границы	клиентской области field
 * 		Если выходит, то внести такие поправки для координат центра мяча,
 * 		чтобы не выходитл
 *
 * 7. Чтобы центр ball совпал с вычисленным выше предначертанным ему центром,
 * 		надо вычесть из координат последнего 1/2 от размеров ball.
 *
 * 8. Последнее действие - изменить значения CSS-свойств top и left элемента
 * 		ball, и мяч переместится центром в место клика, и не выйдет за границы
 * 		field.
 *
 * *Примечание 1: аниацию движения мяча можно сделать, добавить CSS3-свойство
 * 								transition: all 1s; для ball.
 *
 * *Примечание 2: Для вычисления примененных к полю вычисленных стилей понадобится
 * 								пользовательская кроссбраузерная функция getStyleSafe
 *
 *
 */


// Ловим событие click на элементе field:
field.onclick = function(e) {


// Задействованные переменные
var doc,		// ссылка на объект-документ
		ball,		// ссылка на ball
		field,	// ссылка на field
		fieldRect,								// ссылка на объект, который вернет ф-ия getBoundingDocRect(field)
		fieldStyles,							// ссылка на объект, который вернут ф-ия getStyleSafe(field)
		fieldTopLeftCornInDocX,		// док. коорд. X внут. ЛВ угла field относ. document
		fieldTopLeftCornInDocY,		// док. коорд. Y внут. ЛВ угла field относ. document
		ballRect,									// ссылка на объект, который вернет ф-ия getBoundingDocRect(ball)
		ballWidth, 		// внешняя ширина ball в px
		ballHeight,		// внешняя высота ball в px
		fieldWidth,		// внутренняя ширина field в px
		fieldHeight,	// внутренняя высота field в px
		clickDocX,		// док. коорд. клика X относ. внут. зоны document
		clickDocY,		// док. коорд. клика Y относ. внут. зоны document
		clickInFieldDocX,	// док. коорд. клика X относ. внут. зоны field
		clickInFieldDocY,	// док. коорд. клика Y относ. внут. зоны field
		futureBallCenterX,					// док. коорд. X относ. внут. з. field будущего центра мяча
		futureBallCenterY ,					// док. коорд. Y относ. внут. з. field будущего центра мяча
		futureBallTopLeftCornerX, 	// док. коорд. X относ. внут. з. field будущего ЛВ угла мяча
		futureBallTopLeftCornerY, 	// док. коорд. Y относ. внут. з. field будущего ЛВ угла мяча
		futureBallBotRightCornerX,	// док. коорд. X относ. внут. з. field будущего ПН угла мяча
		futureBallBotRightCornerY;	// док. коорд. Y относ. внут. з. field будущего ПН угла мяча

// Ссылки на объекты document, ball и field
doc = document.documentElement;
ball = document.getElementById('ball');
field = document.getElementById('field');



//1. 	Вычислить документные координаты внут. ЛВ угла field относ. document.
//  	> Поможет польз. функ-ия getBoundingDocRect()

	// документные координаты для внеш. ЛВ угла field относ. document
	fieldRect = getBoundingDocRect(field);

	// вычисленные стили для field
	fieldStyles = getStyleSafe(field);

	// документные координаты для внут. ЛВ угла field относ. document
	fieldTopLeftCornInDocX = fieldRect.left + parseInt(fieldStyles.borderLeftWidth);
	fieldTopLeftCornInDocY = fieldRect.top + parseInt(fieldStyles.borderTopWidth);



// 2. Вычислить ширину и высоту для ball (внешнюю) и field (внутреннюю).

	// документные координаты для внеш. ЛВ угла field относ. document
	ballRect = getBoundingDocRect(ball);

	// вычислить внешнюю ширину и высоту мяча
	ballWidth = ballRect.width;
	ballHeight = ballRect.height;

	// вычислить внутреннюю ширину и высоту поля
	fieldWidth = fieldRect.width 	- parseInt(fieldStyles.paddingLeft)
																- parseInt(fieldStyles.paddingRight)
																- parseInt(fieldStyles.borderLeftWidth)
																- parseInt(fieldStyles.borderRightWidth);
	fieldHeight = fieldRect.height 	- parseInt(fieldStyles.paddingTop)
																	- parseInt(fieldStyles.paddingBottom)
																	- parseInt(fieldStyles.borderTopWidth)
																	- parseInt(fieldStyles.borderBottomWidth);



//3. 	Вычислить документные координаты клика относ. внут зоны document,
// 		преобразовав их из клиентских координат относ. окна.
clickDocX = e.clientX -													// клиентская коорд. X клика относ. window
						doc.getBoundingClientRect().left -	// клиентская коорд. X внеш. ЛВ угла document относ. window
						doc.clientLeft +										// ширина левой рамки document
						field.scrollLeft;										// размер прокручЕННой по X области в field

clickDocY = e.clientY -													// клиентская коорд. Y клика относ. window
						doc.getBoundingClientRect().top -		// клиентская коорд. Y внеш. ЛВ угла document относ. window
						doc.clientTop +											// ширина верхней рамки document
						field.scrollTop;										// размер прокручЕННой по Y области в field



//4. 	Вычислить документные координаты клика относ. внут. зоны field.
// 		> Это преобразование нужно потому, что атрибутам top и left,
// 			управляющим положением ball в field, надо задавать именно
// 			документные координаты относ. внут. зоны field.
clickInFieldDocX = clickDocX - fieldTopLeftCornInDocX;
clickInFieldDocY = clickDocY - fieldTopLeftCornInDocY;



//5. 	Использовать вычисленные в п.4 координаты, и исходя из того, что
//		это будет центр мяча, вычислить док. координаты относ. внутренней
//		зоны filed для его:
//		> верхнего-левого угла
//		> правого-нижнего угла
futureBallCenterX = clickInFieldDocX;  		// док. коорд. X относ. внут. з. field будущего центра мяча
futureBallCenterY = clickInFieldDocY;			// док. коорд. Y относ. внут. з. field будущего центра мяча
futureBallTopLeftCornerX = futureBallCenterX - ballWidth/2; 	// док. коорд. X относ. внут. з. field будущего ЛВ угла мяча
futureBallTopLeftCornerY = futureBallCenterY - ballHeight/2;  // док. коорд. Y относ. внут. з. field будущего ЛВ угла мяча
futureBallBotRightCornerX = futureBallCenterX + ballWidth/2;  // док. коорд. X относ. внут. з. field будущего ПН угла мяча
futureBallBotRightCornerY = futureBallCenterY + ballHeight/2; // док. коорд. Y относ. внут. з. field будущего ПН угла мяча




//6. 	Осуществить проверку:
//		- Не выходит ли ЛВ угол мяча за Л и В границы клиентской области field
//		- Не выходит ли ПН угол мяча за П и Н границы	клиентской области field
//		Если выходит, то внести такие поправки для координат центра мяча,
//		чтобы не выходитл

		// Поправка 1 - проверка выхода за левую границу
		// Если futureBallTopLeftCornerX < 0, значит она выходит за левую границу
		// клиентской области field.
		// > Чтобы избежать выхода, требуется внести поправку для координаты
		//   X центра мяча:
		if( futureBallTopLeftCornerX < 0 ) {
			futureBallCenterX -= futureBallTopLeftCornerX;
			console.log('Произошел выход за левую границу!');
		}

		// Поправка 2 - проверка выхода за верхнюю границу
		// Если futureBallTopLeftCornerY < 0, значит она выходит за верхнюю границу
		// клиентской области field.
		// > Чтобы избежать выхода, требуется внести поправку для координаты
		//   Y центра мяча:
		if( futureBallTopLeftCornerY < 0 ) {
			futureBallCenterY -= futureBallTopLeftCornerY;
			console.log('Произошел выход за верхнюю границу!');
		}

		// Поправка 3 - проверка выхода за правую границу
		// Если futureBallTopLeftCornerX > fieldWidth, значит она выходит за правую
		// границу клиентской области field.
		// > Чтобы избежать выхода, требуется внести поправку для координаты
		//   X центра мяча:
		if( futureBallBotRightCornerX > fieldWidth ) {
			futureBallCenterX -= futureBallBotRightCornerX - fieldWidth;
			console.log('Произошел выход за правую границу!');
		}

		// Поправка 4 - проверка выхода за нижнюю границу
		// Если futureBallTopLeftCornerY < 0, значит она выходит за верхнюю границу
		// клиентской области field.
		// > Чтобы избежать выхода, требуется внести поправку для координаты
		//   Y центра мяча:
		if( futureBallBotRightCornerY > fieldHeight ) {
			futureBallCenterY -= futureBallBotRightCornerY - fieldHeight;
			console.log('Произошел выход за нижнюю границу!');
		}



//7. 	Чтобы центр ball совпал с вычисленным выше предначертанным ему центром,
//		надо вычесть из координат последнего 1/2 от размеров ball.
futureBallCenterX -= ballWidth/2;
futureBallCenterY -= ballHeight/2;




//8. 	Последнее действие - изменить значения CSS-свойств top и left элемента
//		ball, и мяч переместится центром в место клика, и не выйдет за границы
//		field.
ball.style.left = futureBallCenterX + 'px';
ball.style.top 	= futureBallCenterY + 'px';


};	// конец обработчика событий








//------------ Старая версия обработчика событий
/*
var ball,
		field,
		doc;

doc = document.documentElement;
ball = document.getElementById('ball');
field = document.getElementById('field');



field.onclick = function(e) {

	var fieldStyles,

			clickDocX,						// документная координата X клика
			clickDocY,						// документная координата Y клика

			ballTopLeftCornOutDocX,  		// документная координата X внешнего верхнего левого угла мяча
			ballTopLeftCornOutDocY,  		// документная координата Y внешнего верхнего левого угла мяча
			ballBottomRightCornOutDocX, // документная координата X внешнего правого нижнего угла мяча
			ballBottomRightCornOutDocY, // документная координата Y внешнего правого нижнего угла мяча

			ballWidth,						// ширина мяча
			ballHeight,						// высота мяча

			fieldTopLeftCornInDocX,				// документная координата X внешнего верхнего левого угла мяча
			fieldTopLeftCornInDocY,				// документная координата Y внешнего верхнего левого угла мяча
			fieldBottomRightCornOutDocX,	// документная координата X внешнего правого нижнего угла мяча
			fieldBottomRightCornOutDocY,	// документная координата Y внешнего правого нижнего угла мяча

			fieldWidth,
			fieldHeight;

	// Получить вычисленные стили поля
	fieldStyles = getStyleSafe(field);


	// Получить документные координаты клика относит. document, где:
	// > e.clientX/clientY - клиентские координаты относительно окна браузера.
	// > doc.getBoundingClientRect().top/left - клиентские коорд. ЛВ угла
	//   document - для его внешней зоны, относительно окна браузера.
	// > doc.clientLeft/clientTop - размеры рамки для document
	// > field.scrollLeft/scrollTop - размеры прокручЕННой области поля - они
	//   добавляются на случай, если у поля будет прокрутка, и благодаря такой
	//   добавке мы всегда будем иметь одни и те же документные координаты
	//   относ. document для любой точки поля, даже если оно с прокруткой.
	var clickDocX = e.clientX - doc.getBoundingClientRect().left - doc.clientLeft + field.scrollLeft;
	var clickDocY = e.clientY - doc.getBoundingClientRect().top - doc.clientTop + field.scrollTop;


	// Получить документные координаты внешних ЛВ и ПН углов мяча относит. document
		var ballRect = getBoundingDocRect(ball);

		// ЛВ угла
		ballTopLeftCornOutDocX = ballRect.left;
		ballTopLeftCornOutDocY = ballRect.top;

		// ПН угла
		ballBottomRightCornOutDocX = ballRect.right;
		ballBottomRightCornOutDocY = ballRect.bottom;

	// Получить документные координаты внутренних ЛВ и ПН углов поля относит. document
		var fieldRect = getBoundingDocRect(field);

		// ЛВ угла
		fieldTopLeftCornInDocX = fieldRect.left + parseInt(fieldStyles.borderLeftWidth);
		fieldTopLeftCornInDocY = fieldRect.top + parseInt(fieldStyles.borderTopWidth);

		// ПН угла
		fieldBottomRightCornOutDocX = fieldRect.right + parseInt(fieldStyles.borderRightWidth);
		fieldBottomRightCornOutDocY = fieldRect.bottom + parseInt(fieldStyles.borderBottomWidth);

	// Вычислить внешнюю ширину и высоту мяча
	ballWidth = ballRect.width;
	ballHeight = ballRect.height;

	// Вычислить внутреннюю ширину и высоту поля
	fieldWidth = fieldRect.width 	- parseInt(fieldStyles.paddingLeft)
																- parseInt(fieldStyles.paddingRight)
																- parseInt(fieldStyles.borderLeftWidth)
																- parseInt(fieldStyles.borderRightWidth);
	fieldHeight = fieldRect.height 	- parseInt(fieldStyles.paddingTop)
																	- parseInt(fieldStyles.paddingBottom)
																	- parseInt(fieldStyles.borderTopWidth)
																	- parseInt(fieldStyles.borderBottomWidth);

	// Посмотреть в будущее и узнать, какие будут координаты ЛВ и ПН внешних
	// углов мяча относит. document, когда мяч переместится центром на новое
	// место.
	// > Углы надо смотреть относительно центра мяча, а центр у нас:
	//   - X = clickDocX - ballWidth/2
	//   - Y = clickDocY - ballHeight/2
	var futureCenterOfBallDocX,
	    futureCenterOfBallDocY,
			futureBallTopLeftCornOutDocX,
			futureBallTopLeftCornOutDocY,
			futureBallBottomRightCornOutDocX,
			futureBallBottomRightCornOutDocY;

			// Будущий центр мяча - это место клика
			// > Здесь также происходит конвертация документных координат относ. document
			//   в документные координаты относительно field
			futureCenterOfBallDocX = clickDocX - fieldTopLeftCornInDocX;
			futureCenterOfBallDocY = clickDocY - fieldTopLeftCornInDocY;


			// Будущие ЛВ и ПН внешние углы мяча
			// > Т.К. эти координаты вычисляютя на основе центра, то они уже
			//   автоматически конвертированы в документные относ. field
			futureBallTopLeftCornOutDocX = futureCenterOfBallDocX - ballWidth/2;
			futureBallTopLeftCornOutDocY = futureCenterOfBallDocY - ballHeight/2;
			futureBallBottomRightCornOutDocX = futureCenterOfBallDocX + ballWidth/2;
			futureBallBottomRightCornOutDocY = futureCenterOfBallDocY + ballHeight/2;



	// Вычилить результирующие значения для назначения атрибутам:
	// - ball.style.left
	// - ball.style.top
	// > Должны быть относительно field, а не document!
	// > Должны быть в px
	// > В конце должне быть суффикс 'px';
	// > Не дать краю мяча выйти за левую и верхнюю границу поля:
	// 	 > Если коорд. X или Y будущего ЛВ внешнего угла мяча меньше, чем
	//   	 соотв-но X или Y ЛВ внутр. угла поля, изменить её на соотв.
	//  	 координату поля
	// > Не дать краю мяча выйти за правую и нижнюю границу поля:
	// 	 > Если коорд. X или Y будущего ПВ внешнего угла мяча больше, чем
	//   	 соотв-но X или Y ПВ внутр. угла поля, изменить её на соотв.
	//  	 координату поля


		// Сделать поправки к будущему центру мяча по оси X, если потребуются

			// Если мяч вылезает за левую границу, до прибавить соотв. поправку
			// к будущему центру по оси X
			if( futureBallTopLeftCornOutDocX < 0 ) {

					futureCenterOfBallDocX -= futureBallTopLeftCornOutDocX;

			console.log('Вылез за левую границу');
			}

			// Если мяч вылезает за правую границу, до отнять соотв. поправку
			// к будущему центру по оси X
			if( futureBallBottomRightCornOutDocX > fieldWidth ) {

					futureCenterOfBallDocX -= futureBallBottomRightCornOutDocX -
																		fieldWidth;

			console.log('Вылез за правую границу');
			}


		// Сделать поправки к будущему центру мяча по оси Y, если потребуются

			// Если мяч вылезает за верхнюю границу, до прибавить соотв. поправку
			// к будущему центру по оси Y
			if( futureBallTopLeftCornOutDocY < 0 ) {

				futureCenterOfBallDocY -= futureBallTopLeftCornOutDocY;

			console.log('Вылез за верхнюю границу');
			}

			// Если мяч вылезает за нижнюю границу, до отнять соотв. поправку
			// к будущему центру по оси Y
			if( futureBallBottomRightCornOutDocY > fieldHeight ) {

					futureCenterOfBallDocY -= futureBallBottomRightCornOutDocY -
																		fieldHeight;

			console.log('Вылез за нижнюю границу');
			}


	// Поместить центр мяча в центр клика, передача док. коорд-т относ. field:
	ball.style.left = futureCenterOfBallDocX - ballWidth/2 + 'px';
	ball.style.top = futureCenterOfBallDocY - ballHeight/2 + 'px';

*/


//------------ Старая версия обработчика событий (конец)














// Кроссбраузерная функция для чтения вычисленного стиля элемента
function getStyleSafe(e) {
		return window.getComputedStyle ? getComputedStyle(e,'') :
				e.currentStyle;
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
																		- НЕ меняются при прокрутке
																		- Используются при позиционировании элементов
																			с position: absolute
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





