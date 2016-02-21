
document.write("<h1>Шахматная доска</h1>");

var color1 = "#ffffff";
document.write("<table style=\"border-collapse: collapse; border: 1px solid black;\">");
for(var i = 0; i <= 8; i++) {
    document.write("<tr>")
    for(var j = 0; j <=8; j++) {
        (color1 === "#ffffff") ? color1="#000000" : color1="#ffffff";
        document.write("<td style='border: 1px solid black; width: 50px; height: 50px; background: "+color1+";'></td>");
    }
    document.write("</tr>")
}
document.write("</table>");