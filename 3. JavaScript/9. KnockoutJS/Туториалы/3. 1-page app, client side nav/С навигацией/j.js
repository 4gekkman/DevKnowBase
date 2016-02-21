/** Tutorial 3
 * 3. 1-page app, client side nav
 *
 *	> Введение
 *		- Последнее время становятся популярны одностраничные приложения.
 *	  - С помощью KnockoutJS их особенно удобно делать.
 *		- Но как организовать в них навигацию?
 *	  - В этом поможет небольшой фреймворк SammyJS.
 *	  - Он позволяет организовать роутинг по одностраничному JS-приложению.
 *	  - В том числе будут работать кнопки "Назад" и "Вперёд"
 *
 *	> Ссылка на SammyJS
 *			http://sammyjs.org/
 *
 *	> В чём заключается пример
 *		- Это одностраничное JS-приложение.
 *	  - Суть - почтовый клиент.
 *	  - Для организации модели приложения используется KnockJS.
 *
 *	  - Есть несколько папок вроде: "Входящие", "Архив", "Отправленные", "Спам".
 * 		- Между папками можно переключаться, щёлкнув по той или иной папке.
 *
 * 		- Когда та или иная папка выбрана, отображается таблица с письмами в ней.
 * 		- На каждое письмо можно щёлкнуть, и откроется его содержимое.
 *
 * 		- В этом одностраничном приложении организована хэш-навигация.
 * 		- Для её организации использован фреймворк SammyJS.
 * 	 	- Sammy позволяет очень легко организовывать роутинг и навигацию.
 * 	 	- При клике по папке или письму, поль-ель задействует навигацию Sammy.
 * 	 	- Как следствие, он сможет испольозвать кнопки "назад" и "вперёд".
 * 	 	- (а в одностран.приложении без навигации эти кнопки не работают).
 *
 * 	> Примечания
 *
 * 		# Что означает data-bind="with: chosenFolderData"
 * 			- Такой атрибут можно добавить любому HTML-элементу.
 * 		  - Внутри него все обращения к св-вам X будут квалифицированы, как:
 * 					chosenFolderData.X.
 *
 * 	  # Что означает css: { selected: $data == $root.chosenFolderId() }
 * 	  	- Проверяется условие $data == $root.chosenFolderId().
 * 	    - Если оно будет выполнено, то эл-т получит класс 'selected'.
 * 	    - Если оно не будет выполнено, у элемента уберётся класс 'selected'.
 * 	    - $data - данные для foreach - т.е. значение ссотв. эл-та массива.
 *
 * 		# observable-свойства инициализируются не как обычные свойство
 * 			- Обычное: 				this.x = 10;
 * 		  - Observable:			this.x(10);
 * 		  - Если observable инициал-ть, как обычное, оно перестанет быть observable.
 *
 * 		# Про html: messageContent
 * 			- Что означате html-связывание в data-bind?
 * 		  - Значит, что в messageContent может быть любой HTML.
 * 		  - В том числе всякие разные теги.
 *
**/



