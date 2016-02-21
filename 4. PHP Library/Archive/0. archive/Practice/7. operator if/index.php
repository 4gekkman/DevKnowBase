<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8"/>
    <title></title>
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <style>
        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
            display: block;
        }


    </style>
</head>
<body>

<?php

// в if может быть что угодно
if(2+100/50+strlen($a)) {  // все это вычисляется и приводится к типу boolean

}

// if ... else
$shop = true;
$kiosk = false;
if($shop) {
    echo "Иду в магазин<hr>";
} elseif($kiosk) {            // !! оператор elseif
    echo "Иду в киоск<hr>";
} else {
    echo "Иду в другой киоск<hr>";
}
echo "Иду домой<hr>";

// сокращенное написание if...else     ТЕРНАРНЫЙ ОПЕРАТОР
echo ($shop) ? "Иду в магазин<hr>" : "Иду в киоск<hr>";

?>

</body>
</html>
