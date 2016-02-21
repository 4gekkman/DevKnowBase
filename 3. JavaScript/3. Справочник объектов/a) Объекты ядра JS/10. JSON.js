/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
JavaScript.
3. Справочник объектов


		10. JSON			| объект, содержащий методы для конвертации значений в JSON-формат, и обратно
			> Свои статические свойства:
				>
			>	Свои статические методы:
				> stringify		| преобразовать JS-объект в строку в JSON-формате
				> parse				| преобразовать строку в JSON-формате в объект JS


	---------- Пользовательские решения

			> Преобразовать JSON-строку в массив








-------------------------------------------------- */

var user, userData;







//stringify(value[, replacer [, space]])
//> преобразовать JS-объект в строку в JSON-формате
//> value - значение для преобразования в JSON-строку
//> space - для того, чтобы итоговая JSON-строка лучше читалась человеком.
//> replacer - позволяет настроить сериализацию
//	> подробнее здесь: https://developer.mozilla.org/en-US/docs/Using_native_JSON#The_replacer_parameter

	// простая сериализация объекта
	user = {
		name: 'Frank',
		id: 43325
	};

	userData = JSON.stringify(user);
	console.log(userData);								// {"name":"Frank","id":43325}
	console.log(typeof userData);         // string

	// простая сериализация объекта с использованием space-параметра
	userData = JSON.stringify(user,null,' ');
	console.log(userData);								//
																				// {
																				//  "name": "Frank",
																				//  "id": 43325
																				// }
	console.log(typeof userData);         // string

	// использование метода toJSON
	user = {
		name: 'Frank',
		id: 43325,
		lastvisit: Date.now(),
		friends: [2344,4342,6443],
		toJSON: function() {
			return {
				name: 'Frank',
				lastvisit: Date.now()
			}
		}
	};

  userData = JSON.stringify(user);
  console.log(userData);							 // Object {name: "Frank", lastvisit: 1384603039648}




//parse(text[, reviver])
//> преобразовать строку в JSON-формате в объект JS, причём
//  все вложенные JSON-строки также преобразуются во объекты
//> text - JSON-строка для парсинга
//> reviver - функция, описывающая то, в каом виде вернуть результат


	// простое приведение JSON-строки обратно в объект
	console.log(JSON.parse(userData));					// Object {name: "Frank", id: 43325}
	console.log(typeof JSON.parse(userData));		// object


	// все вложенные JSON-строки также преобразуются во объекты:

		// Получить JSON-строку с вложенными JSON-строками
		var data = {
			"title":"Конференция",
			'room': {'number':23}
		};
		var json = JSON.stringify(data);
		console.log(json);								// '{"title":"Конференция","room":{"number":23}}'
		console.log(typeof json);					// string

		// Преобразовать эту JSON-строку обратно в объект
		data = JSON.parse(json);
		console.log(data);			// Object {title: "Конференция", room: Object}







/* ---------- Пользовательские решения
================================*/


//Преобразовать JSON-строку в массив
// > Сделать это можно в 2 этапа:
//   - Сначала с помощью функции JSON.parse преобразовать JSON-строку
//		 и все её вложенные (любой глубины) JSON-строки в массив.
//   - Затем преобразовать полученный объект в массив.
// > Аргументы:
//	 - json - json-строка, которую надо преобразовать в массив
// > Функция возвращает массив, который имеет такую же структуру, как
//	 JSON-строка.
function jsonToArray(json) {

	// Преобразовать JSON-строку в объект
	var data = JSON.parse(json);

	// Преобразовать объект и все его собственные вложенные объекты в массив

		// Эта функция обходит все собственные свойства объекта obj.
		// > Если тип свойства оказывается "Object", то функция рекурсивно
		//   вызывается, и этот объект тоже обходится.
		// > Если тип свойства оказываенся НЕ "Object", то данные
		//	 записываются в массив dataArray.
		// > Аргументы:
		//   - obj - объект, который надо обойти, и преобразовать в массив.
		//   - dataArray - массив, который населяется данными.
		// > Функция ничего не возвращает, а лишь населяед данными массив
		//	 dataArray. Причем последний будет иметь такую же структуру,
		//	 как объект obj, включая всевозможные вложенности. Например:
		//	 - Вложенные в св-ва объекта объекты превращаются во вложенные
		// 		 массивы.
		//	 - Литералы так и остаются литералами
		var makeArray = function(obj, dataArray) {

			// Если это собственное свойство объекта (а не наследованное):
			for( var i in obj ) {
				if (obj.hasOwnProperty(i)) {
					console.log('obj['+i+'] = '+obj[i]);
					// Если obj[i] не является объектом, то:
					if(Object.prototype.toString.call(obj[i]).slice(8,-1) !== 'Object') {

						dataArray[i] = obj[i];

					}

					// Иначе:
					else {
						dataArray[i] = [];
						makeArray(obj[i],dataArray[i]);
					}

				}
			}

		};

		// Создать массив
		var dataArray = [];

		// Использовать функцию makeArray
		makeArray(data,dataArray);

		// вернуть результат
		return dataArray;

}


	// Проверка работы функции

		// Создать JSON-строку с 3-х уровневым вложением JSON-строк
		data = {
			"timestamp1":{	"nickname":"Jack",
										"message":{
											"id":12345,
											"text":"Привет!"
										}
									},
			"timestamp2":{	"nickname":"Vano",
										"message":{
											"id":12345,
											"text":"Как дела?"
										}
									},
			10:{	"nickname":"Alex",
										"message":{
											"id":12345,
											"text":"Хорошо"
										}
									}
		};
		json = JSON.stringify(data);

		// Преобразовать её в массив, проверить в консоли результат
		console.log(jsonToArray(json));




















/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Описание объекта на developer.mozilla.org:
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FJSON




*****************************************************
Оглавление:

	> О JSON










*****************************************************


> О JSON
	> О JSON читай в справочнике "Базовые концепции ядра JavaScript",
		в файле "JS - оглавление и общая информация", в разделе JSON.









-------------------------------------------------- */


























