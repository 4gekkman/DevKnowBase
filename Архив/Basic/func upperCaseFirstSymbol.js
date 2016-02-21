


/*
 * Функция возвращает строку, с
 * 1-ым символом в верхнем регистре,
 * остальными символами в нижнем регистре.
*/
function upperCaseFirstSymbol(str) {
    var text = str.toLowerCase();
    var len = str.length;
    var result = text.charAt(0).toUpperCase();

    if(str==='')
        return '';
    else if(str.length === 1) {
        return result;
    } else {
        for(var i = 1; i<=len-1; i++) {
            result+=text.charAt(i);
        }
        return result;
    }
}

// тест функции
var text1 = '';
var text2 = 'a';
var text3 = 'ab';
var text4 = 'abcde';
alert(upperCaseFirstSymbol(text1));
alert(upperCaseFirstSymbol(text2));
alert(upperCaseFirstSymbol(text3));
alert(upperCaseFirstSymbol(text4));