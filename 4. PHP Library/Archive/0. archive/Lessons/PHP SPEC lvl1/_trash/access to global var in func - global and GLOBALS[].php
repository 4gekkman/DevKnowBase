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

// info
// => для доступа к глобальным переменным в функциях используется
//    ключевое слово global
// => доступ ко всем ГП можно получить также через специальный массив $GLOBALS['']

// доступ к ГП через ключевое слово global
$x = 5; $y = 10;
function myFunc() {
    global $x, $y;
    $y = $x + $y;
}
myFunc();
echo $y;

// доступ к ГП через массив GLOBALS
$x = 5; $y = 10;
function myFunc2() {
    $GLOBALS['y'] = $GLOBALS['y'] + $GLOBALS['x'];
}
myFunc2();
echo $y;
?> 

 </body>
</html>
