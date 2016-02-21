



// Имя функции
var funcName = 'getJSONP';

// Подготовка query string
queryString = '?jsonp='+funcName;

// Подготовка значения src для элемента script
var src = 'p.php'+queryString;

// Подготовить функцию funcName, которая примет ответ
var getJSONP = function(response) {

	// response - это объект
	// > С сервера пришел ответ в виде JSON-строки. Она автоматически была
	//   распарсена в объект response
	console.log(response.name);		// 'John'
	console.log(response.age);		// 18

};

// Добавить в документ элемент script с атрибутом src = src, и тем самым
// послать скрипту p.php запрос методом GET
var script = document.createElement('script');
script.src = src;
document.body.appendChild(script);


