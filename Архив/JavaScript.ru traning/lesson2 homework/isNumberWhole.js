

/*
 * Check if num is whole
 *
 * @author 4gekkman@gmail.com
 * @param {number} num any number
 * @return {boolean} true if yes, false if not, -1 if num is not a number
 */
function isNumberWhole(num) {
    if(typeof(num)!=="number") {
        return -1;
    }
    if(num.toString().indexOf(".")===-1) {
        return true;
    }
    return false;
}