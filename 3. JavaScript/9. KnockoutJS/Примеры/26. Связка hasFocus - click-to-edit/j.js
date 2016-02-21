

// Создать компонент
var Model = {

	constructor: function(){
		var self = this;

    // Данные
    this.name = ko.observable('Нажми, чтобы отредактировать');
    this.editing = ko.observable(false);

    // Поведение
    this.edit = function() { this.editing(true) }

		return self;
	}

};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




