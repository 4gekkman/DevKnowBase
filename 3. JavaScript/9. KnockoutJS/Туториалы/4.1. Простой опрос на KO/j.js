/** Tutorial 1
 * 4.1. Простой опрос на КО
 *
 *
 *
**/


// Модель ответа на вопрос
function Answer(text) {
	this.answerText = text;						// Текст ответа
	this.points = ko.observable(1);		// Кол-во пунктов, выделенных ответу
}

// Модель опроса
function SurveyViewModel(question, pointsBudget, answers) {

	// 1. Свойства

		// Св-во для хранения вопроса опроса
		this.question = question;

		// Св-во для хранения MAX кол-ва пунктов
		this.pointsBudget = pointsBudget;

		// Св-во для хранения массива доступными ответами на опрос
		this.answers = answers.map(function(element,index,array) {
			return new Answer(element)
		});

		// Вычисляемое св-во - кол-во оставшихся для распределения очков
		this.pointsUsed = ko.computed(function() {
				var total = 0;
				for (var i = 0; i < this.answers.length; i++)
						total += this.answers[i].points();
				return total;
		}, this);


	// 2. Функционал

		// Функция для сохранения результатов опроса на сервер
		this.save = function() { alert('To do') };

}

// Применить KO, создать экземпляр модели SurveyViewModel и соотв. привязки
ko.applyBindings(new SurveyViewModel("Что делает тебя счастливым?", 10,
		[
		 "Большое количество денег",
		 "Хорошее здоровье и самочувствие",
		 "Наличие второй половинки, и хорошие отношения с ней",
		 "Возможность делать что-то полезное для общества"
		]));