

/*
 * http://learn.javascript.ru/task/sluchajnyj-poryadok-v-massive
 *
 * @author 4gekkman@gmail.com
 * @param object obj some object
 */
function shakeNumsInArr(arr) {
    arr.sort(function sortMehod(a,b) {
        return -1.5 + Math.random()*(3);
    });
}
var arr = [1,2,3,4,5];
document.write(arr.join('\n')+"<br>");

shakeNumsInArr(arr);
document.write(arr.join('\n')+"<br>");
