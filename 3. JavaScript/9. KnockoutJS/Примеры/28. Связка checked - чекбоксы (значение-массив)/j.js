

// Создать прототип модели
var Model = {

	constructor: function(){
		var self = this;

    self.checkboxes = ko.observableArray([
			'one',
			'two',
			'three',
			'four',
			'five'
		]);

		return self;
	}

};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




