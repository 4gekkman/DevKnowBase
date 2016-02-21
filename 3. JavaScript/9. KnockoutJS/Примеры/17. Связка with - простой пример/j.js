

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

		self.number = 10;
		self.context = {
			number: 20
		};

		return self;
	}

};


// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




