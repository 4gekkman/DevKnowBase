
/*
 * Check if str consists 'xxx' or 'viagra' in any case
 *
 * @author 4gekkman@gmail.com
 * @param {string} str any string
 * @return {boolean} true if yes, false if not,
 * and -1 if param is not a string
 */
function checkSpam(str) {
    if(typeof(str) !== "string") {
        return -1;
    }
    if(str.toLowerCase().indexOf("xxx")!==-1 ||
       str.toLowerCase().indexOf("viagra")!==-1) {
        return true;
    }
    return false;
}