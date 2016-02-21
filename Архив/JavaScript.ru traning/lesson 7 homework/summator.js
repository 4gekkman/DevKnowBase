
function Summator() {
    this.sum = function(a,b) {
        return a + b;
    };
    this.run = function() {
        var a = +prompt("a = ","");
        var b = +prompt("b = ","");
        return this.sum(a,b);
    };
}

var obj = new Summator();
alert(obj.sum(5,10));
alert(obj.run());
