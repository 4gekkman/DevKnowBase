

// Создать модель
var Model = {

	constructor: function (){

		var self = this;

		self.people = ko.observableArray([
			ko.observable({name: ko.observable('Иван'), age: ko.observable(18)}),
			ko.observable({name: 'Джон', age: 28}),
			ko.observable({name: 'Вася', age: 38}),
		]);

		return self;
	}

};

var obj = Object.create(Model).constructor();

// Активировать модель
ko.applyBindings(obj);
