define(function () {
    return function(arr) {
        return function (x) {
            return arr.indexOf(x) != -1;
        };
    };
});