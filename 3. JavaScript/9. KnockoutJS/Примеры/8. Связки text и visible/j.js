

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

		self.value = ko.observable('Иван');
		self.isVisible = function() {

			// Если в input введено число, вернуть true
			var reg = /\d+/i;
			if(reg.test(self.value())) return true;

			// Иначе вернуть false
			return false;
		};

		return self;
	}

};


// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




