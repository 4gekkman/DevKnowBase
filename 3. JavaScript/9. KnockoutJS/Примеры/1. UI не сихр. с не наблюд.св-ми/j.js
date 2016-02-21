

// 1. Создать модель
var Model = {

	name: 'Иван',
	age: 18

};

// 2. Активировать модель
ko.applyBindings(Model);

// 3. При загрузке документа выполнить следующее
window.onload = function () {

	document.getElementById('name').innerHTML = Model.name;
	document.getElementById('age').innerHTML = Model.age;

};

// 4. При изменении эл-та input с id=="n", выполнить следующее
document.getElementById('n').onchange = function() {

	document.getElementById('name').innerHTML = Model.name;

};

// 5. При изменении эл-та input с id=="a", выполнить следующее
document.getElementById('a').onchange = function() {

	document.getElementById('age').innerHTML = Model.age;

};

