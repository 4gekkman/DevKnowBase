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
// => в PHP нет типа 'символ', есть только тип строка
// => получить доступ к символу строки можно с помощью {}
// => в отличие от JS, в строке PHP можно заменять отдельные символы

// вычислить длину строки и вывести результат
$text = "Dao Bao";
$len = strlen($text);
echo $len;

// вывести 1-й символ строке $text
echo $text{0};

// заменить 1-ю букву строки $text на 'G';
$text{0} = G;
echo $text;
?> 

 </body>
</html>
