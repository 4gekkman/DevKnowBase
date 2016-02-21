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
 // полезные функции

 // isset(a) - сообщает, существует ли переменная
 // (как реагирует на разные значения см. таблицу в раб. тетради курса специалиста)
 $var1; isset($var1); // false
 $var2 = 10; isset($var2); // true

 // empty(a) - сообщает, пустая ли переменная
 // (как реагирует на разные значения см. таблицу в раб. тетради курса специалиста)
 $var3 = "0"; empty($var3); // true

 // gettype(a) - возвращает строку с типом переменной (примеч.: вместо float возвращает double)
 $varBool = true;
 $varAbs = 1.53;
 echo gettype($varBool); // boolean
 echo "<p>",gettype($varAbs),"</p>"; // double
 echo "<p>",gettype($BBBBB),"</p>"; // NULL

 // settype(a,b) - конвертирует переменную в другой тип
 $a = '10';
 settype($a, 'integer');
 echo "<p>",gettype($a),"</p>"; // была string, стала integer

 // опасность settype(a,b)
 $a='10John';
 settype($a,'integer');
 echo "<p>",gettype($a)," $a</p>"; // была string, стала integer 10, а John улетел
 settype($a,'string');
 echo "<p>",gettype($a)," $a</p>"; // была integer 10, стала string '10', а John улетел

 // приведение типа (casting)
 $a = '10John';
 echo (integer)$a; // берет значение, приводит к типу и выводит; значение в $a не изменяется
 echo $a;


 ?>

 </body>
</html>
