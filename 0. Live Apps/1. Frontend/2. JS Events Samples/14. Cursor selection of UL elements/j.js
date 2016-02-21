/**
 * Задача:
 *
 * > Сделать список, элементы которого можно выделять кликом.
 *
 * > Если клик происходит с зажатым ctrl, то элемент добавляется/удаляется из выделенных.
 *
 * > Добавить выделение сразу нескольких элементов, если клик происходит с зажатым shift:
 * 		- Если еще ни 1 элемент не выделен, то выделяются все элементы, начиная от 1-го,
 * 			и до того, по которому кликнули, включительно.
 * 		- Если элементы уже выделялись, то происходит тоже самое, что описано в пред. пункте,
 * 			только выделение начинается не от 1-го эл-та, а от последнего выделенного.
 * 		-
 *
 * > В этой задаче считать, что в элементах списка может быть только текст, без
 * 		вложенных тегов.
 *
 * > Обработку одновременного нажатия CTRL и SHIFT можно не делать.
 *
 *
 *
 * Обсуждение решения:
 *
 * > 	Решение - часть 1.
 * 		> Сначала реализовать выделение без клавиш-модификаторов.
 * 		> При нажатии на не выделенный li он должен выделяться, при этом все остальные
 * 			li в списке должны развыделяться.
 * 		> При нажатии на выделенный li, все li списка должны развыделиться.
 *
 *
 *
 * > 	Решение - часть 2.
 * 		> Реализовать мульти-выделение с зажатой клавишей-модификатором CTRL.
 * 		> При нажатии на не выделенный li с зажатым CTRL он должен выделяться. При этом
 * 			в отличие от части 1, развыделения других li происходить не должно.
 * 		> При нажатии на выделенный li с зажатым CTRL, он должен развыделиться .При этом
 * 			в отличие от части 1, развыделения других li происходить не должно.
 *
 * > 	Решение - часть 3.
 * 		> Реализовать выделение промежутков с зажатой клавишей-модификатором SHIFT.
 * 		> При на
 *
 *
 * > Решение - нумерация выделений.
 * 		> Чтобы реализовать выделение промежутков, надо знать, какой из элементов
 * 			был выделен последним.
 * 		> Для этого надо сохранять историю выделений.
 * 		> А если какой-то элемент развыделяют с CTRL, то удалять этот элемент из этой
 * 			истории.
 *
 * 		> Историю выделений будем сохранять в пользовательских атрибутах data-selHistory
 * 			у каждого из li. В виде положительных целых чисел.
 * 		> При выделении любого li, происходит следующее:
 * 			- Программа пробегает все li и их атрибуты data-selHistory. И находит самое
 * 				большое число.
 * 			- И этому li она ставит в data-selHistory найденное число + 1.
 * 		> При развыделении:
 * 			- Программа пробегает все li и ставить их атрибутам data-selHistory значение ''.
 *
 *
 *
 *
 * Архитектура решения:
 *
 * 1. Назначить 1 обработчик события onclick для списка ul. Он будет ловить все клики,
 * 		совершаемые по всем своим потомкам, в Т.Ч. элементам этого списка li.
 *
 * 2. Кроссбраузерно получить ссылки на объект-событие event, а также
 *		на целевой объект target, в котором изначально произошло событие.
 *
 * 3. Проверить, какая кнопка мыши была нажата. Если любая кроме левой, завершить
 * 		работу функции-обработчика.
 *    Проверить, какие клавиши модификторы были нажаты:
 * 		- Если не были зажаты, или CTRL + SHIFT, то:		[4,5,6]
 * 		- Если CTRL, то: 																[7,8,9,10]
 * 		- Если SHIFT, то:																[11,12,13,14,15,16]
 *
 *
 *
 * 		== Если не были зажаты, или CTRL + SHIFT ==
 *
 * 4. Проверить, выделен ли тот элемент li, по которому щелкнули.
 * 		- Если да, то [5] и завершить работу обработчика
 * 		- Если нет, то [5,6]
 *
 * 5. Развыделить все li в списке, и одновременно - для каждого из li - если у него
 * 		есть пользовательский атрибут data-selHistory, назначить ему значение ''.
 *
 * 6. Выделить тот li, по которому щелкнули. И одновременно:
 * 		- Проверить наличие пользовательского атрибута data-selHistory. Если нет - создать.
 * 		- Назначить значение для data-selHistory равное '1'
 *
 *
 * 		== Если CTRL ==
 *
 * 7. Проверить, выделен ли тот элемент li, по которому щелкнули.
 * 		- Если да, то [10] и завершить работу обработчика
 * 		- Если нет, то [8,9]
 *
 * 8. Пробежать по всем li в списке, и найти самое большое значение атрибута
 * 		data-selHistory из всех.
 *
 * 9. Выделить тот li, по которому щелкнули. И одновременно:
 * 		- Проверить наличие пользовательского атрибута data-selHistory. Если нет - создать.
 * 		- Назначить значение для data-selHistory равное найденному в п.8 (не забыть
 * 			преобразовать его в число) + 1.
 *
 * 10. Развыделить это li, по которому щелкнули. И если у него есть пользовательский
 * 			атрибут data-selHistory, назначить ему значение ''.
 *
 *
 *		== Если SHIFT ==
 *
 * 11. 	Пробежать по всем li в списке, и найти самое большое значение атрибута
 *			data-selHistory из всех.
 *			>	Сохранть ссылку на этот элемент в переменную.
 *			> Сохранить номер этого li в ul в отдельную переменную
 *			> Сохранить номер элемента target в ul в отдельную переменную
 *
 * 12.	Определить, какой из этих элементов предшествует другому, используя
 * 			кроссбраузерную функцию compareDocumentPosition
 *  		- flag2 = 0: target предшествует эл-ту elemWithMaxSelHistory
 *    	- flag2 = 1: elemWithMaxSelHistory предшествует эл-ту target
 *  		- flag2 = 2: elemWithMaxSelHistory === target
 *
 * 13.	Определить, есть ли в списке выделенные элементы. В зависимости от этого найти
 * 			начальный и конечный индексы i элементов в списке ul, которые надо будет
 * 			выделить.
 *
 * 14.  Пробежаться по элементам li между найденными в п.13 индексами, и для
 * 			каждого делать [15,16,17]
 *
 * 15. 	Проверить, выделен ли элемент li из п.13:
 *			- Если да, то ничего не делать - и перейти к следующей итерации.
 *			- Если нет, то [15,16]
 *
 * 16. 	Выделить li из п.13:
 * 			- Проверить наличие пользовательского атрибута data-selHistory. Если нет - создать.
 * 			- Назначить значение для data-selHistory равное найденному в п.15 (не забыть
 * 				преобразовать его в число) + 1.
 * 			- Выделить li
 *
 * 17.  Сделать текст во всем дереве не выделяющимся при двойном клике.
 *
 *
 */


