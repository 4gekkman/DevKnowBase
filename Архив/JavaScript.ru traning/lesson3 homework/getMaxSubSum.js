


/*
 * http://learn.javascript.ru/task/podmassiv-naibolshej-summy
 *
 * @author 4gekkman@gmail.com
 * @param object arr some array
 * @return number sum
 */
function getMaxSubSum(arr) {
    var maxSum = 0,
    result = 0;
    for(var i=0; i<=arr.length-1; i++) {
        result = 0;
        for(var j = i; j<=arr.length-1; j++) {
            result += arr[j];
            maxSum = Math.max(maxSum,result);
        }
    }
    return maxSum;
}

var arr = [1,2,-3,4,5];
document.write(getMaxSubSum(arr));