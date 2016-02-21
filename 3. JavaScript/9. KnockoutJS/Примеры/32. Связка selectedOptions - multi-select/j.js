

// Создать компонент
var Model = {
	constructor: function(){
		var self = this;

        self.availableCountries = ko.observableArray(['France', 'Germany', 'Spain']);
        self.chosenCountries = ko.observableArray(['Germany']);

		return self;
	}
};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