function WebmailViewModel() {

    // 1. Сохранить ссылку на объект.
    var self = this;

		// 2. Создать массив данных - имена 4 папок почтового клиента
		//		- Эмулирует таблицу в БД. Каждый эл-т массива - как строка в таблице.
		//		- Будем и далее называть этот массив таблицей, а его эл-ты строками.
		//    - Строка может содержать значение любого типа: строку, объект и т.д.
		self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];

		// 3. Создать св-во, в которой должно быть имя выбранной папки
    self.chosenFolderId = ko.observable();

		// 4. Создать св-во для хранения данных о выбранном письме
		self.chosenMailData = ko.observable();

    // 5. Создать функцию-обработчик для события click
		//    - Будет реагировать на клик по эл-ту UI, связанному с соотв. строкой из (2).
		//    - 1-м аргументом автоматич.передаётся значение строки кликнутого эл-та UI.
		//			- Например, если кликнуть по папке 'inbox', то foldersItem == 'inbox'
		//    - 2-м аргументом автоматич.передаётся объект-событие.
		self.goToFolder = function(foldersItem, event) {

			location.hash = foldersItem;

		};

		// 6. Создать св-во для хранения данных выбранной папки
		//		- Очевидно, это будут письма.
		self.chosenFolderData = ko.observable();

		// 8. Создать функцию-обработчик для события click
		//    - Будет реагировать на клик по письму
		//    - 1-м аргументом автоматич.передаётся значение строки кликнутого эл-та UI.
		//			- Например, если кликнуть по папке 'inbox', то foldersItem == 'inbox'
		//    - 2-м аргументом автоматич.передаётся объект-событие.
		self.goToMail = function(mail, event) {

			location.hash = mail.folder + '/' + mail.id

		};


	// Навигация в одностраничном приложении с помощью Sammy
	Sammy(function() {
		this.get('#:folder', function() {

			// Присвоить св-ву chosenFolderId имя выбранной папки
			self.chosenFolderId(this.params.folder);

			// Обнулить информацию о выбранном письме (никакое не выбрано):
			self.chosenMailData(null);


			// Сделать AJAX-запрос к API сервера, и:
			// - Получить данные для foldersItem - передать его в запросе.
			// - Сохранить полученные данные в свойства chosenFolderData.

				// Здесь по идее должен быть AJAX-запрос...
				//$.get('/mail', { folder: foldersItem }, self.chosenFolderData);

				// Но вместо этого мы просто присвоем chosenFolderData
				// объект со св-вом mails, содержащим массивом объектов-данных
				if(this.params.folder == 'Inbox') {
					self.chosenFolderData({
						mails: [
							{id: 0, folder: 'Inbox', from: 'Иван1', to: 'Пётр1', subject: 'Тема1', date: '20.08.2014'},
							{id: 1, folder: 'Inbox', from: 'Иван2', to: 'Пётр2', subject: 'Тема2', date: '19.08.2014'},
							{id: 2, folder: 'Inbox', from: 'Иван3', to: 'Пётр3', subject: 'Тема3', date: '18.08.2014'}
						]
					});
 				}

				if(this.params.folder == 'Archive') {
					self.chosenFolderData({
						mails: [
							{id: 0, folder: 'Archive', from: 'Иван4', to: 'Пётр4', subject: 'Тема4', date: '20.08.2014'},
							{id: 1, folder: 'Archive', from: 'Иван5', to: 'Пётр5', subject: 'Тема5', date: '19.08.2014'},
							{id: 2, folder: 'Archive', from: 'Иван6', to: 'Пётр6', subject: 'Тема6', date: '18.08.2014'}
						]
					});
 				}

				if(this.params.folder == 'Sent') {
					self.chosenFolderData({
						mails: [
							{id: 0, folder: 'Sent', from: 'Иван7', to: 'Пётр7', subject: 'Тема7', date: '20.08.2014'},
							{id: 1, folder: 'Sent', from: 'Иван8', to: 'Пётр8', subject: 'Тема8', date: '19.08.2014'},
							{id: 2, folder: 'Sent', from: 'Иван9', to: 'Пётр9', subject: 'Тема9', date: '18.08.2014'}
						]
					});
 				}

				if(this.params.folder == 'Spam') {
					self.chosenFolderData({
						mails: [
							{id: 0, folder: 'Spam', from: 'Иван10', to: 'Пётр10', subject: 'Тема10', date: '20.08.2014'},
							{id: 1, folder: 'Spam', from: 'Иван11', to: 'Пётр11', subject: 'Тема11', date: '19.08.2014'},
							{id: 2, folder: 'Spam', from: 'Иван12', to: 'Пётр12', subject: 'Тема12', date: '18.08.2014'}
						]
					});
 				}

		});

		this.get('#:folder/:mailId', function() {

			// Присвоить св-ву chosenFolderId значение this.params.folder
			self.chosenFolderId(this.params.folder);

			// Сделать AJAX-запрос к API сервера, и:
			// - Получить данные для mail.id - передать его в запросе.
			// - Сохранить полученные данные в свойства chosenMailData.

				// Здесь по идее должен быть AJAX-запрос...
				//$.get("/mail", { mailId: mail.id }, self.chosenMailData);

				// Но вместо этого мы просто присвоем chosenMailData массив объектов
				// объект со св-вами: subject, from, to, date, messageContent
				var mailData = {
					subject: self.chosenFolderData().mails[this.params.mailId].subject,
					from: self.chosenFolderData().mails[this.params.mailId].from,
					to: self.chosenFolderData().mails[this.params.mailId].to,
					date: self.chosenFolderData().mails[this.params.mailId].date
				};
				switch(this.params.mailId) {
					case 1: mailData.messageContent = 'Здорова чувак, как поживаешь?'; break;
					case 2: mailData.messageContent = 'Как жизнь, чел?*='; break;
					case 3: mailData.messageContent = 'Вот э фак'; break;
					case 4: mailData.messageContent = 'Их так много'; break;
					case 5: mailData.messageContent = 'Зелёные человечки'; break;
					case 6: mailData.messageContent = 'Какой к верху'; break;
					case 7: mailData.messageContent = 'Чёрная лапа чёрной кошки='; break;
					case 8: mailData.messageContent = 'Прикоооооол'; break;
					case 9: mailData.messageContent = 'ываываыаыва'; break;
					case 10: mailData.messageContent = 'Уже почти конец'; break;
					case 11: mailData.messageContent = 'Анатолий'; break;
					case 12: mailData.messageContent = 'Кучерена'; break;
					default: mailData.messageContent = 'Дефолт';
				}
				self.chosenMailData(mailData);

				// Перестать показывать данные папки (список писем)
				self.chosenFolderData(null);

		});

		// Запустить роут 'get' с хэшем '#Inbox'
		this.get('', function() { this.app.runRoute('get', '#Inbox') });

	}).run();


}

var viewModel = new WebmailViewModel();
ko.applyBindings(viewModel);














