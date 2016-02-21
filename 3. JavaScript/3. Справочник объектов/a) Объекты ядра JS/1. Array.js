/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
JavaScript.
3. Справочник объектов


	1. Array			| глобальный объект-конструктор для создания и работы с массивами

		Конструктор Array

		Свои свойства:
			> prototype				| (стат.) св-во prototype функции-конструктора Array
			> constructor			| содержит ссылку на функцию-конструктор объекта prototype.
			> length					| индекс последнего элемента в массиве + 1

		Свои методы:
		> Методы для работы с массивами из ES3-ES4
			> isArray     | (стат.) проверить, является ли объект массивом
			> join				| конкатенирует все элементы массива в 1 строку
			> reverse			| возвращает обратный массив
			> sort				| сортирует массив в алфавитном порядке, может принимать сортирующую callback-функцию
			> concat			| конкатенирует массив с другим массивом, или с какими-то другими элементами
			> slice				| берет подмассив из элементов указанного массива
			> splice			| одновременно удаляет и вставляет элементы в массив
			> push				| вставляет в конец массива 1 или нескольких элементов
			> unshift			| вставляет в начало массива 1 или нескольких элементов.
			> pop					| удаляет последний элемент из массива, и возвращает его.
			> shift				| удаляет первый элемент из массива, и возвращает его.
		> Методы для работы с массивами из ECMAScript 5
			> forEach			| изменяет исходный массив, обрабатывая каждый его элемент callback-функцией
			> map					| возвращает массив из элементов, обработанных и возвращенных callback-функцией
			> filter			| возвращает новый массив из элементов, отсеянных callback-функцией
			> every				| вернет true, если для всех без исключения элементов будет выполнено условие, заданное в callback-функции, иначе false.
			> some				| вернет true, если хотя бы для 1 элемента будет выполнено условие, заданное в callback-функции, иначе false.
			> reduce			| возвращает результат цепного вызова callback-функции для всех элементов слева-направо
			> reduceRight	|	возвращает результат цепного вызова callback-функции для всех элементов справа-налево
			> indexOf			| слева-направо ищет заданный элемент в массиве, и если находит, возвращает индекс первого найденного элемента.
			> lastIndexOf	| справа-налево ищет заданный элемент в массиве, и если находит, возвращает индекс первого найденного элемента.







-------------------------------------------------- */

var array,newArray,string,func,element,result;




//Конструктор Array

	// Массив-литерал
	array = [1,2,3,4,5];

	// Создание массива сразу с элементами с помощью конструктора Array
	array = new Array(1,2,3,4,5);
	console.log(array);						// [1, 2, 3, 4, 5]

	// Создание массива указанной длины (особого смысла в этом нет):
	array = new Array(10);
	console.log(array.length);		// 10



//length
//> Индекс последнего элемента в массиве + 1

	//Получить значение length
	array = [0,1,2,3];
	console.log(array.length);			// 4

	//Добавить элемент в конец массива можно таким образом:
	array[array.length] = 'Elma';
	console.log(array);							// [0, 1, 2, 3, "Elma"]

	//Не стоит использовать length для того, чтобы попытаться узнать
	//количество элементов в массиве, поскольку индексация в массиве
	//не обязана быть сквозной, и могут быть пропущенные индексы:
	array = [0,1,2,3];
	array[20] = 'John';
	console.log(array.length);			// 21

	//Если вручную присвоить свойству length массива какое-то значение,
	//то все элементы с индексами большими, чем присвоенное значение,
	//будут удалены из массива:
	var array = [0,1,2,3,4,5,6,7,8,9];
	array.length = 3;
	console.log(array);									// [0, 1, 2]


//Array.isArray(obj)
//> (стат.) проверить, является ли объект массивом
//> obj - объект, который надо проверить

	// true
	console.log(Array.isArray([]));
	console.log(Array.isArray([1]));
	console.log(Array.isArray(new Array()));
	console.log(Array.isArray(Array.prototype));  // Array.prototype - сам является массивом);

	// false
	console.log(Array.isArray());
	console.log(Array.isArray({}));
	console.log(Array.isArray({__proto__: Array.prototype}));


