////===============================////
////                               ////
////              Dating           ////
////                               ////
////===============================////
////                    ////
////       Links        ////
////                    ////
////====================////


  - badoo.com


////==========================================================////
////                                   ////
////          Table of contents        ////
////                                   ////
////===================================////


  1. План действий
  2. Как реализовать план

  x. Скрипт


////==================================================////
////                      ////
////        Content       ////
////                      ////
////======================////


1. План действий

  Требуется возможность включать/выключать автоматическое
  (без временных и финансовых затрат) формирование входящего 
  потока чатов с девушками, которые что-то уже написали 
  (т.е. вышли на контакт) из Badoo*. 

  Кроме того, необходимо автоматически удалять все чаты, 
  в которых нет активности в течение N дней.

  Всё это даст возможность периодически (по настроению) посещать
  сайт или мобильное приложение badoo, и визуально просматривать
  "улов". С понравившимися визуально девушками можно 
  попереписываться.

  * Выбран именно Badoo, как самая популярная в России, и в 
  частности в РФ, площадка. На Tinder, например, в Сочи
  вообще почти никого.


2. Как реализовать план

  План реализовать не сложно. Для этого нужно написать
  всего лишь один JS скрипт. Его нужно будет запускать
  на сайте badoo.com, предварительно залогинившись.
  Этот скрипт должен автоматически запускаться после
  перезагрузки браузера на домене badoo.com с помощью
  расширения в Chrome (custom javascript for websites, или CJS).
  Вот, что он должен делать:

  • На странице "Encounters"

   ☑ Лайкать всех девушек подряд с заданными в профиле
      параметрами до лимита.

   ☑ Впадать в спячку по достижению лимита, и 
      каждый час проверять, не спал ли лимит. Если спал,
      продолжить. И так до бесконечности.

  • На странице "Messages"

   ☑ Писать сообщение всем девушкам, у которых ещё нет моих сообщений.

   ☑ Удалять все чаты, в которых последнее сообщение старше 14 дней.


x. Скрипт

Как пользоваться:

  1. Открыть 2 вкладки с badoo.com. Залогиниться везде.
  2. Включить консоль в обеих вкладках.
  3. Вставить скрипт ниже в консоль в каждую из вкладок, и нажать enter.
     Если расширение CJS стоит и настроено, то не надо, 
     т.к. оно само это сделает.
  4. В первой вкладке ввести и нажать enter: 
     badoo.likes.start();
  5. Во второй вкладке ввести и нажать enter: 
     badoo.greetings.start();

  Далее просто можно всё это оставить, оно само будет работать.
  Либо запускать раз в день минут на 20-30.

Какие будут результаты:

  1. Pupularity станет максимальной.
  2. В контактах будут появляться те, кто ответил на приветствие.
     С ними можно общаться.

---------------------

