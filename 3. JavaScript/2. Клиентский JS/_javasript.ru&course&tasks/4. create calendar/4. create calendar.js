

// создает текстовую строку для календаря и сует в элемент с id
function createCalendar(id,yy,mm) {
    var myDate = new Date(yy,mm-1);  // получить дату
    var s = '';                      // здесь будет результирующая строка с кодом
    s += "<table><tr><th id='1'>ПН</th><th id='2'>ВТ</th><th id='3'>СР</th><th id='4'>ЧТ</th><th id='5'>ПТ</th><th id='6'>СБ</th><th id='0'>ВС</th></tr>";

    var marker = false; var marker2 = false;
    var colId = 1;                         // для определения колонки
    for(var i=1; i<=42; i++) {
        myDate.setDate(i);                 // установить дату = i
        if(myDate.getMonth() != mm-1) break;
        var dayOfWeek = myDate.getDay();   // от 0 до 6

        if(marker2 == false) {  // если 1 число
            // создать новую строку
            s += "<tr>";
            marker2 = true;
        }
        if(myDate.getDay() == 1) {  // если понедельник
            // создать новую строку
            s += "</tr><tr>";
        }

        if(dayOfWeek == colId || marker == true) {
            s += "<td>"+i+"</td>";
            marker = true;
        } else {
            s += "<td></td>";
            i--;
        }

        if(colId == 6)
            colId = 0;
        else
            colId++;
    }
    s += "</tr></table>";


    var e = document.createElement('temp');
    e.innerHTML = s;
    document.getElementById(id).appendChild(e.firstChild);
}
createCalendar('myID',2013,5);