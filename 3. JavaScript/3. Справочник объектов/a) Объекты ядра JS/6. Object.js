/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
JavaScript.
3. Справочник объектов


		6. Object			| объект-обертка

			Конструктор Object

			Свои свойства:
				> prototype				| (стат.) св-во prototype функции-конструктора Object
				> constructor			| содержит ссылку на функцию-конструктор объекта prototype.

			Свои методы:
				> create										|	(стат.) создает новый объект, и записывает в его __proto__ ссылку на указанный объект
				> getPrototypeOf						|	(стат.) возвращает прототип указанного объекта
				> isPrototypeOf							| содержится ли объект А в цепочке прототипов объекта Б
				> getOwnPropertyDescriptor	|	(стат.) получить объект-дескриптор указанного свойства
				> defineProperty						|	(стат.) определить значения атрибутов свойства объекта
				> defineProperties					|	(стат.) определить значения атрибутов свойств объекта
				> keys											|	(стат.) получить массив имен собственных (только enumerable) свойств объекта
				> propertyIsEnumerable			|	проверить значение атрибута enumerable свойства
				> getOwnPropertyNames				|	(стат.) получить массив имен собственных (enumerable + non-enumerable) свойств объекта
				> preventExtensions					|	(стат.) запретить расширение объекта
				> isExtensible							|	(стат.) проверить, запрещено ли расширение объекта
				> seal											|	(стат.) preventExtensions + запретить удалять св-ва и менять атрибуты (ставит configurable всех св-в = false)
				> isSealed									|	(стат.) проверить, был ли применен к объекту метод seal
				> freeze										|	(стат.) seal + нельзя менять значения св-в (делает атрибут writable всех св-в = false)
				> isFrozen									|	(стат.)  проверить, был ли применен к объекту метод freeze
				> hasOwnProperty						| позволяет проверить, является ли указанное св-во родным у указанного объекта
				> toString									| возвращает строковое представление объекта
				> valueOf										| возвращает числовое предствалениео объекта







-------------------------------------------------- */

var object,descriptor,prototype,car,carObject;




//Object.create(proto [, propertiesObject ])
//> (стат.) создает и возвращает новый объект, у которого __proto__ = proto
//> proto - объект, который буде записан в prototype нового объекта.
//> propertiesObject - объект, определяющий атрибуты для всех свойств нового объекта.


	// простая реализация классического наследования через Object.create

	var Shape = {
		constructor: function(xPosition, yPosition) {
			this.xPosition = xPosition;
			this.yPosition = yPosition;
			return this;
		}
	};

	var Rectangle = Object.create(Shape);

	Rectangle.constructor = function(xPosition, yPosition, type) {
		Shape.constructor.apply(this,arguments);
		this.type = type;
		return this;
	};

	var rectangle1 = Object.create(Rectangle).constructor(5,10,'rectangle');
	console.log(rectangle1.type);				// 'rectangle'
	console.log(rectangle1.xPosition);	// 5
	console.log(rectangle1.yPosition);	// 10


	// реализация классического наследования через Object.create

		// объект-родитель, который будет помещен в __proto__ своего наследника
		var Person = {
			constructor: function(name,age,gender) {
				this.name = name;
				this.age = age;
				this.gender = gender;
				return this;
			},
			greet: function() {
				console.log('Hi, my name is '+this.name);
			}
		};

		// создать объект-наследник, поместить в его св-во __proto__ объект Person
		var WebDeveloper = Object.create(Person);

		// изменить конструктор объекта WebDeveloper, добавить новое св-во skills
		WebDeveloper.constructor = function(name,age,gender,skills) {
			// чтобы не переписывать конструктор из Person, просто выполнить его
			// в контексте этого объекта с переданными аргументами
			Person.constructor.apply(this, arguments);

			this.skills = skills || [];
			return this;
		};

		// добавить новый метод объекту WebDeveloper
		WebDeveloper.develop = function() {
			console.log('Working...');
		};

		// создать новый объект
		var developer = Object.create(WebDeveloper).constructor(
				'Jack',21,'male',['html', 'css', 'js', 'php', 'mysql']);

		// протестировать унаследованны от Person методы
		console.log(developer.name);			// 'Jack'
		developer.greet();								// 'Hi, my name is Jack'

		// протестировать новые методы
		console.log(developer.skills);		// ["html", "css", "js", "php", "mysql"]
		developer.develop();							// 'Working...'


