/* ---------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Клиентский браузерный JS.
1. Навигация в DOM


	Навигация по узлам

		document.documentElement		| ссылка на элемент HTML в DOM
		document.body								| ссылка на элемент BODY в DOM

		Учитывают все узлы, в т.ч. текстовые и прочие
		> childNodes			| получить NodeList из всех дочерних узлов
		> firstChild			| получить ссылку на первый дочерний узел
		> lastChild				| получить ссылку на последний дочерний узел
		> parentNode			| получить ссылку на родительский узел
		> previousSibling	| получить ссылку на левого соседа
		>	nextSibling			|	получить ссылку на правого соседа

		Учитывают только узлы типа Element - HTML-элементы (кроме IE<=8)
		> children				|	получить NodeList из дочерних узлов типа Element -
												HTML-элементов.
		> childElementCount				| число детей типа Element
		> firstElementChild				|	первый дочерний узел типа Element
		> lastElementChild				| последний дочерний узел типа Element
		> nextElementSibling			| правый узел-сосед типа Element
		> previousElementSibling 	| левый узел-сосед типа Element


	Навигация узлам типа Element таблицы

		Table
		> rows			| NodeList элементов tr в таблице
		> caption		| ссылка на элемент caption таблицы
		> thead			| ссылка на элемент thead таблицы
		> tfoot			| ссылка на элемент tfoot таблицы
		> tBodies		| NodeList элементов таблицы tbody таблицы

		THEAD/TFOOT/TBODY
		> rows			| NodeList из элементов tr в указанных выше элементах

		TR
		> cells						| NodeList элементов td в элементе tr
		> sectionRowIndex	| номер tr в текущем элементе THEAD/TBODY
		> rowIndex				| номер tr в таблице

		TD/TH
		> cellIndex				| номер td/th в tr


	Навигация узлам типа Element формы

		> document.forms.my		| получить ссылку на форму по её name
		> document.forms.[n]	| получить ссылку на форму по её номеру
		> form.elements.my		| получить ссылку на элемент формы по его name
		> form.elements[n]		| получить ссылку на элемент формы по его номеру
		> element.form				| получить ссылку на форму через её элемент





-------------------------------------------------- */

var element1, element2, e, e2;



/* Навигация по узлам
================================*/
	//Учитывают все узлы, в т.ч. текстовые и прочие


element1 = document.getElementById('ul');
element2 = document.getElementById('li');
e;

//childNodes			| получить NodeList из всех дочерних узлов
// > В примере ниже видно, что childNodes возвращает объект NodeList,
//   содержащий все дочерние элементы, а не только типа Element
e = element1.childNodes;
	console.log(e);							// NodeList
	console.log(e.length);			// 3

	console.log(e[0].nodeName);	// '#text'
	console.log(e[0].data);			// 'Текст1'

	console.log(e[1].nodeName);	// 'LI'

	console.log(e[2].nodeName);	// 'LI'

	console.log(e[3].nodeName);	// '#text'
	console.log(e[3].data);			// 'Текст2'


//firstChild			| получить ссылку на первый дочерний узел
e = element1.firstChild;
	console.log(e.nodeName);		// '#text'
	console.log(e.data);				// 'Текст1'


//lastChild				| получить ссылку на последний дочерний узел
e = element1.lastChild;
	console.log(e.nodeName);		// '#text'
	console.log(e.data);				// 'Текст2'


//parentNode			| получить ссылку на родительский узел
e = element1.parentNode;
	console.log(e.nodeName);		// 'DIV'


//previousSibling	| получить ссылку на левого соседа
e = element2.previousSibling;
	console.log(e.nodeName);		// '#text'
	console.log(e.data);				// 'Текст1'


//nextSibling			|	получить ссылку на правого соседа
e = element2.nextSibling;
	console.log(e.nodeName);		// 'LI'
	console.log(e.innerHTML);		// 'Привет2'



/* Навигация по узлам
================================*/
	//Учитывают только узлы типа Element - HTML-элементы (кроме IE<=8)



//children				|	получить NodeList из дочерних узлов типа Element - HTML-элементов.								HTML-элементов.
// > В примере ниже видно, что children возвращает объект NodeList,
//   содержащий только элементы типа Element
e = element1.children;
	console.log(e);							// NodeList
	console.log(e.length);			// 2				- в отличие от childNodes, текстовые узлы отсутствуют
	console.log(e[0].nodeName);	// 'LI'
	console.log(e[1].nodeName);	// 'LI'


//childElementCount				| число детей типа Element
e = element1.childElementCount;
	console.log(e);		// 2


//firstElementChild				|	первый дочерний узел типа Element
e = element1.firstElementChild;
	console.log(e.nodeName);		// 'LI'
	console.log(e.innerHTML);		// 'Привет1'


