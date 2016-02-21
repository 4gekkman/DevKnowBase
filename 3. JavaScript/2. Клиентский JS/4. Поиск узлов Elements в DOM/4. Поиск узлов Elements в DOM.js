/* ---------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Клиентский браузерный JS.
4. Поиск узлов Elements в DOM

	> getElementById					| ищет по id, метод объекта Document
	> getElementsByTagName		| ищет по имени тега в указанном элементе, возвращает живой NodeList, метод объекта Element
	> getElementsByName				| ищет по значению атрибута name во всем документе, возвращает живой NodeList, метод объекта Element
	> getElementsByClassName	| ищет по имени класса во всем документе, возвращает живой NodeList, метод объекта Element

	> querySelector						| ищет по CSS-селектору, возвращает найденный Node
	> querySelectorAll				| ищет по CSS-селектору, возвращает НЕ ЖИВОЙ NodeList


-------------------------------------------------- */

var e, eList;


//getElementById					| ищет по id, метод объекта Document
e = document.getElementById('id1');
	console.log(e.nodeName);							// 'LI'
	console.log(e.innerHTML);							// 'Один'


//getElementsByTagName		| ищет по имени тега во всем документе, возвращает живой NodeList, метод объекта Element
eList = document.getElementsByTagName('li');
	console.log(eList.length);										// 3
	console.log(eList[0].innerHTML);							// 'Один'
	console.log(eList[1].innerHTML);							// 'Два'
	console.log(eList[2].innerHTML);							// 'Три'

eList = document.getElementsByTagName('*'); 		// получить все элементы


//getElementsByName				| ищет по значению атрибута name во всем документе, возвращает живой NodeList, метод объекта Element
eList = document.getElementsByName('myLi');
	console.log(eList.length);										// 2
	console.log(eList[0].innerHTML);							// 'Два'
	console.log(eList[1].innerHTML);							// 'Три'


//getElementsByClassName	| ищет по имени класса во всем документе, возвращает живой NodeList, метод объекта Element
eList = document.getElementsByClassName('c1');
	console.log(eList.length);										// 2
	console.log(eList[0].innerHTML);							// 'Один'
	console.log(eList[1].innerHTML);							// 'Два'


//querySelector						| ищет по CSS-селектору, возвращает найденный Node
e = document.querySelector('li');
	console.log(e.nodeName);					// 'LI'
	console.log(e.innerHTML);					// 'Один'


//querySelectorAll				| ищет по CSS-селектору, возвращает НЕ ЖИВОЙ NodeList
eList = document.querySelectorAll('li');
	console.log(eList.length);							// 3
	console.log(eList[0].innerHTML);				// 'Один'
	console.log(eList[1].innerHTML);				// 'Два'
	console.log(eList[2].innerHTML);				// 'Три'






/* ---------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------

Ссылки:


	> Глава "Поиск: getElement* и querySelector*" учебника по JavaScript
		от Ильи Кантора:
				http://learn.javascript.ru/searching-elements-dom#queryselectorall




*****************************************************
Оглавление:


	> "Живые" коллекции NodeList
	> Поддержка браузерами методов поиска элемента DOM


*****************************************************



> "Живые" коллекции NodeList
	> Для всех методов, кроме querySelectorAll, которые в качестве результата
		возвращают коллекцию NodeList, эта коллекция - "Живая" - т.е. при
		изменении документа изменится даже уже полученные результат запроса.
	> У метода querySelectorAll NodeList НЕ живой.
	> Таким образом, если требуется, чтобы результат был статичен, то надо
		его скопировать в массив.
	> Элементы в "Живой" коллекции живы до тех пор, пока жив тот элемент,
		через которого эта коллекция получена. Например:

			eList = element.getElementsByTagName('li');

		Теперь если удалить все из body:

			document.body.innerHTML = '';

		То eList все равно будет "жива", потому что она привязана к элементу
		element, а не к body. А element - "жив" и лежит в переменной eList.


> Поддержка браузерами методов поиска элемента DOM

	Метод:										Ищет по...		Ищет внутри эл-та?	Поддержка
		getElementById        	id						-										Везде
		getElementsByTagName  	name					-										Везде
		getElementsByName     	tag or '*'		+										Везде
		getElementsByClassName	класс					+										Везде, IE>=9

		querySelector         	CSS-селектор	+										Везде, IE>=8
		querySelectorAll      	CSS-селектор	+										Везде, IE>=8



-------------------------------------------------- */