//array.join(separator)
//> конкатенирует все элементы массива в 1 строку, и возвращает её
//> separator - разделитель между элементами, по умолчанию это запятая ','

	array = ['One','Two','Three'];
	string = array.join();
	console.log(string);								// 'One,Two,Three'

	string = array.join(' || ');
	console.log(string);                // 'One || Two || Three '


//array.reverse()
//> возвращает обратный массив
//> происходит изменение исходного массива

	array = ['One','Two','Three'];
	newArray = array.reverse();
	console.log(array);							// ["Three", "Two", "One"]
	console.log(newArray);					// ["Three", "Two", "One"]


//array.sort([compareFunction])
//> сортирует массив
//> compareFunction(a, b) - callback-функция, определяющая порядок сортировки;
//  если она опущена, то массив сортируется в алфавитном порядке
//  > Если compareFunction возвращает значение < 0, то a < b
//  > Если compareFunction возвращает значение > 0, то a > b
//  > Если compareFunction возвращает значение = 0, a и b не сортируются по отношению друг к другу
//> изменяет исходный массив

	// сортировка в алфавитном порядке; изменяет исходный массив;
	array = ['One','Two','Three'];
	newArray = array.sort();
	console.log(array);						// ["One", "Three", "Two"]
	console.log(newArray);				// ["One", "Three", "Two"]

	// сортировка чисел в алфавитном порядке
	array = [1,2,3,4,5,20,22,25,300,310];
	array.sort();
	console.log(array);										//[1, 2, 20, 22, 25, 3, 300, 310, 4, 5]

	// сортировка с помощью compareFunction
	func = function(a,b) {
			if(a>b) return 1;
			if(a<b) return -1;
			if(a===b) return 0;
	};
	array = [1,2,3,4,5,20,22,25,300,310];
	array.sort(func);
	console.log(array);										// [1, 2, 3, 4, 5, 20, 22, 25, 300, 310]

	array = ['One','Two','Three'];
	array.sort(func);
	console.log(array);										// ["One", "Three", "Two"]


//array.concat(value1, value2, ..., valueN)
//> конкатенирует массив с другим массивом, или с какими-то другими элементами
//> value - массивы или значения для конкатенации с array
//> не изменяет исходный массив
//> возвращает новый массив с прибавленными к нему values

	array = [1,2,3];
	newArray = array.concat([4,5],6,7,8,'John');
	console.log(array);														// [1, 2, 3]
	console.log(newArray);												// [1, 2, 3, 4, 5, 6, 7, 8, "John"]


//array.slice(begin[, end])
//> берет подмассив из элементов указанного массива
//> begin - индекс элемента, с которого начинается извлечение
//> end - индекс элемента (не включая его), которым закончить извлечение
//  > begin и end могут быть отрицательным. Тогда отсчет ведется с конца
// 		массива, справа-налево.
//> не изменяет исходный массив
//> возвращает новый массив, содержащий извлеченный подмассив

	array = [1,2,3,4,5];
	newArray = array.slice(2);		// [3, 4, 5]
	console.log(newArray);

	newArray = array.slice(1,3);	// [2, 3]
	console.log(newArray);

	newArray = array.slice(-2);		// [4, 5]
	console.log(newArray);

	newArray = array.slice(1,-1);
	console.log(newArray);				// [2, 3, 4]



//array.splice(index , howMany[, element1[, ...[, elementN]]])
//> одновременно удаляет и вставляет элементы в массив
//> index - индекс, с которого начать замену
//> howMany - целое число, сколько элементов начиная с index удалить.
//> element - элементы для вставки на место удаленных элементов
//> изменяет исходный массив
//> возвращает измененный массив

	// удаление без вставки
	array = [0,1,2,3,4,5];
	array.splice(2,2);
	console.log(array);					// [0, 1, 4, 5]

	// вставка без удаления
	array = [0,1,2,3,4,5];
	array.splice(2,0,'John','Nancy');		// [0, 1, "John", "Nancy", 2, 3, 4, 5]
	console.log(array);

	// одновременное удаление и вставка
	array = [0,1,2,3,4,5];
	array.splice(1,4,'hello','world');
	console.log(array);									// [0, "hello", "world", 5]


