
/*
 * Calculate fibonacci number with Bine formula
 *
 * @author 4gekkman@gmail.com
 * @param number order_number of fibonacci's number
 * @return number fibonacci_number, if order_number <= 0,
 * returns -1;
 */
function getFibonacciByBine(num) {
    if(num <= 0) {
        return -1;
    }
    if(num === 1) {
        return 0;
    }
    if(num === 2 || num === 3) {
        return 1;
    }
    var fi = (1 + Math.sqrt(5)) / 2, num = num - 1;
    var fi = (1 + Math.sqrt(5)) / 2;
        return (Math.pow(fi,num) - (Math.pow(-fi,-num))) / (2*fi - 1);
}
alert(getFibonacciByBine(20));