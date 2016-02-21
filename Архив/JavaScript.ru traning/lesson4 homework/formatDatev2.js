

/* PLAN
 *
 * 1. Записать в переменную текущую дату now с помощью конструктора new Date()
 * 2.
 *
 */

/*
 * http://learn.javascript.ru/task/otnositelnoe-formatirovanie-daty
 * [dd].[mm].[yy]
 *
 * @author 4gekkman@gmail.com
 * @param object date
 * @return string formatted date
 */
function formatDatev2(date) {
    var now = new Date();           // 1
    if(now-date <= 1000) {
        return "только что";
    }
    if(now-date > 1000 && now-date <= 60*1000) {
        var ss = (now - date)/1000;
        return ss+" секунд назад";
    }
    if(now-date > 60*1000 && now-date <= 60*60*1000) {
        var mm = (now - date)/1000/60;
        return mm+" минут назад";
    }
    if(now-date > 60*60*1000 ) {
        var dd = date.getDate() + '',
            mm = date.getMonth() + 1 + '',
            yy = date.getFullYear() + '',
            hh = date.getHours() + '',
            mimi = date.getMinutes() + '',
            ss = date.getSeconds() + '';
        if(dd.length < 2) {
            dd = "0"+dd;
        }
        if(mm.length < 2) {
            mm = "0"+mm;
        }
        if(hh.length < 2) {
            hh = "0"+hh;
        }
        if(mimi.length < 2) {
            mimi = "0"+mimi;
        }
        if(ss.length < 2) {
            ss = "0"+ss;
        }
        return dd+"."+mm+"."+yy+" "+hh+"."+ss;
    }
}

var date = new Date(new Date-1);                       // прошло меньше 1 секунды
document.write(formatDatev2(date)+"<br>");

var date = new Date(new Date-30*1000);                       // прошло меньше 1 минуты
document.write(formatDatev2(date)+"<br>");

var date = new Date(new Date-5*60*1000);                       // прошло меньше 1 часа
document.write(formatDatev2(date)+"<br>");

var date = new Date(new Date-86400*1000);                       // прошло больше 1 часа
document.write(formatDatev2(date)+"<br>");