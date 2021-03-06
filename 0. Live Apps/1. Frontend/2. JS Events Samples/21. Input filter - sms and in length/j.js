/**
 * Задача:
 *
 * > Сделать поле input для ввода СМС.
 *
 * > Сделать ограничение на длину ввода - 25 символов.
 *
 * > Текущее кол-во введенных символов должно отображаться на экране.
 *   И кроме того:
 *   - Подсвечиваться красным, в диапазоне от 20 до 25 символов.
 *
 * > Учесть возможность ввода и удалени символов не с клавиатуры - т.е.
 *   с использованием других средств. Например, с мобильных устройств,
 *   или с помощью команд "вставить" или "вырезать".
 *
 *
 *
 * Обсуждение решения:
 *
 *
 * > Какие есть подходы к задаче фильтрации:
 *
 * 	 Подход 1 (более сложный, тяжелый, но лучше выглядит)
 * 	 > До действий браузера по умолчанию - с помощью события keydown. В этом
 * 	 	 случае понадобится отменить действия браузера по умолчанию, и самому
 * 	 	 обеспечивать попадание вводимых символов в значение текстового поля.
 * 	 	 > Минусы этого подхода:
 * 	 	 	 - Очень трудоёмок. Поскольку отменив действия браузера "по умолчанию",
 * 	 	 	 	 придется эмулировать ряд сложных функций, иначе решение будет не
 * 	 	 	 	 полноценным.
 * 	 	 	 	 Например, когда пользователь выделяет мышкой все содержимое
 * 	 	 	 	 input и вводит новый символ - старое должно удалиться, а новый символ
 * 	 	 	 	 появиться. Если удалить стандартное поведение браузера, то это приедтся
 * 	 	 	 	 эмулировать самостоятельно.
 * 	 	 	 - Кушает больше памяти, чем другой подход.
 * 	 	 	 - Позволяет обрабатывать ТОЛЬКО ввод с клавиатуры. А ввод другими
 * 	 	 	 	 способами - нет.
 * 		 > Плюсы этого подхода:
 * 		 	 + Фильтрует ввод еще до того, как вводимые данные попадают на экран.
 * 		 	   И, в отличие от другого подхода, пользователь не видит, как сначала
 * 		 	   появляются на экране какие-то данные, а затем удаляются фильтром.
 * 		 	 + Иногда без него не обойтись, как в задаче №19. Этот подход можно
 * 		 	   реализовывать в учеченном виде, без эмуляции ф-ий браузера по умолчанию,
 * 		 	   когда нужно просто отфильтровать вводимые символы по какому-то признаку.
 * 		 	   Например, пропускать только цифры. А если не цифра - отменяем действия
 * 		 	   бравзера по умолчанию, и эти символы не появляются в текстовом поле.
 *
 * 	 Подход 2 (легкий, но похуже смотрится, чем подход 1)
 * 	 > После действий браузера по умолчанию, с помощью событий input и paste.
 * 	   А если потребуется отслеживать и удаление символов (не в этой задаче),
 * 	   то еще и keyup и cut.
 * 	   > Минусы этого подхода:
 * 	   	 - Этот подход НЕ позволяет никак отменить действия браузера по умолчанию
 * 	   	   по размещению вводимых символов.
 * 	   	 - Для обработчика всех этих событий приходится с помощью пользовательской
 * 	   	   функции setImmediate пропускать в стеке задач выполнение действий
 * 	   	   браузера по умолчанию вперед, а выполнение обработчика наоборот -
 * 	   	   ставить после первого.
 * 	   	   Иначе - невозможно будет получить доступ к новому значению текстового поля,
 * 	   	   а значит и фильтровать его.
 * 	   	 - Смотрится хуже, чем подход 1
 * 	   > Плюсы этого подхода:
 * 	   	 + Проще в реализации, чем с подход 1.
 * 	   	 + Позволяет обрабатывать ввод НЕ только с клавиатуры, но и вообще
 * 	   	   любыми другими методами.
 *
 * > В этой задаче я буду использовать подход №2.
 *
 *
 *
 *
 * Архитектура решения:
 *
 * 1. Получить ссылки на следующие объекты, и сохранить эти ссылки в переменные:
 *    - На элемент input с id='inp'.
 *    - На элемент span с id='now'.
 *
 * 2. Создать функцию для фильтрации результата и изменения значения input.
 * 		Она должна привести значение input.value в соответствие требованиям.
 * 	  > input.value должен быть:
 * 	 		- если его длина больше 25 символов, обрезать справа и сделать 25
 * 	 	> Кроме того, эта функция отвечает за цвет цифры, отражающей текущее
 * 	 		кол-во введенных символов:
 * 	 	  - если >= 20, то красный
 * 	 	  - если < 20, то зеленый
 *
 * 3. Назначить функцию из п.2 элементу value в качестве функции-обработчика
 * 		следующих событий: input, paste.
 * 	  - Причем, с помощью пользовательской функции setImmediate сделать так,
 * 	  	чтобы задача выполнения этого обработчика в стеке задач потока
 * 	  	пропустила вперед себя действия браузера "по умолчанию" для всех
 * 	  	вышеуказанных событий.
 *
 *
 *
 */


