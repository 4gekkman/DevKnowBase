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
// - суть технологии SSi в том, что на сервере несколько php файлов склеиваются
//       в один.
// - include; для вставки файлов используется языковая конструкция include. Если такого
//       файла не будет, будет ошибка типа WARNING
// - include_once; подключает только, если ранее файл с таким имене мне подключался.
// - require; еще можно использовать конструкцию require. Если такого файла не будет,
//       будет ошибка типа FATAL ERROR
// // - require_once; подключает только, если ранее файл с таким имене мне подключался.
// - чтобы от require не было такой ошибки, можно поставить перед ним собаку
// - включаемые файлы содержат в названии inc - это указывает на несамостоятельность
//       данного файла


include "hedd.inc.php";

echo "<p>Тело сайта</p>";

@require "basement.inc.php";
?> 

 </body>
</html>
