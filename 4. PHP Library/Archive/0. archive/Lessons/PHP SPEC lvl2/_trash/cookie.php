<?php
$visitCounter = 0;
if(isset($_COOKIE['visitCounter'])) {
    $visitCounter = $_COOKIE['visitCounter'];
}
$visitCounter++;

if(isset($_COOKIE['lastVisit'])) {
    $lastVisit = $_COOKIE['lastVisit'];
}

setcookie("visitCounter",$visitCounter,0x7FFFFFFF);
setcookie("lastVisit",date("d-m-Y H:i:s"),0x7FFFFFFF);

/* ЗАДАЧА
 *
 * Когда посетитель открывает страницу выводить ему,
 *     в какой раз он уже пришел, и когда последний раз
 *     был. Использовать куки.
 */
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
if($visitCounter === 1) {
    echo "Приветик! Вы у нас в первый раз!";
} else {
    echo "<p>Вы пришли в $visitCounter раз!</p>";
    echo "<p>Последний раз вы были в $lastVisit</p>";
}
?> 

 </body>
</html>
