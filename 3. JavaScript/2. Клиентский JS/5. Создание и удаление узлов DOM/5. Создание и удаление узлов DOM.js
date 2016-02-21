/* ---------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Клиентский браузерный JS.
5. Создание и удаление узлов DOM


	Старые методы
		> createElement		| создать узел типа Element, метод объекта Document
		> createTextNode	| создать узел типа Text, метод объекта Document

		> cloneNode				| клонировать элемент

		> e.appendChild				| вставить узел в DOM, как дочерний элемент e, в конец
		> e.insertBefore(x,y)	| вставить узел x в DOM, как дочерний элемент e, перед элементом y
		> e.insertAfter(x,y)  | [пользовательская] вставить узел x в DOM, как дочерний элемент e, после элемента y

		> removeChild			| удаляет узел из DOM, возвращает удаленный узел
		> replaceChild		| заменяет один узел DOM на другой, возвращает удаленный узел

		-----
		> Функция, создающая окно с сообщением text и заголовком title
		> Техника оптимальной по скорости вставки элементов в DOM


	Новые методы
		> e.insertAdjacentHTML(where,html)	| вставить html в указанное место документа, метод объекта Element
			- beforeBegin	| вставить html перед e
			- afterBegin	| вставить html внутрь e в самое начало
			- beforeEnd		| вставить html внутрь e в самый конец
			- afterEnd		| вставить html после e








-------------------------------------------------- */




/* Старые методы
================================*/

var e,eRed, eClone, b, t, removeText, removedNode;


//createElement		| создать узел типа Element, метод объекта Document
e = document.createElement('div');
e.className = 'divClass';


//createTextNode	| создать узел типа Text, метод объекта Document
t = document.createTextNode('<b>Текстовый узел</b>');


//cloneNode(x)				| клонировать элемент
//> Если x = true, то клонирует элемент с атрибутами и вложенными элементами.
//> Если x = false, то клонирует элемент с атрибутами, но без вложенных элементов.
eClone = e.cloneNode(true);


//e.appendChild				| вставить узел e в DOM, как дочерний элемент body, в конец
document.body.appendChild(e);


//e.insertBefore(x,y)	| вставить узел t в DOM, как дочерний элемент body, перед элементом e
document.body.insertBefore(t,e);

//[пользовательская] вставить узел x в DOM, как дочерний элемент e, после элемента y
var insertAfter = function(x,y) {
	return y.parentNode.insertBefore(x, y.nextSibling);
};


//removeChild(		| удаляет узел из DOM, возвращает удаленный узел
//> Ниже код кнопки и функции, которая удаляет узел t при нажатии на кнопку
//> Т.К. возвращает удаленный узел, то его можно потом легко вставить назад

	// Функция, которая удаляет узел t при нажатии на кнопку
	removeText = function() {
		return t.parentNode.removeChild(t);
	};

	// Создать кнопку удаления
	b = document.createElement('button');
	b.innerHTML = 'Удалить текстовый узел';
	b.onclick = function(){ removedNode = removeText(); };
	document.body.appendChild(b);

	// Создать кнопку вставки удаленного узла
	b = document.createElement('button');
	b.innerHTML = 'Вставить обратно текстовый узел';
	b.onclick = function() {
		if(removedNode) document.body.insertBefore(removedNode,e);
	};
	document.body.appendChild(b);


//replaceChild		| заменяет один узел DOM на другой, возвращает удаленный узел
//> Заменить синий прямоугольник на красный
eRed = document.createElement('div');
eRed.className = 'bgRed';

b = document.createElement('button');
b.innerHTML = 'Заменить синий прямоугольник на красный';
b.onclick = function() {
	e.parentNode.replaceChild(eRed,e);
};
document.body.appendChild(b);



// Функция, создающая окно с сообщением text и заголовком title
function createMessage(title,text) {
    var c = document.createElement('section');  // создать элемент
    c.innerHTML = '<section class="message"> \
        <h1>'+title+'</h1> \
        <section class="content">' + text + '</section> \
        <input class="ok" type="button" value="OK"> \
        </div>';                                // записать в него структуру
    return c.firstChild;                        // вернуть эту структуру
}
var cm = createMessage("Внимание!","Разыскивается опасный преступник Грумбель " +
    "по подозрению в жестоком поедании сосисок в галантерее Шварца. ");  // создать элемент
document.body.appendChild(cm);  // добавить элемент в BODY


//Техника оптимальной по скорости вставки элементов в DOM
//>	Суть в том, чтобы сократить кол-во вставок до минимума. Лучше сначала
//  все элементы создать, а затем уже скопом вставить в DOM.
var ul = document.createElement('ul');  // создать ul
var li = document.createElement('li');  // создать li
for(var i=0; i<10; i++) {
    li = li.cloneNode(true);
    li.innerHTML = i;
    ul.appendChild(li);                 // записать все li в ul
}
document.body.appendChild(ul);          // и уж в конце добавить все это в DOM одним махом*/






/* Новые методы
================================*/



//e.insertAdjacentHTML(where,html)	| вставить html в указанное место документа
//> Поддерживается всеми современными браузерами
//> Возможные значения where:
//	- 'beforeBegin'	| вставить html перед e
//	- 'afterBegin'	| вставить html внутрь e в самое начало
//	- 'beforeEnd'		| вставить html внутрь e в самый конец
//	- 'afterEnd'		| вставить html после e

e.insertAdjacentHTML('beforeEnd','<br><b>Этот текст вставлен с помощью метода Element.insertAdjacentHTML</b>');








/* ---------------------------------------------------
 ---------------- И Н Ф О Р М А Ц И Я ----------------



Ссылки:


	> Глава "Добавление и удаление узлов" учебника по JavaScript
		от Ильи Кантора:
				http://learn.javascript.ru/modifying-document

	> Глава "Мультивставка: insertAdjacentHTML и DocumentFragment"
		учебника по JavaScriptот Ильи Кантора:
				http://learn.javascript.ru/multi-insert


*****************************************************
Оглавление:


	> В чем разница между вставкой текста через создание+вставку
		текстового узла и вставкой текста через innerHTML
	> Особенности методов создания и вставки
	> Особенности метода document.write()
	> Ссылка на JS-скрипт эмуляции insertAdjacentHTML в FireFox <= 7


*****************************************************


> В чем разница между вставкой текста через создание+вставку
	текстового узла и вставкой текста через innerHTML
	> При создании текстового узла с помощью createTextNode, любые
		специальные символы и теги в строке будут интерпретированы, как текст.
		А innerHTML вставит все, как HTML. Пример:

		Этот код вставит текст "<b>Иван</b>" на страницу
			.....
			e = document.createTextNode('<b>Иван</b>');
			document.body.appendChild(e);

		Этот код вставит жирный текст "Иван" на страницу
			.....
			document.body.innerHTML = '<b>Иван</b>';

> Особенности методов создания и вставки
	> Все методы создания и вставки возвращают созданный/вставленный узел
	> Все методы вставки автоматом удаляют узел со старого места (если он есть)
	> Все методы удаления возвращают удаленный узел

> Особенности метода document.write()
	> Он срабатывает до загрузки докумета
	> Если сделать кнопку, которая дописывает document.write'ом
		текст на страницу, то уже закрытая страница снова откроется,
		с нее все удалится, и останется только этот текст.

> Ссылка на JS-скрипт эмуляции insertAdjacentHTML в FireFox <= 7
		http://learn.javascript.ru/files/tutorial/browser/dom/insertAdjacentFF.js



 -------------------------------------------------- */