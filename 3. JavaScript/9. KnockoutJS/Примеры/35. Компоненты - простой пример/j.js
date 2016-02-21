

// Создать и зарегистрировать компонент
ko.components.register('my-component', {

	viewModel: {
		createViewModel: function(params, componentInfo) {

			//> Здесь params - объект с параметрами, переданный из связки.
			//> Здесь componentInfo.element - ссылка на эл-т, в который был вставлен компонент

			// 1. Создаём прототип
			var Model = {
				constructor: function() {
					var self = this;

						self.name = ko.observable(params.name);
						self.age = ko.observable(params.age);
						self.gender = ko.observable(params.gender);

					return self;
				}
			};

			// 2. Создаём новый объект из прототипа и возвращаем его
			return Object.create(Model).constructor();

			}

	},

	template:
		'<input type="text" data-bind="textInput: name">' +
		'<span data-bind="text: name"></span><br><br>' +

		'<input type="text" data-bind="textInput: age">' +
		'<span data-bind="text: age"></span><br><br>' +

		'<input type="text" data-bind="textInput: gender">' +
		'<span data-bind="text: gender"></span>'

});

// Активировать KO
ko.applyBindings();










