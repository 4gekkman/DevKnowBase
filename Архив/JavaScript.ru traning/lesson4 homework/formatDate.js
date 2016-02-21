

/* PLAN
 *
 * 1. Создать 3 переменные dd, mm, yy, и записать в них соответствующие
 *    значения. И сразу сделать из них строки с помощью + '';
 * 2. Проверить длину строк dd и mm, если длина 1, значит надо первым символом
 *    прибавить 0.
 * 3. Вернуть результат.
 */

/*
 * http://learn.javascript.ru/task/vyvesti-tekushuu-datu
 * [dd].[mm].[yy]
 *
 * @author 4gekkman@gmail.com
 * @param object date
 * @return string formatted date
 */
function formatDate(date) {
    var dd = date.getDate() + '',
        mm = date.getMonth() + 1 + '',
        yy = date.getFullYear() + '';
    if(dd.length < 2) {
        dd = "0"+dd;
    }
    if(mm.length < 2) {
        mm = "0"+mm;
    }
    return dd+"."+mm+"."+yy;
}

var date = new Date();
document.write(formatDate(date));