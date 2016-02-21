/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
JavaScript.
3. Справочник объектов


		4. Function		| глобальный объект для создания и работы с функциями

			Конструктор Function

			Свои свойства:
				> prototype			| (стат.) св-во prototype функции-конструктора Function
				> length				| (стат.) всегда 1
				> name					| (стат.) имя конструктора, всегда Function
				> arguments			| массив переданных в функцию аргументов
				> length				| самый большой индекс массива аргументов + 1
				> constructor		| содержит ссылку на функцию-конструктор объекта prototype.

			Свои методы:
				> call					| вызывает функцию в контексте указанного объекта, аргументы можно передать списком
				> apply					| вызывает функцию в контексте указанного объекта, аргументы можно передать массивом
				> bind					| связывает 2 функции, так что при вызове 1-й вызывается и 2-я (исходную ф-ию не менят, возвращает новую)
				>	isGenerator		| (не поддерживается) позволяет выяснить, является ли эта функция функцией-генератором







-------------------------------------------------- */

var func,func2,newFunc,object,object2;




//Конструктор Function

	func = new Function('a', 'b', 'return a+b;');
	console.log(func(5,5));		// 10


	func = function(a,b) {
		return a+b;
	};
	console.log(func(5,5));   // 10


	function func(a,b) {
		return a+b;
	}
	console.log(func(5,5));   // 10


	console.log((function(){ return 5+5; })());		// 10



//name
//> (стат.) имя конструктора, всегда Function

	console.log(Function.name);		// 'Function'


//arguments
//> массив переданных в функцию аргументов

//length
//> самый большой индекс массива аргументов + 1

	func = function(a,b,c,d) {
		console.log(arguments);					// [1, 2, 3, 4]
		console.log(func.length);				// 4
	};
	func(1,2,3,4);


//fun.call(thisArg[, arg1[, arg2[, ...]]])
//> вызывает функцию в контексте указанного объекта, аргументы можно
//  передать в виде списка через запятую
//> thisArg - ссылка на объект, на который будет указывать ключевое
//  слово this внутри вызываемой функции.
//> arg - аргументы в виде списка через запятую

	// простой поимео использования call
	func = function(location) {
		console.log('Меня зовут '+this.name+', мне '+this.age+'лет, я '+
				this.gender+', живу в '+location);
	};

	object = {
		name: 'John',
		age: 18,
		gender: 'male'
	};

	object2 = {
		name: 'Mary',
		age: 22,
		gender: 'female'
	};

	func.call(object, 'Париже');				// 'Меня зовут John, мне 18лет, я male, живу в Париже'
	func.call(object2, 'Амстердаме');		// 'Меня зовут Mary, мне 22лет, я female, живу в Амстердаме'

	// использование call для выполнения анонимной функции
	// это тоже самое, что в верхнем примере, только читается хуже
	(function(location){
			console.log('Меня зовут '+this.name+', мне '+this.age+'лет, я '+
			this.gender+', живу в '+location);
	}).call(object, 'Париже');						// 'Меня зовут John, мне 18лет, я male, живу в Париже'

	(function(location){
			console.log('Меня зовут '+this.name+', мне '+this.age+'лет, я '+
			this.gender+', живу в '+location);
	}).call(object, 'Амстердаме');				// 'Меня зовут Mary, мне 22лет, я female, живу в Амстердаме'



//fun.apply(thisArg[, argsArray])
//> вызывает функцию в контексте указанного объекта, аргументы можно
//  передать в виде списка через запятую
//> thisArg - ссылка на объект, на который будет указывать ключевое
//  слово this внутри вызываемой функции.
//> arg - аргументы в виде массива


	// простой поимео использования apply
	func = function(arrayOfArgs) {
		console.log('Меня зовут '+this.name+', мне '+this.age+
				', живу в '+arrayOfArgs[0]+', люблю '+arrayOfArgs[1]);
	};

	object = {
		name: 'John',
		age: 18
	};

	object2 = {
		name: 'Mary',
		age: 22
	};

	func.call(object, ['Париже','спорт']);									// 'Меня зовут John, мне 18, живу в Париже, люблю спорт'
	func.call(object2, ['Амстердаме','булочки с маком']);		// 'Меня зовут Mary, мне 22, живу в Амстердаме, люблю булочки с маком '


//fun.bind(thisArg[, arg1[, arg2[, ...]]])
//> Создает новую функцию (но не вызывает её), контекст вызова которой
//  заранее связывает с указанным в thisArg объектом.
//> Не изменяет старую функцию.
//> thisArg - ссылка на объект, на который будет указывать ключевое
//  слово this внутри вызываемой функции.
//> arg - значения аргументов, при вызове переназначить их уже нельзя.

	func = function(age) {
		console.log('Меня зовут '+this.name+', мне '+age+' лет.');
	};

	object = {
		name: 'Peter Griffin'
	};

	newFunc = func.bind(object,35);
	newFunc();		// 'Меня зовут Peter Griffin, мне 35 лет.'
	newFunc(45);	// 'Меня зовут Peter Griffin, мне 35 лет.' (параметры переназначить нельзя)


//fun.isGenerator()
//> позволяет выяснить, является ли эта функция функцией-генератором
//> ( генераторы не поддерживаются текущей версией JS, поэтому код
//   ниже не работает )

	/*
	func = function() {};

	func2 = function() {
		yield 42;
	};

	console.log(func.isGenerator());
	console.log(func2.isGenerator());
	*/



/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Описание объекта на developer.mozilla.org:
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction






*****************************************************
Оглавление:

	>










*****************************************************


>








-------------------------------------------------- */

























