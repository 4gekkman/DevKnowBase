
var arr = ["a","bb",3];


/*
 * Looking value in array. If not found, returns
 *
 * @author 4gekkman@gmail.com
 * @param object obj some array
 * @param value
 * @return number of position of founded element, or -1 if not founded
 */
function findArrValue(arr,val) {
    for(var i = 0; i<=arr.length-1; i++) {
        if(arr[i]===val) {
            return i;
        }
    }
    return -1;
}
alert(findArrValue(arr,"bb"));