// Использующиеся переменные
var target,		// целевой элемент, в котором изначально произошло событие
		ul,				// ссылка на список ul
		allLI,		// все li в списке ul
		maxSelHistory,						// самое большое значение атрибута data-selHistory во всех li
		elemWithMaxSelHistory,		// ссылка на li с самым большим значением атрибута data-selHistory во всех li
		elemWithMaxSelHistoryNum,	// номер элемента elemWithMaxSelHistory в ul
		numOfTargetInUL;					// номер эл-та target (со ссылкой на li) в ul

//1. Назначить 1 обработчик события onclick для списка ul. Он будет ловить все клики,
//		совершаемые по всем своим потомкам, в Т.Ч. элементам этого списка li.
ul = document.getElementById('ul');
ul.addEventListener('click',function(event){



	//2. Кроссбраузерно получить ссылки на объект-событие event, а также
	//		на целевой объект target, в котором изначально произошло событие.

			// Кроссбраузерно получить событие
			event = event || window.event;

			// Кроссбраузерно получить target-элемент
			target = 	event && event.target ||
										event.srcElement;



	//3. Проверить, какая кнопка мыши была нажата. Если любая кроме левой, завершить
	//	 работу функции-обработчика.
	//	 Проверить, какие клавиши модификторы были нажаты:
	//	 - Если не были зажаты, или CTRL + SHIFT, то:			[4,5,6]
	//	 - Если CTRL, то: 																[7,8,9,10]
	//	 - Если SHIFT, то:																[11,12,13,14,15,16]


		// Проверить, какая кнопка мыши была нажата.

			// Если это IE<=8, то перевести значение его event.button в event.which
			// > И дальше иметь дело уже только с which
			if(!event.which && e.button) {
				if(event.button & 1) event.which = 1;		// левая кнопка
				if(event.button & 4) event.which = 2;		// средняя кнопка
				if(event.button & 2) event.which = 3;		// правая кнопка
			}

			// Если была нажата любая кнопка кроме левой, завершить работу функции-обработчика.
			if(event.which !== 1) return;



		// Проверить, какие клавиши модификторы были нажаты

			// Если не были зажаты, или CTRL + SHIFT, то:
			if( (event.ctrlKey && event.shiftKey) ||
					(!event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) )
			{

				way1();		// выполнить [4,5,6]

			}

			// Если был зажат только CTRL, то:
			if( event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {

				way2();		// выполнить [7,8,9,10]

			}

			// Если был зажат только SHIFT, то:
			if( event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {

				way3();		// выполнить [11,12,13,14,15,16]

			}


// way1
function way1() {


	//4. Проверить, выделен ли тот элемент li, по которому щелкнули.
	//		- Если да, то [5] и завершить работу обработчика
	//		- Если нет, то [5,6]
	var flag = false;
	if(target.style.backgroundColor) flag = true;



	//5. Развыделить все li в списке, и одновременно - для каждого из li - если у него
	//		есть пользовательский атрибут data-selHistory, назначить ему значение ''.

		// Развыделить все li в списке
		allLI = ul.getElementsByTagName('li');
		for(var i=allLI.length-1; i>=0; i--) {

			// Развыделить
			allLI[i].style.backgroundColor = '';

			// Если есть атрибут data-selHistory, установить его значение в ''
			if(allLI[i].getAttribute('data-selHistory')) {
				allLI[i].setAttribute('data-selHistory','');
			}

		}

		// Если элемент li, по которому щелкнули, был выделен, завершить
		// работу функции-обработчика:
		if(flag) return;




	//6. Выделить тот li, по которому щелкнули. И одновременно:
	//		- Проверить наличие пользовательского атрибута data-selHistory. Если нет - создать.
	//		- Назначить значение для data-selHistory равное '1'

		// Выделить
		target.style.backgroundColor = '#abc';

		// Проверить наличие пользовательского атрибута data-selHistory. Если нет - создать.
		if(!target.getAttribute('data-selHistory')) {

			// Назначить значение для data-selHistory равное '1'
			target.setAttribute('data-selHistory','1');

		}



}





// way2
function way2() {




	//7. Проверить, выделен ли тот элемент li, по которому щелкнули.
	//		- Если да, то [10]
	//		- Если нет, то [8,9]
	var flag = false;
	if(target.style.backgroundColor) flag = true;


	// Элемент li, по которому щелкнули, был выделен
	if(!flag) {


		//8. Пробежать по всем li в списке, и найти самое большое значение атрибута
		//		data-selHistory из всех.
    allLI = ul.getElementsByTagName('li');
		maxSelHistory = 1;
		for(var i=allLI.length-1; i>=0; i--) {
			if( parseInt(allLI[i].getAttribute('data-selHistory')) > maxSelHistory ) {
				maxSelHistory = parseInt(allLI[i].getAttribute('data-selHistory'));
			}
		}



		//9. Выделить тот li, по которому щелкнули. И одновременно:
		//		- Проверить наличие пользовательского атрибута data-selHistory. Если нет - создать.
		//		- Назначить значение для data-selHistory равное найденному в п.8 (не забыть
		//			преобразовать его в число) + 1.

			// Выделить
			target.style.backgroundColor = '#abc';

			// Проверить наличие пользовательского атрибута data-selHistory. Если нет - создать.
			if(!target.getAttribute('data-selHistory')) {

				// Назначить значение для data-selHistory равное maxSelHistory + 1
				target.setAttribute('data-selHistory',''+(maxSelHistory+1));

			}

	}



	// Элемент li, по которому щелкнули, выделен не был
	if(flag) {

		//10. Развыделить этот li, по которому щелкнули. И если у него есть пользовательский
		//			атрибут data-selHistory, назначить ему значение ''.

			// Развыделить
			target.style.backgroundColor = '';

			// Если есть атрибут data-selHistory, установить его значение в ''
			if(target.getAttribute('data-selHistory')) {
				target.setAttribute('data-selHistory','');
			}

	}
}






// way3
function way3() {



	//11. 	Пробежать по всем li в списке, и найти самое большое значение атрибута
	//			data-selHistory из всех.
	//			>	Сохранть ссылку на этот элемент в переменную.
	//			> Сохранить номер этого li в ul в отдельную переменную
	//			> Сохранить номер элемента target в ul в отдельную переменную
	allLI = ul.getElementsByTagName('li');
	maxSelHistory = 0;
	for(var i=allLI.length-1; i>=0; i--) {
		if( parseInt(allLI[i].getAttribute('data-selHistory')) > maxSelHistory ) {
			maxSelHistory = parseInt(allLI[i].getAttribute('data-selHistory'));

			// Сохранить ссылку на li с самым большим значением data-selHistory
			elemWithMaxSelHistory = allLI[i];

			// Сохранить номер этого li в ul в отдельную переменную
			elemWithMaxSelHistoryNum = i;
		}

		// Сохранить номер элемента target в ul в отдельную переменную
		if(allLI[i] === target) numOfTargetInUL = i;

	}



	//12.	Определить, какой из этих элементов предшествует другому, используя
	// 		кроссбраузерную функцию compareDocumentPosition:
	// 		- flag2 = 0: target предшествует эл-ту elemWithMaxSelHistory
	//    - flag2 = 1: elemWithMaxSelHistory предшествует эл-ту target
	// 		- flag2 = 2: elemWithMaxSelHistory === target
	var flag2;

		// Кроссбраузерный вариант compareDocumentPosition
		function compareDocumentPosition(a, b) {
			return a.compareDocumentPosition ?
				a.compareDocumentPosition(b) :
					(a != b && a.contains(b) && 16) +
						(a != b && b.contains(a) && 8) +
						(a.sourceIndex >= 0 && b.sourceIndex >= 0 ?
							(a.sourceIndex < b.sourceIndex && 4) +
								(a.sourceIndex > b.sourceIndex && 2) :
							1);
		}

		// Если target левый сосед для elemWithMaxSelHistory
		if(compareDocumentPosition(target,elemWithMaxSelHistory) === 4) {
			flag2 = 0;
		}

		// Если target правый сосед для elemWithMaxSelHistory
		if(compareDocumentPosition(target,elemWithMaxSelHistory) === 2) {
			flag2 = 1;
		}

		// Если target это и есть elemWithMaxSelHistory
		if(compareDocumentPosition(target,elemWithMaxSelHistory) === 0) {
			flag2 = 2;
		}

		// Если elemWithMaxSelHistory == undefined (нет выделенных элементов)
		if(elemWithMaxSelHistory == undefined) flag2 = 3;



	//13.	Определить, есть ли в списке выделенные элементы. В зависимости от этого найти
	//		начальный и конечный индексы i элементов в списке ul, которые надо будет
	//		выделить.
	var iStart, 	// начальный
			iEnd;			// конечный

		// Если выделенных элементов нет
		if(maxSelHistory === 0) {
			iStart = 0;
			iEnd = numOfTargetInUL;
		}

		// Если выделенные элементы есть
		if(maxSelHistory !== 0) {

			if(flag2 === 0) {
				iStart = numOfTargetInUL;
				iEnd = elemWithMaxSelHistoryNum;
			}

			if(flag2 === 1) {
				iStart = elemWithMaxSelHistoryNum;
				iEnd = numOfTargetInUL;
			}

			if(flag2 === 2) {
				iStart = numOfTargetInUL;
				iEnd = numOfTargetInUL;
			}

		}




	//13.  Пробежаться по элементам li между найденными в п.13 индексами, и для
	//			каждого делать [14,15,16]


	// Начать пробежку...
	var numOfItaration = 0;
	for(var i=iEnd; i>=iStart; i--) {



		//15. 	Проверить, выделен ли элемент li:
		//			- Если да, то ничего не делать - и перейти к следующей итерации.
		//			- Если нет, то [15,16]
		if(allLI[i].style.backgroundColor) continue;




		//16. 	Выделить li:
		//			- Проверить наличие пользовательского атрибута data-selHistory. Если нет - создать.
		//			- Назначить значение для data-selHistory равное
		// 				maxSelHistory + 1 + numOfItaration
		//			- Выделить li

			// Проверить наличие пользовательского атрибута data-selHistory. Если нет - создать.
			if(target.getAttribute('data-selHistory')) {
				target.setAttribute('data-selHistory',''+(maxSelHistory + 1 + numOfItaration));
			}
			numOfItaration += 1;

			allLI[i].style.backgroundColor = '#abc';

	}





}



});




//17. Сделать текст во всем дереве не выделяющимся при двойном клике.
	unselectableText = function(event) {
		// Кроссбраузерно получить объект-событие
		event = event || window.event

		// Кроссбраузерно отменить действия браузера "по умолчанию" в ответ
		// на возникновение события:
		event.preventDefault ? event.preventDefault() :
													(event.returnValue=false);
	};
	ul.onmousedown = unselectableText;
	ul.onselectstart = unselectableText;






