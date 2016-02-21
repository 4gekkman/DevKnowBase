

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

		self.a = ko.observable(1);
		self.b = ko.observable(2);

		self.c = ko.computed(function(){
			return +self.a() + +self.b();
		});

		return self;
	}

};

var obj = Object.create(Model).constructor();


// Активировать модель
ko.applyBindings(obj);
