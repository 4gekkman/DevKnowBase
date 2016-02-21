

// Создать компонент
var Model = {

	constructor: function(){
		var self = this;

		self.hasCellphone = ko.observable(false);
		self.cellphoneNumber = ko.observable('');

		return self;
	}

};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




