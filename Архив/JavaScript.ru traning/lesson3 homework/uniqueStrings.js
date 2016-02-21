

/*
 * Get array of strings, return array with unique strings
 *
 * @author 4gekkman@gmail.com
 * @param object obj some object
 * @return object array with unique strings
 */
function uniqueStrings(arr) {
    var result = [], k = 0;
    for(var i=0; i<= arr.length-1; i++) {
        var check = 0;
        for(var j=0; j<= result.length-1; j++){
            if(result[j] === arr[i])
                check = 1;
        }
        if(!check) {
            result[k] = arr[i];
            k++;
        }
    }
    return result;
}
var strings = ["кришна", "кришна", "харе", "харе", "харе",
    "кришна", "кришна", "8-()"];
document.write(uniqueStrings(strings));