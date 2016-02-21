

// Создать компонент
var Model = {

	constructor: function(){
		var self = this;

		self.name = ko.observable();
		self.description = ko.observable();

		return self;
	}

};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