//Object.getPrototypeOf(object)
//> (стат.) возвращает прототип указанного объекта

	prototype = Object.getPrototypeOf(developer);
	console.log(prototype);		// теперь здесь лежит объект WebDeveloper (он взят из __proto__ объекта developer)


//prototype.isPrototypeOf(object)
//> позволяет проверить, содержится ли объект prototype в цепочке прототипов
//  указанного объекта object
//> отличается от оператора instanceof следующим:
//	isPrototypeOf differs from instanceof operator. In the expression
//  object instanceof AFunction, the object prototype chain is checked
//  against AFunction.prototype, not against AFunction itself

	console.log(prototype.isPrototypeOf(developer));     // true
	console.log(prototype.isPrototypeOf(WebDeveloper));  // false (WebDeveloper не может быть прототипом самого себя)
	console.log(Person.isPrototypeOf(WebDeveloper));		 // true


//Object.getOwnPropertyDescriptor(obj, prop)
//> (стат.) получить объект-дескриптор указанного свойства
//> obj - объект, в котором искать свойство
//> prop - имя свойства, чей объект-дескриптор нужно получить
//> возвращает объект-дескриптор с атрибутами этого свойства

	// получить дескриптор обычного свойства
	object = {
		name: 'John'
	};
	descriptor = Object.getOwnPropertyDescriptor(object,'name');
	console.log(descriptor);    // Object {value: "John",
															// 				 writable: true,
															//         enumerable: true,
															//         configurable: true}

	// получить дескриптор геттера или сеттера
	object = {
		_name: 'John',
		get name(){ return this.name; },
		set name(value){ this.name = value; }
	};
	descriptor = Object.getOwnPropertyDescriptor(object,'name');
	console.log(descriptor);		// Object {get: function,
															//         set: function,
															// 				 enumerable: true,
															// 				 configurable: true}


//Object.defineProperty(obj, prop, descriptor)
//> (стат.) определить значения атрибутов свойства объекта
//> obj - объект, в котором искать свойство
//> prop - имя свойства, чей объект-дескриптор нужно получить
//> descriptor - объект-дескриптор со свойствами-атрибутами с новыми значениями

	object = {
		name: 'John',
		gender: 'male'
	};

	Object.defineProperty(object,'gender',{
			value: 'male',
			writable: false,						// запретить изменять value
			enumerable: false,					// не появляться при перечислении в for .. in или keys
			configurable: false					// запретить менять атрибуты
	});

	object.gender = 'female';
	console.log(object.gender);		// 'male' - не изменилось


//defineProperties
//> (стат.) определить значения атрибутов свойств объекта
//> Тоже самое, что defineProperty, только можно одновременно изменить
//  дескрипторы нескольких свойств.

	// пример, похожий на пример для defineProperty
	object = {
		name: 'John',
		gender: 'male'
	};

	Object.defineProperties(object,{
		'gender': {
			value: 'male',
			writable: false,
			enumerable: false,
			configurable: false
		},
		'name': {
			value: 'John',
			writable: false,
			enumerable: false,
			configurable: false
		}
	});

	object.gender = 'female';
	object.name = 'Dana';
	console.log(object.gender);		// 'male' - не изменилось
	console.log(object.name);			// 'John' - не изменилось

	// с помощью defineProperties можно и определять свойства
	var myObject = {};
	Object.defineProperties(myObject, {
		x: {
			value: 10,
			writable: false
		},
		y: {
			value: 20,
			writable: false
		},
		r: {
			get: function() {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			}
		}
	});

	console.log(myObject.r);		 // 22.360679774997898
	myObject.x = 50;
	console.log(myObject.x);		 // 10 (не изменится, потому что writable = false)
	console.log(myObject.r);		 // 22.360679774997898


//Object.keys(obj)
//> (стат.) получить массив имен собственных (только enumerable) свойств объекта
//> obj - объект, чьи собственные enumerable свойства должные вернутсья в массиве
//> Свойства в массиве располагаются в том же порядке, в котором они
//  перебираются с помощью цикла for ... in

//obj.propertyIsEnumerable(prop)
//> проверить значение атрибута enumerable свойства

	object = {
		name: 'John',
		age: 22,
		gender: 'male',
		location: 'Ukraine'
	};

	console.log(object.propertyIsEnumerable('name'));		// true
	console.log(object.propertyIsEnumerable('gender')); // true

	// сделать св-ва gender и name non-enumerable:
	Object.defineProperties(object,{
		'gender': {
			value: 'male',
			writable: false,
			enumerable: false,
			configurable: false
		},
		'name': {
			value: 'John',
			writable: false,
			enumerable: false,
			configurable: false
		}
	});

	console.log(object.propertyIsEnumerable('name'));		// false
	console.log(object.propertyIsEnumerable('gender')); // false

	// перечислить все свойства объекта с помощью for ... in
	for(key in object) {
		console.log(key);			// 'key', 'location'
	}

	// перечислить все свойства объекта с помощью keys
	console.log(Object.keys(object));		// ["age", "location"]


