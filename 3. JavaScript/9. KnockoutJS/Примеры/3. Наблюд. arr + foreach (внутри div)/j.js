

// Создать модель
var Model = {

	constructor: function (){

		var self = this;

		self.people = ko.observableArray([
			{num: 1, name: 'Иван', age: 18},
			{num: 2, name: 'Джон', age: 28},
			{num: 3, name: 'Вася', age: 38},
		]);

		return self;
	}

};


// Активировать модель
ko.applyBindings(Object.create(Model).constructor());