// Задействованные переменные
var inputInp,		// input с id='inp'
		spanNow,		// span с id='now'
		filterFunc;	// функция для фильтрации для п.2



//1. Получить ссылки на следующие объекты, и сохранить эти ссылки в переменные:
//   - На элемент input с id='inp'.
//   - На элемент span с id='now'.
inputInp = document.getElementById('inp');
spanNow = document.getElementById('now');



//2. Создать функцию для фильтрации результата и изменения значения input.
//		Она должна привести значение input.value в соответствие требованиям.
//	  > input.value должен быть:
//	 		- если его длина больше 25 символов, обрезать справа и сделать 25
//	 	> Кроме того, эта функция отвечает за цвет цифры, отражающей текущее
//	 		кол-во введенных символов:
//	 	  - если >= 20, то красный
//	 	  - если < 20, то зеленый
//			- выводить текущую длину ввода в span с id='now'
filterFunc = function() {



	// Если текущая длина ввода больше 25 сиволов, обрезать справа и сделать 25
	if(inputInp.value.length > 25) {

		// Обрезать справа, сделав 25
		inputInp.value = inputInp.value.slice(0,25);

	}


	// Если текущая длина >= 20, сделать текст в spanNow красным
	if(inputInp.value.length >= 20) spanNow.style.color = '#d55';


	// Если текущая длина < 20, сделать текст в spanNow зеленым
	if(inputInp.value.length < 20) spanNow.style.color = '#AFD257';


	// Выводить текущую длину ввода в span с id='now'
	spanNow.innerHTML = inputInp.value.length;


};



//3. Назначить функцию из п.2 элементу value в качестве функции-обработчика
//		следующих событий: input, paste.
//	  - Причем, с помощью пользовательской функции setImmediate сделать так,
//	  	чтобы задача выполнения этого обработчика в стеке задач потока
//	  	пропустила вперед себя действия браузера "по умолчанию" для всех
//	  	вышеуказанных событий.
inputInp.oninput =
inputInp.onkeyup =
inputInp.onpaste =
inputInp.oncut = function(event) {

	setImmediate(filterFunc);

};












// Вспомогательные функции






	//setImmediate				| (пользовательская функция) позволяет поставить выполнение
	//											func в очередь на ближайшее время после текущего кода, и без задержек
	// > Это эмуляция ф-ии setImmediate
	// > Добавляется как метод window (а если дело происходит в IE>=10, где такая
	//   функция уже есть, то не добавляется)
	// > Здесь используется прием cross-domain-messaging:
	//		> Позволяет скрипту из одного документа передавать текстовые сообщения
	//			скрипту в другом документе, не взирая на ПОП.
	//		> Отправить сообщение можно методом Window.postMessage(). Он производит
	//			асинхронную отправку сообщения.
	//		> Получить сообщение можно обработчиком события onmessage.
	// > Работает во всех браузерах, кроме IE<=7


		// Проверить cледующее:
		// > Если это IE>=10, и ф-ия setImmediate есть, то ничего не добавлять.
		// > В ином случае, добавить объекту window метод setImmediate:
		if (!window.setImmediate) window.setImmediate = (function() {
			var head = { }, tail = head; // очередь вызовов, 1-связный список

			var ID = Math.random(); // уникальный идентификатор

			// Подготовка функции-перехватчика события message из другого документа
			function onmessage(e) {
				if(e.data != ID) return; // не наше сообщение
				head = head.next;
				var func = head.func;
				delete head.func;
				func();
			}

			// Кросдоменное назначение обработчика событий onmessage
			if(window.addEventListener) { // IE9+, другие браузеры
				window.addEventListener('message', onmessage, false);
			} else { // IE8
				window.attachEvent( 'onmessage', onmessage );
			}

			// > Если это не IE<=7, то поставить func в конец текущей очереди
			// > Если это IE<=7, то вызвать для func обычный setTimeout.
			return window.postMessage ? function(func) {
				tail = tail.next = { func: func };
				window.postMessage(ID, "*");
			} :
			function(func) { // IE<8
				setTimeout(func, 0);
			};
		}());



