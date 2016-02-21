/** Tutorial 5
 * 5. ToDo list
 *
 * > Описание
 * 	 - Демонстрация ToDo-списка, сделанного с помощью KO.
 *
 *
**/

// Модель задачи
function Task(data) {

		// Название задачи
    this.title = ko.observable(data.title);

		// Выполнена ли задача
    this.isDone = ko.observable(data.isDone);

}

// Модель всего UI "Список задач"
function TaskListViewModel() {

	// Свойства

		// Ссылка на объект модели
		var self = this;

		// Массив объектов-задач (считай, как таблица в БД)
		self.tasks = ko.observableArray([]);

		// Текущий текст из input, куда нужно вписывать текст задачи
		self.newTaskText = ko.observable();

		// Количество не завершённых задач
		self.incompleteTasks = ko.computed(function() {
				return ko.utils.arrayFilter(self.tasks(), function(task) { return !task.isDone() });
		});


  // Функционал

		// Добавить новую задачу
    self.addTask = function() {

				// Добавить в массив tasks новый объект класса Task.
				// - При этом передать конструктору при создании текст новой задачи
        self.tasks.push(new Task({ title: this.newTaskText() }));

				// Обнулить value input'a, в который вводят текст новой задачи
        self.newTaskText("");

    };

		// Удалить задачу
    self.removeTask = function(task) {

			// Удалить из массива tasks объект (задачу) task
			self.tasks.remove(task)

		};

}

ko.applyBindings(new TaskListViewModel());

















