


// http://learn.javascript.ru/task/den-100-dnej-nazad

/* PLAN
 *
 * 1. Записать в переменную текущую дату конструктором new Date()
 * 2. С помощью метода setDate() внести изменение в число этой даты,
 *    а именно вычесть 100.
 * 3. Создать переменную для дня недели и записать в нее его.
 * 4. Вывести на экран результат.
*/

var now = new Date();                                         // 1
now.setDate(now.getDate()-100);                               // 2
var dayOfWeek = "";                                           // 3
var daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
dayOfWeek = daysOfWeek[now.getDay()];
document.write("100 дней назад было: " +                      // 4
    "<br>"+now+"<br>А день недели: "+dayOfWeek);
