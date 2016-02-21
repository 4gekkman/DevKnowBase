

/*
 * Calculate fibonacci number with searching
 *
 * @author 4gekkman@gmail.com
 * @param number order_number of fibonacci's number
 * @return number fibonacci_number
 */
function getFibonacciBySearching(num) {
    var fib1 = 0,
        fib2 = 1,
        result = 0;
    for(var i = 3; i <= num; i++) {
        result = fib1+fib2;
        fib1=fib2;
        fib2=result;
    }
    return result;
}
alert(getFibonacciBySearching(20));