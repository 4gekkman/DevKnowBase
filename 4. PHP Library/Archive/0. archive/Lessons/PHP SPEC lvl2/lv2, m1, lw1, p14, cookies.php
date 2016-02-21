<?php

/* INFO
 * 1. Создаем переменную для счетчика посещений
 * 2. Если в глобальном массиве $_COOKIE уже содержится с прошлого
 *     раза эта переменная,
 * 3. Присвоить ее значение созданной в 1 шаге.
 * 4. Учесть текущее посещение и увеличить счетчик на 1
 */
$cnt = 0;                           // 1
if(isset($_COOKIE['cnt'])) {        // 2
    $cnt = $_COOKIE['cnt'];         // 3
}
$cnt++;                             // 1

/* INFO
 * 1. Создаем переменную lvt - last visit time
 * 2. Если в глабальном массиве $_COOKIE уже есть такая,
 *     присваиваем данные созданной на 1-м шаге переменной
 */
$lvt = 0;                        // 1
if(isset($_COOKIE['lvt'])) {     // 2
    $lvt = $_COOKIE['lvt'];
}

/* INFO
 * 1. Записываем в куку количество посещений, на 1 час
 * 2. Записываем в куку дату и время последнего посещения, на 1 час
 */
setcookie('cnt',$cnt, time()+3600);                  // 1
setcookie('lvt',date('Y-m-d H:i:s'), time()+3600);   // 2

?>




<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8" />
    <title>  </title>
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <style>
        article,aside,details,figcaption,figure,
        footer,header,hgroup,menu,nav,section {
            display:block;
        }



    </style>
</head>
<body>

<?php

if($cnt == 1) {
    echo "Вы зашли на страницу в первый раз, поздравляю!";
} else if($cnt > 1) {
    echo "Вы зашли на страницу $cnt раз";
}
echo "<br>";
echo "В последний раз Вы были здесь $lvt";

?>


</body>
</html>