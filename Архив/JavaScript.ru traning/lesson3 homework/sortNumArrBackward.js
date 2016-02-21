

/*
 * http://learn.javascript.ru/task/sortirovat-v-obratnom-poryadke
 *
 * @author 4gekkman@gmail.com
 * @param object obj some object
 * @param string cls some string
 * @return boolean 0 if no cls in obj, 1 if success
 */
function sortNumArrBackward(arr) {
    arr.sort(function comp(a,b) {return b-a});
}
var numArr = [5,2,1,-10,8];
document.write(numArr.join('\n')+"<br>");
sortNumArrBackward(numArr);
document.write(numArr.join('\n'));