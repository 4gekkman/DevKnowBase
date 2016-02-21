define(["filter","inArray","inBetween"], function(filter, inArray, inBetween) {

    return function(arr) {
        alert( filter(arr, function(a) { return a % 2 == 0 }) ); // 2,4,6

        alert( filter(arr, inBetween(3,6)) ); // 3,4,5,6

        alert( filter(arr, inArray([1,2,10])) ); // 1,2
    }

});