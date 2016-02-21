

/*
 * http://learn.javascript.ru/task/perevesti-tekst-vida-border-left-width-v-borderleftwidth
 *
 * @author 4gekkman@gmail.com
 * @param string str some string
 * @return string string
 */
function camelize(str) {
    /*
      Идея:
      0. Переведем строку в нижний регистр фукнцией toLowerCase()
      1. Пройдем циклом по строке, с помощью функции charAt() идентифицируем
          все '-', и запишем новый массив.
      2. В новом массиве все следующие за '-' символы переведем в верхний регистр
     */
    str.toLowerCase();
    var result = '';
    for(var i = 0; i<=str.length-1; i++) {
        if(str.charAt(i) === '-') {
            result += str.charAt(i+1).toUpperCase();
            i++;
            continue;
        }
        result += str.charAt(i);
    }
    return result;
}

var str = "Маша-любит-кашу";
document.write(str+"<br>");

str = camelize(str);
document.write(str);