// Скрипт для страницы "Encounters"
var my_encounters = {
  data: {
    interval_ms: 1500,          // сколько ждать после каждого лайка, чтобы поставить следующий
    wait_counters_ms: 0,        // сколько скрипт уже ждёт новую квоту на свайпы
    wait_interval_ms: 3600000,  // как часто скрипт проверяет, не дали ли новую квоту на свайпы
    timerId: ""                 // идентификатор таймера
  },
  methods: {

    // Достигнут ли лимит свайпов
    is_limit_reached: function(){ 
      if(document.evaluate("//h1[contains(., 'out of votes!')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) 
        return true; 
      return false; 
    },

    // Поставить лайк текущей анкете
    autolike: function(){ 
      document.querySelector('.js-profile-header-vote').click();
    },

    // При обнаружении, закрыть модальное окно
    close_modal: function(){ 
      document.querySelector('.icon.js-ovl-close').click();
    },

    // Перейти на вкладку "Encounters"
    goto_encounters: function(){
      document.evaluate("//a[contains(@href,'encounters')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
    },

    // Запустить скрипт
    start: function(){

      // Запустить setInterval через каждые my_encounters.data.interval_ms
      my_encounters.data.timerId = setInterval(function(){ 
        
        // Перейти на вкладку "Encounters"
        my_encounters.methods.goto_encounters();

        // Если лимит не достигнут
        if(!my_encounters.methods.is_limit_reached() && +my_encounters.data.wait_counters_ms<=0) 
          my_encounters.methods.autolike(); 

        // Если лимит достигнут
        else {

          // Если уже прошли my_encounters.data.wait_interval_ms, закрыть модалку и сбросить счетчик
          if(my_encounters.data.wait_counters_ms <= 0) { 
            my_encounters.data.wait_counters_ms = my_encounters.data.wait_interval_ms;
            my_encounters.methods.close_modal();
          }

          // Если ещё не прошли my_encounters.data.wait_interval_ms, прибавить к счётчику my_encounters.data.interval_ms
          else 
            my_encounters.data.wait_counters_ms = +my_encounters.data.wait_counters_ms - +my_encounters.data.interval_ms;

          // Сообщить, сколько уже прошло по счётчику
          console.log('LLR: '+my_encounters.data.wait_counters_ms);

        }

      }, my_encounters.data.interval_ms);    

    },

    // Остановить скрипт
    stop: function(){
      clearInterval(my_encounters.data.timerId);
    }

  }
};


var dating = {
  data: {
    stack: [],                  // очередь задач
    ticks: {
      round: 0,                 // номер текущего раунда
      count: 0,                 // кол-во тиков в текущем раунде
      ms:    1000,              // частота тиков
      id:    0,                 // id setInterval
    },
    contacts: [],               // список контактов
    chosen_contact_index: 0,    // индекс выбранного контакта в contacts
    tasks: {
      stack: [],                // очередь задач на текущем тике
      checklist: {              // чеклист дел для каждого контакта
        greeting: false,        // - добавили ли задачу "приветствие" в стек
        clear: false            // - добавили ли задачу "очистит старые контакты" в стек
      }
    },
    cooldown: {
      timer: 0,                 // текущее значений кулдаун-таймера
      s: 600                    // кулдаун в секундах
    },
    greetings: [
      'Привет',
      'Мадмуазель, разрешите представиться',
      'Можно пригласить вас на танец?',
      'У вас потрясающая улыбка!',
      'Можно пригласить вас на танец?',
    ],
    months: {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12
    },
  },
  methods: {

    // Start ticks
    start: function(){

      dating.data.ticks.id = setInterval(function(){

        dating.methods.processor();

      }, dating.data.ticks.ms); 

    },

    // Stop ticks
    stop: function(){
      
      dating.data.timerId = setInterval(function(){

        clearInterval(dating.data.ticks.id);

      }); 

    },

    // Processor
    processor: function(){
      
      // 1] Добавить +1 к раунду, если count == 0 и это не 0-й раунд
      if(dating.data.ticks.count == 0 && dating.data.cooldown.timer == 0) 
        dating.data.ticks.round = +dating.data.ticks.round+1;

      // 2] Добавить новый тик
      dating.data.ticks.count = +dating.data.ticks.count+1;

      // 3] Если cooldown-таймер > 0
      if(dating.data.cooldown.timer > 0) {
        dating.data.cooldown.timer = +dating.data.cooldown.timer-1;
        dating.data.ticks.count = 0;
        console.log('Cooldown: '+dating.data.cooldown.timer);
        return;
      } else
        dating.data.cooldown.timer = 0;

      // 4] Открыть messages, если ещё не открыты
      dating.methods.open_messages();

      // 5] Получить весь список контактов, если индекс == 0, или если он пуст
      if(dating.data.chosen_contact_index == 0 || dating.data.contacts.length == 0) {
        let result = dating.methods.get_contacts();
        if(!result) {
          console.log('Список контактов пуст');
          return;
        }
      }

      // 6] Добавить в очередь необходимые задачи
      if(dating.data.tasks.checklist.greeting == false) {
        dating.data.stack.push(dating.tasks.greeting); dating.data.tasks.checklist.greeting = true;
        dating.data.stack.push(dating.tasks.clear); dating.data.tasks.checklist.clear = true;
      }

      // 7] Обработать следующую задачу в очереди, если стек не пуст
      if(dating.data.stack.length) {
        dating.data.stack[0]();
      }

      // n] Если очередь задач пуста, и чеклист задач заполнен, переключиться на следующий контакт
      if(dating.data.stack.length == 0 && dating.methods.check_checklist()) {

        // Если следующего контакта нет
        if(dating.data.chosen_contact_index >= dating.data.contacts.length-1) {
          
          // установить индекс = 0
          dating.data.chosen_contact_index = 0;

          // установить cooldown таймер
          dating.data.cooldown.timer = dating.data.cooldown.s;

        }

        // Если следующий контакт есть, поставить его
        else {
          dating.data.chosen_contact_index = +dating.data.chosen_contact_index+1;
          dating.data.contacts[dating.data.chosen_contact_index].querySelector('.im_user').click();
          dating.methods.clear_checklist();
        }

      }


      // debug
      console.log('--- debug ---');
      console.log('Round: '+dating.data.ticks.round);
      console.log('Tick: '+dating.data.ticks.count);
      console.log('Index: '+dating.data.chosen_contact_index);
      console.log('Contacts: '+dating.data.contacts.length);


      // Пищем сообщения новым контактам
      // - Перейти на messages.
      // - Получить список контактов
      // - Каждую секунду переключаться на новый контакт, и выполнять для него набор задач,
      //   причём, пока они не будут выполнены, не переключаться на следующий.
      // - Когда весь список пройдет, таймаут N минут,
      //   обновить список контактов, и по новой.

      // Удаляем старые чаты
      // - Тоже самое, что с написание сообщений, только добавляется ещё один набор
      //   задач.

    },

    // Открыть окошко "Messages" с сообщениями (если ещё не открыто)
    open_messages: function(){
      if(!document.querySelector('.messenger-ovl__body'))
        document.evaluate("//a[contains(@href,'messenger')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
    },

    // Получить весь список контактов
    get_contacts: function(){
      dating.data.contacts = document.querySelectorAll('.js-contacts .js-im-users .contacts__item');
      return dating.data.contacts.length > 0;
    },

    // Получить весь список контактов
    clear_checklist: function(){
      dating.data.tasks.checklist.greeting = false;
      dating.data.tasks.checklist.clear = false;
    },

    // Все ли задачи для текущего контакта добавлены в стек
    check_checklist: function(){
      return dating.data.tasks.checklist.greeting == true &&
             dating.data.tasks.checklist.clear == true;
    },

    // Является ли n числовым значением
    isNumeric: function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

  },
  tasks: {

    // Написать приветственное сообщение
    greeting: function(name){

      // Получить input
      var input_field = document.querySelector('.messenger-tools__input');
      if(!input_field) {
        console.log("ERROR! В dating проблема с write_a_greeting: не могу найти элемент input для ввода сообщения!");
        return false;
      }

      // Получить кнопку "отправить сообщение"
      var send_button = document.querySelector('.messenger-tools__btn.js-send-message');
      if(!send_button) {
        console.log("ERROR! В dating проблема с write_a_greeting: не могу найти элемент кнопки отправки сообщения!");
        return false;
      }

      // Проверить, есть ли тут уже мои сообщения
      var are_my_msgs_present = (function(){
        return document.querySelectorAll('.messages .message.js-message-block.message--out').length;
      })();
      
      // Если моих сообщений тут ещё нет
      if(!are_my_msgs_present) {
        let message = dating.data.greetings[Math.floor(Math.random()*dating.data.greetings.length)];
        console.log(message);
        input_field.innerHTML = message;
        send_button.click();
      }

      // Убрать задачу из стека
      dating.data.stack.shift();

    },

    // Удалить старые контакты
    clear: function(){

      // Получить имя контакта
      var contact_name = document.querySelector('.connection-header__name').textContent;

      // Получить дату последнего сообщения
      var el = document.querySelectorAll('#messages_body .message__date')[document.querySelectorAll('#messages_body .message__date').length-1];
      if(!el) {
        dating.data.stack.shift();
        return;
      }
      var lastdate = el.textContent;

      // Получить дату сообщения и текущую дату UTC
      var dates = {
        msg: {
          year: lastdate.trim().slice(lastdate.trim().search(/\b(19|20)\d{2}\b/g), lastdate.trim().length),
          month: dating.data.months[lastdate.trim().substr(lastdate.trim().search(/\D/g)+1, lastdate.trim().search(/\b(19|20)\d{2}\b/g)-2-lastdate.trim().search(/\D/g))],
          day: lastdate.trim().substr(0, lastdate.trim().search(/\D/g))
        },
        now: {
          year: new Date(Date.now()).getUTCFullYear(),
          month: new Date(Date.now()).getUTCMonth(),
          day: new Date(Date.now()).getUTCDay()
        }
      }

      // Если year, month или day для msg не число, перейти к след.итерации
      if(!dating.methods.isNumeric(dates.msg.year) || !dating.methods.isNumeric(dates.msg.month) || !dating.methods.isNumeric(dates.msg.day)) {
        dating.data.stack.shift();
        return;
      }

      // Сколько дней прошло
      var days_gone = (function(){
        return (Date.parse(dates.now.year + "-" + dates.now.month + "-" + dates.now.day) - Date.parse(dates.msg.year + "-" + dates.msg.month + "-" + dates.msg.day))/1000/60/60/24;
      })();

      // Если прошло более 5 тысяч дней, завершить
      if(Math.abs(days_gone) >= 5000) {
        dating.data.stack.shift();
        return;
      }

      // Если более 14, удалить контакт
      if(days_gone > 14) {

        // Получить кнопку remove и нажать на неё
        var remove_el = document.querySelector('.option__in.js-im-contact-remove');
        if(!remove_el) {
          console.log('Проблема в my_messages, метод remove_old_contact. Не могу получить кнопку удаления контакта.')
          dating.data.stack.shift();
          return;
        }
        remove_el.click();

        // Получить кнопку "Delete" на модальном окне для подтверждения, и нажать
        var confirm_del_btn = document.querySelector('.btn.btn--sm.js-im-confirm-delete');
        if(!confirm_del_btn) {
          console.log('Проблема в my_messages, метод remove_old_contact. Не могу получить кнопку подтверждения удаления контакта.')
          dating.data.stack.shift();
          return;
        }
        //confirm_del_btn.click();

        // Сообщить, что контакт удалён
        console.log('Контакт '+contact_name+' удалён, так как прошло '+days_gone+' дней с момента последнего сообщения');

      }

      // Убрать задачу из стека
      dating.data.stack.shift();

    },    

  }
}

var badoo = {
  info: function(){
    console.log('BADooNATOR: ИНСТРУКЦИЯ\n\n\
      Команды: \n\n\
        badoo.likes.start() - начать ставить лайки;\n\
        badoo.likes.stop() - закончить ставить лайки;\n\
        badoo.greetings.start() - приветствовать, удалять старые контакты;\n\
        badoo.greetings.start() - закончить приветствовать, удалять старые контакты\n\n\
      Как пользоваться: \n\n\
        1. Открыть 2 вкладки с badoo.com. Залогиниться везде.\n\
        2. Включить консоль в обеих вкладках.\n\
        3. Вставить скрипт ниже в консоль в каждую из вкладок, и нажать enter. Если расширение CJS стоит и настроено, то не надо, т.к. оно само это сделает.\n\
        4. В первой вкладке ввести и нажать enter: badoo.likes.start();\n\
        5. Во второй вкладке ввести и нажать enter: badoo.greetings.start();\n\n\
        Далее просто можно всё это оставить, оно само будет работать.\n\
        Либо запускать раз в день минут на 20-30.\n\n\
      Какие будут результаты:\n\n\
        1. Pupularity станет максимальной.\n\
        2. В контактах будут появляться те, кто ответил на приветствие. С ними можно общаться.\n\n');
  },
  likes: {
    start: function(){
      my_encounters.methods.start();
    },
    stop: function(){
      my_encounters.methods.stop();
    }
  },
  greetings: {
    start: function(){
      dating.methods.start();
    },
    stop: function(){
      dating.methods.stop();
    }
  }
}

badoo.info();


---------------------








