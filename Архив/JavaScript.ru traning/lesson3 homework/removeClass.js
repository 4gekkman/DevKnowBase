

/*
 * 1. Создать массив и записать в него разбитую методом split на отдельные
 *        составляющие строку с классами.
 * 2. Циклом for пройти массив, в результате получить ключи-индексы,
 *        значения которых равны cls. Если таких не найдено, функция
 *        возвращает 0. А если не 0, то 1.
 * 3. Воспользоваться методом splice, найденными индексами, и удалить
 *        из массива элементы с этими индексами. При каждом удалении
 *        нужно вычитать 1 из всех значений в массиве ключей-индексов.
 * 4. Методом join склеить массив, и присвоить результат свойству
 *        obj.className
 */

/*
 * http://learn.javascript.ru/task/funkciya-removeclass
 *
 * @author 4gekkman@gmail.com
 * @param object obj some object
 * @param string cls some string
 * @return boolean 0 if no cls in obj, 1 if success
 */
function removeClass(obj, cls) {
    var classesArr = obj.className.split(" ");   // 1

    var keysIndexes = [];                        // 2
    for(var i=0; i<classesArr.length; i++) {
        if(classesArr[i] === cls) {
            keysIndexes.push(i);

        }
    }

    var check = false;                           // 3
    var count = 0;
    for(var key in keysIndexes) {     // проверка на пустоту
        check = true;
        classesArr.splice(keysIndexes[key]-count,1);
        count++;
    }

    obj.className = classesArr.join(' ');

    if(check)
        return 1;
    else
        return 0;
}

var obj = {
    className: 'open menu menu'
}
removeClass(obj,'menu');
document.write(obj.className);