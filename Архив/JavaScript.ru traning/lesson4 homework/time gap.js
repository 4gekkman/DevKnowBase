

/* PLAN
 *
 * 1. Записать 3 переменные - начало, конец и текущее значение в секундах:
 *    1.1 Начало дня: конструктором Date(), с указанными 3-мя аргументами:
 *    Y, M, D, которые взяты таким образом (new Date()).getFullYear() и т.д.
 *    1.2 Конец для: аналогично, только к getDate() надо прибавить 1,
 *    а из полученного резуьлтата вычесть 1000.
 *    1.3 Просто new Date()
 * 2. Вывести на экран разницу между 1.3 и 1.1, у деленную на 1000. И разницу
 *    между 1.2 и 1.3, у деленную на 1000.
 *
 */

// http://learn.javascript.ru/task/skolko-sekund-do-zavtra
var now = new Date();                                                      // 1
var start = new Date(now.getFullYear(),now.getMonth(),now.getDate());
var end = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1)-1000;

var reZ1 = (now - start)/1000;
var reZ2 = (end - start)/1000;
document.write("С начала дня прошло "+reZ1+" секунд<br>");
document.write("До конца дня осталось "+reZ2+" секунд<br>");