//array.push(element1, ..., elementN)
//> вставляет в конец массива 1 или нескольких элементов
//> изменяет исходный массив
//> возвращает length измененного массива

	array = [1,2,3];
	array.push(4,'john');
	console.log(array);		// [1, 2, 3, 4, "john"]


//arrayName.unshift(element1, ..., elementN)
//> вставляет в начало массива 1 или нескольких элементов.
//> изменяет исходный массив
//> возвращает length измененного массива

	array = [1,2,3];
	array.unshift('John','Javascript');
	console.log(array);                  // ["John", "Javascript", 1, 2, 3]


//array.pop()
//> удаляет последний элемент из массива, и возвращает его.

	// вызов pop с пустым массивом
	element = [].pop();
	console.log(element);			// undefined

	// вызов pop с не пустым массивом
	array = ['One','Two','Three'];
	element = array.pop();
	console.log(element);						// 'Three'
	console.log(array);							// ["One", "Two"]


//array.shift()
//> удаляет первый элемент из массива, и возвращает его.

	// вызов shift с пустым массивом
	element = [].shift();
	console.log(element);			// undefined

	// вызов shift с не пустым массивом
	array = ['One','Two','Three'];
	element = array.shift();
	console.log(element);						// 'One '
	console.log(array);							// ["Two", "Three"]


//array.forEach(callback(element, index, array) [,thisArg] )
//> изменяет исходный массив, обрабатывая каждый его элемент callback-функцией
//> callback - функция, которая выполняется для каждого элемента
//> thisArg - (не обяз.) объект для использования в качестве this во время
// 						выполнения callback
//> value - знечение элемента
//> index - индекс элемента
//> array - ссылка на массив
//> изменяет массив, для которого вызван

	array = [1,2,3,4,5];
	newArray = array.forEach(
			function(element,index,array) { array[index] = element*2; });
	console.log(array);																								// [2, 4, 6, 8, 10]
	console.log(newArray);																						// undefined

	array = ['One','Two','Three'];
	array.forEach(function(element, index, array) {
		array[index] = element.toUpperCase();
	});
	console.log(array);															// ["ONE", "TWO", "THREE"]


//array.map(callback(element, index, array) [,thisArg] )
//> возвращает новый массив, каждый элемент которого формируется из
//	значений, которые возвращаются из функции, которую мы передаем
//	в качестве первого аргумента
//> вызывается только для тех нидексов массива, которые имеют значение.
//> thisArg - (не обяз.) объект для использования в качестве this во время
// 						выполнения callback
//> value - знечение элемента
//> index - индекс элемента
//> array - ссылка на массив
//> НЕ изменяет массив, для которого вызван

	array = ['One','Two','Three'];
	newArray = array.map(function(element,index,array) {
		return element.toUpperCase();
	});
	console.log(array);																		// ["One", "Two", "Three"]
	console.log(newArray);																// ["ONE", "TWO", "THREE"]


//array.filter(callback(element, index, array) [,thisArg] )
//> возвращает новый массив, который формируется следующим образом: каждый
//  элемент массива array пропускается через callback-функцию, и если она
//  возвращает true, то этот элемент попадает в новый массив, а если false - то нет.
//>
//> thisArg - (не обяз.) объект для использования в качестве this во время
// 						выполнения callback
//> value - знечение элемента
//> index - индекс элемента
//> array - ссылка на массив
//> НЕ изменяет массив, для которого вызван

	// Отсеить все элементы, в которых есть символ 'o' независимо от регистра
	array = ['One','Two','Three','Four','Five','Six'];
	newArray = array.filter(function(element,index,array){
		return element.toLowerCase().indexOf('o') === -1;
	});
	console.log(array);																	// ["One", "Two", "Three", "Four", "Five", "Six"]
	console.log(newArray);															// ["Three", "Five", "Six"]


//array.every(callback(element, index, array) [,thisArg] )
//> вернет true, если для всех без исключения элементов будет выполнено
// 	условие, заданное в callback-функции, иначе false.
//> возвращает значение типа boolean - true/false
//> НЕ изменяет исходный массив

	array = [1,2,3,4];
	result = array.every(function(element,index,array){
		return element < 5;
	});
	console.log(array);																	// [1, 2, 3, 4]
	console.log(result);																// true

	result = array.every(function(element,index,array){
		return element < 3;
	});
	console.log(result);																// false


