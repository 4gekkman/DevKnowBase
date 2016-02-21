define(function() {
    return function(arr, func) {
        var result = [];

        for (var i = 0; i < arr.length; i++) {
            var val = arr[i];
            if (func(val)) {
                result.push(val);
            }
        }

        return result;
    };
});