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
// => в PHP есть разница между '' и ""
// =>

// объявить переменную и присвоить ей текст "Mary"
$text = "Mary";

// вставить $text с помощью '' и ""
echo "Привет, $text"; // вставляется содержание переменной
echo 'Привет, $text'; // вставляется название переменной

// тест переноса строки в '' и ""
echo "Привет,
Гарри";          // работает
echo 'Привет,
Джон';           // работает



?> 

 </body>
</html>
