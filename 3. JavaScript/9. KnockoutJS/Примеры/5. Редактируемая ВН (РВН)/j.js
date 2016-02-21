

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

		self.name = ko.observable('Иван');
		self.surname = ko.observable('Петров');

		self.fullname = ko.computed({

			// Обработка чтения
			read: function(){
				return self.name() + ' ' + self.surname();
			},

			write: function(value) {

				// Разберём fullname на name и surname
				// - name запишем в self.name
				// - surname запишем в self.surname
				console.log(value);
					// 1. Получить индекс первого вхождения символа " "
					var lastSpacePos = value.lastIndexOf(" ");

					// 2. Если lastSpacePos найден, произвести запись
					if (lastSpacePos > 0) {
							self.name(value.substring(0, lastSpacePos));
							self.surname(value.substring(lastSpacePos + 1)); 
					}

			}

		});

		return self;
	}

};


// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




