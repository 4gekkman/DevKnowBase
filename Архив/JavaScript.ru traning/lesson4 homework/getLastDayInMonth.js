

/* PLAN
 *
 * 1. Конструктором new Date() создать и записать в переменную дату,
 *        соответствующую переданным в функцию параметрам.
 * 2. Создать временную числовую переменную, равную 0.
 * 3. Запустить бесконечный цикл for(). В цикле:
 *    3.1 Если текущая дата больше временной переменной,
 *        записать в нее текущее число, и прибавить к дате 1.
 *    3.2 В противном случае вернуть временную переменную
 */


/*
 * http://learn.javascript.ru/task/poslednij-den-mesyaca
 *
 * @author 4gekkman@gmail.com
 * @param number year
 * @param number month
 * @return number last day in month
 */
function getLastDayInMonth(year, month) {
    var date = new Date(year,month);                 // 1
    var prevDate = 0;                                // 2
    for(;;) {                                        // 3
        if(date.getDate() > prevDate) {
            date.setDate(date.getDate()+1);
            prevDate++;
        } else {
            return prevDate;
        }
    }
}

document.write(getLastDayInMonth(2013,0));


// правильная простая версия функции
function getLastDayInMonthv2(year, month) {
    var date = new Date(year, month+1, 0);   // будет автокоррекция
    return date.getDate();
}
