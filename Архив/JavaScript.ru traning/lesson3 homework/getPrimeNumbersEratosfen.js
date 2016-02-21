

/*
 * Gets prime numbers from 0 to n, using Eratosfen algorithm
 *
 * @author 4gekkman@gmail.com
 * @param number n
 * @return object array suggests prime numbers
 */
function getPrimeNumbersEratosfen(n) {

    // список чисел от 2 до n
    var arr1 = [];
    for(var i=2; i<=n; i++) {
        arr1[i-2] = i;
    }

    // пусть p=2 первое простое число
    var p = 2;

    while(Math.pow(p,2) <= n) {
        // заменим все числа с разницей в p в списке на "notprime"
        for(var i = p+p; i<=n; i=i+p) {
            arr1[i-2] = "notprime";
        }

        // поменяем значение p на первое незачеркнутое после p
        for(var i = p+1; i<=n; i++) {
            if(arr1[i-2] !== "notprime") {
                p = arr1[i-2];
                break;
            }
        }

    }

    var result = []; var j = 0;
    for(var i = 2; i<=n; i++) {
        if(arr1[i-2] !== "notprime") {
            result[j] = arr1[i-2];
            j++;
        }
    }
    return result;
}

document.write(getPrimeNumbersEratosfen(100));