define(function () {
    return function(a, b) {
        return function (x) {
            return x >= a && x <= b;
        };
    }
});