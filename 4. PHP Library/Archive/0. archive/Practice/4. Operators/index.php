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
 // Арифметические операторы
 // +  -  *  /  %    +=  -=  *=  /=

 // Если один из операндов справа или слева не число, PHP приведет к числу
 $a = true;  // приведется к числу 1
 $c = $a * 10; // 10

 $a = false;  // приведется к числу 0
 $c = $a * 10;  // 0

 $a = '5';  // приведется к числу 5
 $c = $a * 10;  // 50

 $a = 'John';  // приведется к 0
 $c = $a * 10;  // 0

 $a = '5John';  // 5  -  проверяет слева направа, пока не упрется не в цифру
 $c = $a * 10;  // 50


 ?> 

 </body>
</html>
