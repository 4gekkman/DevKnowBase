/** Tutorial 2
 * 2. Tables, observ.arrays, foreach
 *
 *	> Задача
 *		- Часто при разработке UI приходится иметь дело с таблицами.
 *	  - С помощью KnockoutJS можно легко организовать модель такого UI.
 *	  - Задача в том, чтобы это продемонстрировать.
 *	  - В таблице должно быть можно добавлять/удалять строки.
 *
 *	> Перспективы
 *	 	- При разработке реального приложения всё это очень удобно.
 *	 	- Пользователь работает с моделью представления.
 *	 	- И только когда нажимает на какую-нибудь кнопку, данные уходят модели на сервере.
 *	 	- Т.О. UI будет работать в разы шустрее, чем если бы постоянно дёргало сервер.
 *
**/


// Модель "резерв питания в полёте"
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";
    });
}


// ViewModel для UI, отображающего таблицу резервов
function ReservationsViewModel() {
    var self = this;

    // Данные с сервера о возможных вариантах питания в полёте (не для редактирования)
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ];

    // Наблюдаемый массив
    // - Эмулирует таблицу БД со строками-экземплярами модели "резерв питания в полёте"
    self.seats = ko.observableArray([
        new SeatReservation("Иван", self.availableMeals[0]),
        new SeatReservation("Пётр", self.availableMeals[1]),
				new SeatReservation("Николай", self.availableMeals[2]),
    ]);

		// Операции с ViewModel

			// Зарезервировать питание для нового человека
			self.addSeat = function() {
					self.seats.push(new SeatReservation("", self.availableMeals[0]));
			};

			// Удалить резерв из self.seats
			self.removeSeat = function(seat) { self.seats.remove(seat) }

			// Итого
			self.totalSurcharge = ko.computed(function() {
				 var total = 0;
				 for (var i = 0; i < self.seats().length; i++)
						 total += self.seats()[i].meal().price;
				 return total;
			});

}

ko.applyBindings(new ReservationsViewModel());