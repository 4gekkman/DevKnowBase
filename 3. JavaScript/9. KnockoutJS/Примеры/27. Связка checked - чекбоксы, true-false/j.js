

// Создать компонент
var Model = {

	constructor: function(){
		var self = this;

    self.checked = ko.observable(false);
		self.text = ko.computed(function(){

			if(self.checked()) return 'чекбокс включён';
			else return 'чекбокс выключен';

		});

		return self;
	}

};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




