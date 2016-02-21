





var w,e;
w = document.getElementsByClassName('myWrapper')[0];
e = document.getElementsByClassName('myElement')[0];


console.log('getBoundingDocRect(e).left = '+getBoundingDocRect(e,true).left);


console.log(e.getBoundingClientRect().left);







/* Получить объект с документными координатами относительно document (или иного элемента)
		 > getBoundingDocRect(e,coordSystem)
		 															> Аргументы:
		 																- e - ссылка на эл-т, чьи данные требуются
		 																- coordSystem
		 																	> Если опущено, то будут получены координаты
		 																		эл-та e относительно document.
		 																	> Если = true, то будут получены координаты
		 																		эл-та e относительно родителя эл-та e.
		 																		Т.Е. начало коорд-т будет в ЛВ углу внутренней
		 																		зоны родителя.
		 																	> Если указан конкретный эл-т, то координаты
		 																		эл-та e будут получены относит. указанного эл-та.
		 																		Т.Е. начало коорд-т будет в ЛВ углу внутренней
		 																		зоны этого самого указанного эл-та.
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


function getBoundingDocRect(e,coordSystem) {
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

	// Сначала надо решить 1 вопрос:
	// > Мы ищем координаты относительно системы координат document.documentElement,
	//	 или относительно системы координат coordSystem, или относительно
	//   родителя элемента e?
	//   - check = 0  | относительно document.documentElement
	//   - check = 1	| относительно e.parentNode
	//   - check = 2	| относительно coordSystem
	// > При этом надо проверить на верность равенство:
	//   document.documentElement === coordSystem;
	var check = 0;
	if(coordSystem === true) check = 1;
	if(typeof coordSystem === 'object' && coordSystem !== true) check = 2;
	if(coordSystem === document.documentElement) check = 0;

	// Теперь надо назначить docElem - он будет содержать ссылку на элемент,
	// относительно которых мы находим здесь координаты.
	switch(check) {
		case 1: if(e.parentNode !== undefined) docElem = e.parentNode; break;
		case 2: docElem = coordSystem; break;
		default: docElem = document.documentElement;
	}

	console.log('check = '+check);
	console.log('docElem = '+docElem);
	console.log('docElem.clientTop = '+docElem.clientTop);

	if(check === 0) {
		// Размеры прокручЕННой области
		scrollTop = window.pageYOffset 	|| docElem.scrollTop || body.scrollTop;
		scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

		// Размеры рамок элемента
		clientTop = docElem.clientTop || body.clientTop || 0;
		clientLeft = docElem.clientLeft || body.clientLeft || 0;
	} else {
		// Размеры прокручЕННой области
		scrollTop = docElem.scrollTop;
		scrollLeft = docElem.scrollLeft;

		// Размеры рамок элемента
		clientTop = docElem.clientTop || 0;
		clientLeft = docElem.clientLeft || 0;
	}

	// Документные координаты левого верхнего угла элемента (на внеш. стороне)
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