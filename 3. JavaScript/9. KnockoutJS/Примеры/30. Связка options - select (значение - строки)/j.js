

// Создать компонент
var Model = {
	constructor: function(){
		var self = this;

		self.countries = ko.observableArray(['RF', 'USA', 'UK']);
		self.selected = ko.observable();

		return self;
	}
};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




