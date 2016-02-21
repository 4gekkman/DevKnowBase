/* ---------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Клиентский браузерный JS.
6. Работа с CSS стилями

	> className			| соответствует HTML-атрибуту class, св-во объекта Element
	> classList			| интерфейс для работы с классами, св-во объекта Element

	> style							| доступ к встроенным стилям элемента
	> style.cssText			| доступ к строке со встроенными стилями (атрибут style HTML-элемента)

	> getComputedStyle	|	получить объект CSSStyleDeclaration с вычисленными стилями, св-во объекта Window
	> currentStyle			| аналог getComputedStyle для IE<=8, но еденицы измерения те, в которых значения заданы в CSS.


	-----
	> Кроссбраузерная функция для чтения вычисленного стиля элемента


	-----
	Техники и наработки
		 > Вычислить и раскрасить внешние ссылки
		 > Создание кнопки со стилями только средствами JavaScript
		 > Показывать/скрывать блок со стилями и текстом с указанным интервалом





-------------------------------------------------- */

var e,e2, styles, computedStyles;



//className			| соответствует HTML-атрибуту class, св-во объекта Element
//> Сделаем так, чтобы класс элемента стал равен class = 'red boldFont'
e = document.getElementById('rad');
	e.className += 'red ';							// [надпись стала красной]
	e.className += 'boldFont ';					// [надпись стала жирной]


//classList			| интерфейс для работы с классами, св-во объекта Element
//> Методы интерфейса classList:
//	- elem.classList.contains(cls)	| Возвращает true если cls у элемента elem есть, иначе false.
//	- elem.classList.add(cls)				| Добавляет класс cls элементу elem
//	- elem.classList.remove(cls)		| Удаляет класс cls у элемента elem
//	- elem.classList.toggle(cls)		| Если класса cls у элемента нет, добавляет его. А если есть - удаляет.

	//contains
	console.log(e.classList.contains('red'));			// true
	console.log(e.classList.contains('blue'));		// false

	//add
	e.classList.add('bigFont');			// [шрифт надписи стал больше]

	//remove
	e.classList.remove('boldFont');	// [шрифт перестал быть жирным]

	// toggle
	e.classList.toggle('boldFont');	// [шрифт снова стал жирным жирным]
	e.classList.toggle('boldFont');	// [шрифт снова перестал быть жирным]


//style							| доступ к встроенным стилям элемента
//> Устанавливает значения в атрибут style элемента, и только оттуда же
//  и может их читать. А из других источников, например из CSS, не может.
//> Ниже примеры записи/чтения CSS-свойств таким образом и демонстрация
//  вышеприведенного факта:
e.style.borderWidth = '0px';
e.style.borderBottom = '1px';
e.style.borderStyle = 'dotted';
e.style.borderColor = '#000';

e.style.borderColor = '';			// так можно сбросить установленный стиль

	// Демонстрация того, что с помощью style прочитать стили, установленные
	// в ином месте, кроме как в атрибуте style - не удастся, по вышеописанным причинам
	console.log(e.style.borderStyle);		// 'dotted'
	console.log(e.style.fontSize);			// ''  	- не может прочитать, потому что
																			//				font-size установлен в CSS-стилях


//style.cssText			| доступ к строке со встроенными стилями (атрибут style HTML-элемента)
//> Если требуется установить значение атрибута style элемента, присвоив ему
//  подготовленную строку, то для этого и существует свойство cssText:
e2 = document.getElementById('mir');
e2.style.cssText = 'color: #269; border-width: 0px; border-style: dashed; border-top-width: 1px;';


//getComputedStyle	|	получить объект CSSStyleDeclaration с вычисленными стилями, св-во объекта Window
//> С помощью этого метода можно получить объект CSSStyleDeclaration, содержащий
//  абсолютно все стили, которые применяются к элементу, а не только стили из
//  атрибута style элемента.
//> При получении значения нельзя указать св-во агрегатор, а надо указывать
//  полное имя самого свойство. Например, нельзя указать font, а можно указать
//  fontStyle, или fontSize, и т.д.
//> Стили посещенных ссылок таким образом узнать не получится, это запрещают
//  большинство браузеров
//> Поддерживается во всех браузерах, кроме IE<=8.
styles = e.style;
computedStyles = window.getComputedStyle(e,'');

	console.log(styles);						// стили, примененные к элементу в его атрибуте style
	console.log(computedStyles);		// все стили, которые применены к элементу

	console.log(styles.fontSize);						// ''
	console.log(computedStyles.fontSize);		// '22px'


//currentStyle			| аналог getComputedStyle для IE<=8, но еденицы измерения те, в которых значения заданы в CSS.
//> Отличается от getComputedStyle только единицами измерения, в которых
//  он возвращает значения.
//> Поддерживается в IE<=8.


// Кроссбраузерная функция для чтения вычисленного стиля элемента
function getStyleSafe(e) {
		return window.getComputedStyle ? getComputedStyle(e,'') :
				e.currentStyle;
}









// --------------------- Техники и наработки


