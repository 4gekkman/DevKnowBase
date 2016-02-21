

/* PLAN
 *
 * 1. Создать массив уникальных строк uniqueS. Создать копию массива arr
 *        arrCopy. Создать временную переменную для строки tempS.
 * 2. Циклом for пройти по массиву arrCopy, и на каждой итерации:
 *   2.1. Записать в tempS текущую строку.
 *   2.2. Применить к строке метод toLowerCase(), переведя ее в
 *        нижний регистр.
 *   2.3. Создать массив tempSArr
 *   2.4. Применить еще один цикл for и записать символы
 *        строки в массив tempSArr.
 *   2.5. Отсортировать массив методом sort()
 *   2.6. Методом join('') сделать строку из массива tempSArr,
 *        и присвоить ее переменной tempS.
 *   2.7. Циклом for пройтись по массиву uniqueS, сравнивая
 *        его элементы со строкой tempSArr. Если сходство найдено,
 *        то методом splice удалить элемент из массива arrCopy,
 *        и continue - к следующей итерации по arrCopy.
 *   2.8  Если нет, то после окончания цикла методом
 *        push() добавить в конец массива uniqueS строку tempS.
 * 3. Вернуть очищенный массив arrCopy.
 *
 */


/*
 * http://learn.javascript.ru/task/vyvesti-odnosvyaznyy-spisok
 *
 * @author 4gekkman@gmail.com
 * @param object arr some array
 * @return object cleaned_array without anagrams
 */
function removeAnagrams(arr) {
    var arrCopy = arr.slice(),                            // 1
        uniqueS = [],
        tempS = '';
    metka:
    for(var i=0; i<arrCopy.length; i++) {                 // 2
        tempS = arrCopy[i].toLowerCase();                 // 2.1, 2.2
        var tempSArr = [];                                // 2.3
        for(var j=0; j<tempS.length; j++) {               // 2.4
            tempSArr[j] = tempS[j];
        }
        tempSArr.sort();                                  // 2.5
        tempS = tempSArr.join('');                        // 2.6
        for(var j=0; j<uniqueS.length; j++) {             // 2.7
            if(uniqueS[j] === tempS) {
                arrCopy.splice(i,1);
                i--;
                continue metka;
            }
        }
        uniqueS.push(tempS);                              // 2.8
    }
    return arrCopy;                                       // 3
}

var arr = [
    "воз",
    "киборг",
    "корсет",
    "ЗОВ",
    "гробик",
    "костер",
    "сектор"
];

document.write(arr);
document.write("<br>");

var tmp = removeAnagrams(arr);
document.write(tmp);