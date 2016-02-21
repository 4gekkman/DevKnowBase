
/*
 * Convert 1 symbol of str to upper case, and to lower case the rest.
 *
 * @author 4gekkman@gmail.com
 * @param {string} str any string
 * @return {string} modified string or -1 if param is not a string
 */
function make1UpperCaseAndLowerCaseRest(str) {
    if(typeof(str) !== "string") {
        return -1;
    }
    return str.charAt(0).toUpperCase() +
        str.substr(1).toLowerCase();
}


