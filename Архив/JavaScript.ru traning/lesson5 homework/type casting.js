var arr = [];
arr[0] = [];
arr[1] = [];

arr[0].push("" + 1 + 0);    arr[1].push("'' + 1 + 0");
arr[0].push("" - 1 + 0);    arr[1].push("'' - 1 + 0");
arr[0].push(true + false);  arr[1].push("true + false");
arr[0].push(6 / "3");       arr[1].push("6 / '3'");
arr[0].push("2" * "3");     arr[1].push("'2' * '3'");
arr[0].push(4 + 5 + "px");  arr[1].push("4 + 5 + 'px'");
arr[0].push("$" + 4 + 5);   arr[1].push("'$' + 4 + 5");
arr[0].push("4" - 2);       arr[1].push("'4' - 2");
arr[0].push("4px" - 2);     arr[1].push("'4px' - 2");
arr[0].push(7 / 0);         arr[1].push("7 / 0");
arr[0].push(parseInt("09"));arr[1].push("parseInt('09')");
arr[0].push("  -9\n" + 5);  arr[1].push("'  -9\n' + 5");
arr[0].push("  -9\n" - 5);  arr[1].push("'  -9\n' - 5");
arr[0].push(5 && 2);        arr[1].push("5 && 2");
arr[0].push(2 && 5);        arr[1].push("2 && 5");
arr[0].push(5 || 0);        arr[1].push("5 || 0");
arr[0].push(0 || 5);        arr[1].push("0 || 5");
arr[0].push(null + 1);      arr[1].push("null + 1");
arr[0].push(undefined + 1); arr[1].push("undefined + 1");

for(var key in arr[0]) {
    document.write("<p>"+arr[1][key]+": -> &nbsp;&nbsp;&nbsp;&nbsp;"+arr[0][key]+"</p>");
}