//lastElementChild				| последний дочерний узел типа Element
e = element1.lastElementChild;
	console.log(e.nodeName);		// 'LI'
	console.log(e.innerHTML);		// 'Привет2'


//nextElementSibling			| правый узел-сосед типа Element
e = element2.nextElementSibling;
	console.log(e.nodeName);		// 'LI'
	console.log(e.innerHTML);		// 'Привет2'

//previousElementSibling 	| левый узел-сосед типа Element
e = element2.previousElementSibling;		// null - нет левого соседа





/* Навигация узлам типа Element таблицы
================================*/

element1 = document.getElementById('table');



//rows			| NodeList элементов tr в таблице
e = element1.rows;
console.log(e);								// NodeList
	console.log(e.length);			// 2
	console.log(e[0].nodeName);	// 'TR'
	console.log(e[1].nodeName);	// 'TR'

	e2 = e[0].children;
		console.log(e2);	// NodeList элементов TD
		console.log(e2[0].nodeName);		// 'TD'
		console.log(e2[1].nodeName);		// 'TD'


//rowIndex				| номер tr в таблице
console.log(e[0].rowIndex);		// 0
console.log(e[1].rowIndex);		// 1

//cellIndex				| номер td в tr
console.log(e2[0].cellIndex);		// 0
console.log(e2[1].cellIndex);		// 1


//caption		| ссылка на элемент caption таблицы
e = element1.caption;
	console.log(e.nodeName);		// 'CAPTION'
	console.log(e.nodeType);		// 1 (значит ELEMENT_NODE, см. https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType )


// tBodies, rows, cells
console.log('table.rows[0].cells[0].innerHTML = '+
							table.rows[0].cells[0].innerHTML);		// 'Ячейка 1.1'




/* Навигация узлам типа Element формы
================================*/

element1 = document.getElementById('myform');



//document.forms.my		| получить ссылку на форму по её name
//> Пример ниже показывает, что можно получить ссылку на форму по значению
//  её атрибута name
//> Иначе говоря, при создании формы с атрибутом name, в объекте document
//  создается глобальное свойство с именем, равным значению из name
element2 = document.forms.myFormName;
	if(element1 === element2) console.log('Это моя форма')		// да, они равны
	else console.log('Это не моя форма');


//document.forms.[n]	| получить ссылку на форму по её номеру
//> Пример ниже показывает, что можно получить ссылку на форму по её номеру
//  в документе
element2 = document.forms[0];
	if(element1 === element2) console.log('Это моя форма')		// да, они равны
	else console.log('Это не моя форма');


//form.elements.my		| получить ссылку на элемент формы по его name
element2 = element1.elements.myInput;
	console.log(element2.nodeName);					// 'INPUT'

element2 = element1.elements.myButton;
	console.log(element2.nodeName);						// 'BUTTON'
	console.log(element2.innerHTML);					// 'Кнопка'



//form.elements[n]		| получить ссылку на элемент формы по его номеру
element2 = element1.elements[0];
	console.log(element2.nodeName);					// 'INPUT'

element2 = element1.elements[1];
	console.log(element2.nodeName);						// 'BUTTON'
	console.log(element2.innerHTML);					// 'Кнопка'


//element.form				| получить ссылку на форму через её элемент
	if(element1 === element2.form) console.log('Это моя форма')		// да, они равны
	else console.log('Это не моя форма');







/* ---------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------
Ссылки:


	> Глава "Навигация в DOM, свойства-ссылки" учебника по JavaScript
		от Ильи Кантора:
				http://learn.javascript.ru/traversing-dom



*****************************************************
Оглавление:


	> NULL для не существующих узлов
	> Нельзя получить доступ к узлу DOM, который еще не существует
	> IE8 не создает пустые текстовые узлы
	> В IE<=8 в children помимо Elements присутствуют CharacterData.Comment
	> Все навигационные ссылки - только для чтения



*****************************************************





> NULL для не существующих узлов
	> В DOM если ты попытаешься получить ссылку на не существующий
		узел, то ты получишь null.

> Нельзя получить доступ к узлу DOM, который еще не существует.
	> Например, если разместить скрипт в элементе head, то когда он
		начнет выполняться, то элемента body еще не будет существовать,
		и доступ к нему, соответственно, получить нельзя. Вместо элемента
		ты получишь null.

> IE8 не создает пустые текстовые узлы
	> Сабж. В отличие от остальных браузеров.

> В IE<=8 в children помимо Elements присутствуют CharacterData.Comment
	> Т.Е. кроме HTML-элементов там есть еще и комментарии.

> Все навигационные ссылки - только для чтения
	> При обновлении DOM они обновляются автоматически





-------------------------------------------------- */











