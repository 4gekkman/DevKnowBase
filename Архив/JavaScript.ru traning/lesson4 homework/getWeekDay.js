
/*
 * http://learn.javascript.ru/task/imya-dnya-nedeli
 *
 * @author 4gekkman@gmail.com
 * @param object date
 * @return string day of week
 */
function getWeekDay(date) {
    switch (date.getUTCDay()) {
        case 1:
            return "Пн"; break;
        case 2:
            return "Вт"; break;
        case 3:
            return "Ср"; break;
        case 4:
            return "Чт"; break;
        case 5:
            return "Пт"; break;
        case 6:
            return "Сб"; break;
        case 0:
            return "Вс"; break;

    }
}

var date = new Date(2012,0,3); // 3 января 2012
document.write(getWeekDay(new Date()));
