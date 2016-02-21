
var text;
var num = prompt("Сколько девушек ты соблазнил в этом месяце?","");
num = parseInt(num,10);


switch(num) {
    case 1: text="девушку"; break;
    case 2:
    case 3:
    case 4: text="девушки"; break;
    default: text="девушек";
}

document.write("В этом месяце я соблазнил "+num+" "+text+"!");
