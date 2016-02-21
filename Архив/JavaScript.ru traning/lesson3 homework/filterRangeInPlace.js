
/* PLAN
 * 1. Циклом for прошерстить полученный массив с цифрами, как только значение
 *        будет равно a, методом splice удалить все ячейки с индексами от 0
 *        до найденного индекса, завершить цикл.
 * 2. Повторить операцию. Только b вместо a, удалять все ячейки от найденного индекса+1,
 *        до length-1;
 */



/*
 * http://learn.javascript.ru/task/filtraciya-massiva-na-meste
 *
 * @author 4gekkman@gmail.com
 * @param object arr some array
 * @param number a some num
 * @param number b some mun
 */
function filterRangeInPlace(arr,a,b) {
    for(var i=0; i<arr.length; i++) {                     // 1
        if(arr[i] === a) {
            arr.splice(0,i);
        }
    }

    for(var i=0; i<arr.length; i++) {                     // 2
        if(arr[i] === b) {
            arr.splice(i+1,arr.length-1);
        }
    }
}
var numArr = [1,2,3,4,5,6,7,8,9,0];
document.write(numArr.join('\n')+'<br>');
filterRangeInPlace(numArr,3,8);
document.write(numArr.join('\n')+'<br>');