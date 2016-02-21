
/*
 * Looking for numbers in arr and return arr of founded numbers
 *
 * @author 4gekkman@gmail.com
 * @param object obj some array
 * @return object array of numbers
 */
function getNumbersFromArr(arr) {
    var result = []; var j = 0;

    for(var i = 0; i <= arr.length-1; i++) {
        var temp = parseInt(arr[i]);
        if(!isNaN(temp)) {
            result[j] = temp;
            j++;
        }
    }
    return result;
}

var somearr = ["12px", 55, "sd34"];
document.write(getNumbersFromArr(somearr));