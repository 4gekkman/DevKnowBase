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

class foo {}


$str = "John";         // строка                string
$a = 10;               // число                 integer
$b = 20.56;            // дробное число         double
$bool = true;          // буль                  boolean
$arr = array(1,2,3);   // массив                array
$obj = new foo;        // объект                object
$nul = null;           // null                  NULL

echo "Тип переменной str типа 'строка': <b>".
    gettype($str)."</b><br>";
echo "Тип переменной a типа 'число': <b>".
    gettype($a)."</b><br>";
echo "Тип переменной b типа 'дробное число': <b>".
    gettype($b)."</b><br>";
echo "Тип переменной bool типа 'буль': <b>".
    gettype($bool)."</b><br>";
echo "Тип переменной arr типа 'массив': <b>".
    gettype($arr)."</b><br>";
echo "Тип переменной obj типа 'объект': <b>".
    gettype($obj)."</b><br>";
echo "Тип переменной nul типа 'null': <b>".
    gettype($nul)."</b><br>";



?> 

 </body>
</html>
