


/*
 * Gets decimal part of decimal number
 *
 * @author 4gekkman@gmail.com
 * @param {number} decimalnumber any number
 * @param {number} accuracy whole number
 * @return {number}
 * -1 if argument type is not number,
 * 0 if number is whole,
 * decimal part of number if argument is decimal number
 */
function getDecimal(decimalnumber, accuracy) {
    if(typeof(decimalnumber) !== "number") {
        return -1;
    }
    if(decimalnumber.toString().indexOf(".")===-1) {
        return 0;
    }
    accuracy = Math.round(accuracy).toFixed(0);
    return (decimalnumber - decimalnumber.toFixed(0)).toFixed(accuracy);
}
alert(getDecimal(5.12345678,8));