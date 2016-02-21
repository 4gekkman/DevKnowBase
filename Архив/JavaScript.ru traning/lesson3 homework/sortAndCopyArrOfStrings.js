
/* PLAN
 * 1. Скопировать массив в другой методом slice
 * 2. Отсортировать
 * 3. Вернуть
 */


/*
 * http://learn.javascript.ru/task/skopirovat-i-otsortirovat-massiv
 *
 * @author 4gekkman@gmail.com
 * @param object obj some array
 * @return object copied and sorted array
 */
function sortAndCopyArrOfStrings(arr) {
    var tempArr = arr.slice();
    tempArr.sort(function sortStr(a,b) {
    if(a>b) { return +1; }
    if(a<b) { return -1; }
    if(a===b) { return 0; }
    })
    return tempArr;
}


var arr = [ "html", "JavaScript", "HTML 5" ];
document.write(arr.join('\n')+"<br>");

var arr2 = sortAndCopyArrOfStrings(arr);
document.write(arr2.join('\n')+"<br>");