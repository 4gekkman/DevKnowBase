

/*
 * Calculate fibonacci number with recursion
 *
 * @author 4gekkman@gmail.com
 * @param number order_number of fibonacci's number
 * @return number fibonacci_number, if order_number <= 0,
 * returns -1;
 */
function getFibonacciByRecursion(num) {
    if(num === 1) {
        return 0;
    }
    if(num===2 || num===3) {
        return 1;
    }
    return (num === 1) ? 0 :
           (num === 2 || num===3) ? 1 :
           (num > 3) ? getFibonacciByRecursion(num-1) +
                       getFibonacciByRecursion(num-2) : -1;
}
alert(getFibonacciByRecursion(20));