//array.some(callback(element, index, array) [,thisArg] )
//> вернет true, если хотя бы для 1 элемента будет выполнено условие,
// 	заданное в callback-функции, иначе false.
//> возвращает значение типа boolean - true/false
//> НЕ изменяет исходный массив

	array = [1,2,3,4];
	result = array.some(function(element,index,array){
		return element < 2;
	});
	console.log(array);																	// [1, 2, 3, 4]
	console.log(result);																// true

	result = array.some(function(element,index,array){
		return element < 0;
	});
	console.log(result);																// false


//array.reduce(callback(a, b, index, array) [,initialValue] )
//> возвращает результат цепного вызова callback-функции для всех элементов слева-направо
//> a            | значение, возвращенное на прошлой итерации callback-функции
//> b            | текущий элемент
//> index        | индекс текущего элемента
//> array        | ссылка на массив
//> initialValue | станет 1-м аргументом callback функции при первом ее вызове, вместо a

	// сложить все элементы массива
	var numbers = [1,2,3,4,5,6];
	var reduced = numbers.reduce(function(a,b,index,array){
		return a + b;
	});
	console.log(reduced);   																// 21

	// перемножить только те элементы-числа в массиве, которые кратны 3
	var reduced = numbers.reduce(function(a,b,index,array){
		return a * (b % 3 === 0 ? b : 1);
	});
	console.log(reduced);   																// 18


//array.reduce(callback(a, b, index, array) [,initialValue] )
//> тоже самое, что reduce, только справа-налево
//> возвращает результат цепного вызова callback-функции для всех элементов справа-налево
//> a            | значение, возвращенное на прошлой итерации callback-функции
//> b            | текущий элемент
//> index        | индекс текущего элемента
//> array        | ссылка на массив
//> initialValue | станет 1-м аргументом callback функции при первом ее вызове, вместо a

	// иногда порядок имеет значение, например, вычтем по цепочки все
	// элементы массива сначала с помощью reduce, затем с помощью reduceRight:
	var reduced = numbers.reduce(function(a,b,index,array){
		return a - b;
	});
	console.log(reduced);   																// -19

	var reduced = numbers.reduceRight(function(a,b,index,array){
		return a - b;
	});
	console.log(reduced);   																     // -9


//array.indexOf(searchElement[, fromIndex])
//> слева-направо ищет заданный элемент в массиве, и если находит,
// 	возвращает индекс первого найденного элемента.
//> searchElement - значение элемента, которое надо искать.
//> fromIndex - номер индекса, с которого начинать поиски (0 по умолчанию)
//> Если метод ничего не находит, он возвращает -1.

	var numbers = [1,2,3,4,5,6,5,4,3,2,1];
	console.log(numbers.indexOf(2));			// 1
	console.log(numbers.indexOf(5));			// 4
	console.log(numbers.indexOf(10));			// -1


//array.lastIndexOf(searchElement[, fromIndex])
//> справа-налево ищет заданный элемент в массиве, и если находит,
// 	возвращает индекс первого найденного элемента.
//> searchElement - значение элемента, которое надо искать.
//> fromIndex - номер индекса, с которого начинать поиски (0 по умолчанию)
//> Если метод ничего не находит, он возвращает -1.

	var numbers = [1,2,3,4,5,6,5,4,3,2,1];
	console.log(numbers.lastIndexOf(2));			// 9
	console.log(numbers.lastIndexOf(5));			// 6
	console.log(numbers.lastIndexOf(10));			// -1







/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Описание объекта Array на developer.mozilla.org:
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray






*****************************************************
Оглавление:

	> Изменяют ли исходный массив методы по работе с массивами?










*****************************************************


> Изменяют ли исходный массив методы по работе с массивами?
	> Некоторые изменяют, а некоторые нет.
	> В некоторых методах, использующих callback-функции, изменится ли
		исходный массив после применения к нему такого метода, или нет,
		зависит от содержимого callback-функции.










-------------------------------------------------- */

























