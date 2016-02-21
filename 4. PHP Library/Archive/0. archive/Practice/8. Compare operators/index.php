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
 // операторы сравнения
 // == мягкое сравнение: если операнды разные, они приводятся к 1-му типу; см. табл. в раб.тет. специалиста
 // === жесткое сравнение: не приводит типы, а учитывает их; см. табл. в раб.тет. специалиста
 // != мягкое не равно
 // !== жесткое не равно
 // <  >  <=  >=

 // логические операторы
 // оператор или   ||   or
 // оператор и     &&   and
 // операторы and и or имеют почти самый низкий приоритет, в отличие от операторов && и ||
 $a = true;
 $b = true;
 $c = true;
 if($a && $b and $c)
  echo '$a && $b and $c == true';


 ?> 

 </body>
</html>