//getOwnPropertyNames
//> (стат.) получить массив имен собственных (enumerable + non-enumerable)
// 	свойств объекта
//> тоже, что keys, только выводит также ключи non-enumerable свойств

	console.log(Object.getOwnPropertyNames(object));	// ["gender", "age", "location", "name"]



//Object.preventExtensions(obj)
//> (стат.) запретить расширение объекта - т.е. добавление в него новых св-в

//Object.isExtensible(obj)
//> (стат.) проверить, запрещено ли расширение объекта
	object = {};
	Object.preventExtensions(object);
	console.log(Object.isExtensible(object));     // false

	object.x = 10;
	console.log(object.x);	// undefined (не добавился, расширение объекта запрещено)


//Object.seal(obj)
//> (стат.) preventExtensions + запретить удалять св-ва и менять атрибуты (ставит configurable всех св-в = false)
//> Т.О. после применения этого метода, нельзя будет:
//  - добавлять в объект новые свойства
//  - удалять из объекта свойства
//  - изменять значения атрибутов свойств

//Object.isSealed(obj)
//> (стат.) проверить, был ли применен к объекту метод seal

	object = {};
	Object.seal(object);
	console.log(Object.isSealed(object));   // true


//Object.freeze(obj)
//(стат.) seal + нельзя менять значения св-в (делает атрибут writable всех св-в = false)

//Object.isFrozen(obj)
//(стат.)  проверить, был ли применен к объекту метод freeze

	object = {
		name: 'John',
		age: 18
	};
	Object.freeze(object);

	delete object.age;
	console.log(object.age); 			  // 18 (не удалилось)

	object.location = 'Ukraine';
	console.log(object.location);		// undefined (не добавилось)

	object.name = 'Peter';
	console.log(object.name);				// 'John' (не изменилось)


//obj.hasOwnProperty(prop)
//> позволяет проверить, является ли указанное св-во родным у
// 	указанного объекта

	object = {
		name: 'John'
	};
	console.log(object.hasOwnProperty('name'));						// true
	console.log(object.hasOwnProperty('constructor'));		// false


//object.toString()
//> возвращает строковое представление объекта
//> у кажодго объекта есть этот метод, он вызывается, когда требуется
//  преобразовать объект в строку
//> у любого объекта можно определить метод toString, который "перекроет"
//  родной метод toString объекта Object.

//object.valueOf()
//> возвращает числовое предствалениео объекта
//> у кажодго объекта есть этот метод, он вызывается, когда требуется
//  преобразовать объект в число
//> у любого объекта можно определить метод valueOf, который "перекроет"
//  родной метод valueOf объекта Object.

	// что возвращает стандартный toString
	object = {};
	console.log(object.toString());		// [object Object]

	// перезаписать стандартный toString
	Car = function(brand,model,maxSpeed) {
		this.brand = brand;
		this.model = model;
		this.maxSpeed = maxSpeed;
	};

	// перезаписать стандартный toString в объекте prototype функции-конструктора Car
	Car.prototype.toString = function() {
		return 'Марка автомобиля: '+this.brand+'; ' +
				'модель автомобиля: '+this.model;
	};

	// перезаписать стандартный valueOf в объекте prototype функции-конструктора Car
	Car.prototype.toString = function() {
		return this.maxSpeed;
	};

	carObject = new Car('Toyota','LC200',200);
	console.log(carObject + '');					// 'Марка автомобиля: Toyota; модель автомобиля: LC200'
	console.log(+carObject);							// 200




var F = function() {
	this.name = 'John';
	return {
		name: 'Irma'
	};
};

F.prototype.name = 'John';

var obj = new F();
console.log(obj.name);







/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Описание объекта на developer.mozilla.org:
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FObject






*****************************************************
Оглавление:

	> Что такое дескриптор и атрибуты свойства?










*****************************************************


> Что такое дескриптор и атрибуты свойств?
	> Читай об этом в концептуальном справочнике по ядру JS,
		в файле "JS - оглавление и общая информация", в статье
		"Дескриптор и атрибуты свойства".









-------------------------------------------------- */

























