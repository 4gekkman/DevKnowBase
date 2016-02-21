

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

		self.displayMessage = ko.observable(false);

		return self;
	}

};


// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




