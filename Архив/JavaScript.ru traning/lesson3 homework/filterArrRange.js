

/*
 * Return arr in range from a to b. Not changing original arr.
 *
 * @author 4gekkman@gmail.com
 * @param object obj some array
 * @param a
 * @param b
 * @return number of position of founded element, or -1 if not founded
 */
function filterArrRange(arr,a,b) {
    var filtArr = [];
    var j = 0;
    for(var i = 0; i <= arr.length-1; i++) {
        if(i>=a && i<=b) {
            filtArr[j] = arr[i];
            j++;
        }
    }

    return filtArr;
}
var arr = [1,2,3,4,5];
alert(filterArrRange(arr,1,3));