/*      1. Вычислить и раскрасить внешние ссылки
 > Задача на className
 > Сделайте желтыми внешние ссылки. Все относительные ссылки и
   абсолютные с доменом javascript.ru считаются внутренними.
   Желтый цвет должен обеспечиваться установкой класса external.
*/
// Название задачи
document.body.insertAdjacentHTML
    ('beforeEnd', '<br><p class=\'task\'>1. Задача на className</p>');

// отрисовка списка
var t = ['http://google.com',
         '/tutorial.html',
         'ftp://example.com/my.zip',
         'http://nodejs.org',
         'http://javascript.ru',
         'ftp://javascript.ru/file'];
document.body.insertAdjacentHTML('beforeEnd','<ul id=\'ul1\'>');
for(var i=0; i<t.length; i++) {
    // проверка - внутренняя ли ссылка
    var innerLink = false;
    if(t[i].charAt(0) === '/') innerLink = true;
    if(t[i].slice(0,6) === 'ftp://' && t[i].slice(6,16) === 'javascript') innerLink = true;
    if(t[i].slice(0,7) === 'http://' && t[i].slice(7,17) === 'javascript') innerLink = true;
    document.body.lastChild.insertAdjacentHTML
        ('beforeEnd','<li>'+t[i]+'</li>');
    if(!innerLink)
        document.getElementById('ul1').lastChild.className = 'external';
}
document.body.insertAdjacentHTML('beforeEnd','</ul>');


/*      2. Создание кнопки со стилями только средствами JavaScript
 > Задача на cssText
 > В примере ниже кнопка создана при помощи HTML 5/HTML 5. В решении
   кнопка должна создаваться, настраиваться и добавляться в документ
   при помощи только JavaScript, без тегов <style> и <a>.
 */
// Название задачи
document.body.insertAdjacentHTML
    ('beforeEnd', '<br><p class=\'task\'>2. Задача на cssText</p>');

// создание элемента
document.body.insertAdjacentHTML
    ('beforeEnd','<a id="sec1"></a>');

// придание элементу HTML 5-свойств
e = document.getElementById('sec1');
    e.style.cssText = '-moz-border-radius: 8px;' +
                     '-webkit-border-radius: 8px;' +
                     'border-radius: 8px;' +
                     'border: 2px groove green;' +
                     'display: block;' +
                     'height: 30px;' +
                     'line-height: 30px;' +
                     'width: 100px;' +
                     'text-decoration: none;' +
                     'text-align: center;' +
                     'color: red;' +
                     'font-weight: bold;';
e.innerHTML = 'Кнопка';
e.href = '#';


/*      3. Показывать/скрывать блок со стилями и текстом с указанным интервалом
 > Задача на cssText
 > Напишите функцию showNotification(options),
   которая показывает уведомление.
 */
document.body.insertAdjacentHTML
    ('beforeEnd', '<br><p class=\'task\'>3. Показывать-убирать уведомление с интервалом</p>');

/**
 * Показывает уведомление. Повторный вызов убирает уведомление. И т.д.
 *
 * @param options.top {number} вертикальный отступ, в px
 * @param options.right {number} правый отступ, в px
 * @param options.cssText {string} строка стиля
 * @param options.className {string} HTML 5-класс
 * @param options.html {string} HTML 5-текст для показа
 */

function showNote(options) {
    if(document.getElementById('sec2')) {
        document.body.removeChild(document.getElementById('sec2'));
    } else {
        document.body.insertAdjacentHTML
            ('beforeEnd',options.html);
        var e = document.getElementById('sec2');
        e.className = options.className;
        e.style.cssText = options.cssText;
        e.style.top = options.top + 'px';
        e.style.right = options.right + 'px';
    }
}
setInterval(function() {showNote({ top: 50,
                       right: 50,
                       cssText: 'position: absolute;'+
                                'width: 100px;'+
                                'height: 20px;'+
                                'background: yellow;'+
                                'border: 1px solid black;'+
                                'padding: 10px;'+
                                'text-align: center;',
                       className: 'abc',
                       html: '<section id=\'sec2\'>Сообщение</section>'
})},1500);








/* ---------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Глава "Стили и классы, getComputedStyle" учебника по JavaScript
		от Ильи Кантора:
				http://learn.javascript.ru/styles-and-classes

	> Ссылка на JS-библиотеку classList.js для эмуляции одноименного
		свойства в IE<=9:
				https://github.com/eligrey/classList.js


*****************************************************
Оглавление:

	> Ссылка на раздел другого моего справочника о работе с CSS-стилями
	> О совместимости свойства classList



*****************************************************


> Ссылка на раздел другого моего справочника о работе с CSS-стилями
	> Подробнее о работе со стилями можно прочитать по следующей ссылке:

		3. JavaScript ->
		2. Клиентский JS, DOM, события, AJAX, Comet ->
		Клиентский браузерный JS - справочник + оглавление по объектам.js

> О совместимости свойства classList
	> Поддерживается во всех современных браузерах.
	> Поддерживается в IE>=10.
	> Для поддержки в IE<=9 его надо эмулировать с помощью JS-библиотеки
		classList.js, вот ссылка на неё:
				https://github.com/eligrey/classList.js



-------------------------------------------------- */





