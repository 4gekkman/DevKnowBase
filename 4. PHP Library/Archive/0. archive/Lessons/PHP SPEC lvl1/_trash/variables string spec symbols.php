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
// => в PHP есть следующие специальные символы:
//        \n новая строка
//        \r возврат каретки
//        \t горизонтальная табуляция
//        \\ обратная косая черта
//        \$ знак доллара
//        \" двойная кавычка
// => экранирование работает только в ""
// => экранирование делается с помощью символа \


// эхом вывести строку с заэкранированными спец. символами
echo "Строка \n \r белка \t \\ \$ \" название \"";

?> 

 </body>
</html>
