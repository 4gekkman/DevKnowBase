

// Создать компонент
var Model = {
	constructor: function(){
		var self = this;

		self.employee = ko.observableArray([
			{name: 'Иван', id: 1},
			{name: 'Петр', id: 2},
			{name: 'Вася', id: 3}
		]);
		self.selected = ko.observable();

		self.selectedName = ko.computed(function(){
			if(self.selected()) return self.selected().name;
			else return '';
		});
		self.selectedId = ko.computed(function(){
			if(self.selected()) return self.selected().id;
			else return '';
		});

		return self;
	}
};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




