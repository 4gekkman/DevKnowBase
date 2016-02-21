

/*
 * Check str length, if it > maxlength
 * set str length equal to maxlength, and
 * set ... in the end of str
 *
 * @author 4gekkman@gmail.com
 * @param {string} str any string
 * @param {number} integer (whole) number
 * @return {string} modified string or -1 if str is not a string,
 * or if maxlength not a whole number, or if maxlength <= 0
 */
function truncate(str, maxlength) {
    if(typeof(str) !== "string") {
        return -1;
    }
    if(isNumberWhole(maxlength) === -1 ||
       isNumberWhole(maxlength) === false) {
        return -1;
    }
    if(maxlength <= 0) {
        return -1;
    }
    if(str.length > maxlength) {
        return str.slice(0,maxlength-1)+"&#133;";

    }
}