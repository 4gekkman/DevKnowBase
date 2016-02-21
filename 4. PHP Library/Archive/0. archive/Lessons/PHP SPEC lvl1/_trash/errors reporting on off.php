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
 // => парсинг - до выполнения кода PHP просматривает его, нет ли ошибок
 // => типы возможных ошибок:
 //    PARSE (константа E_PARSE) - ошибка при парсинге (до выполнения кода)
 //    FATAL ERROR (константа E_ERROR) - ошибка при выполнении кода (напр. откр. файла, которого нет)
 //        выполнение кода прекращается.
 //    WARNING (константа E_WARNING) - тоже такая ошибка-предупреждение при выполнении
 //        выполнение кода продолжается.
 //    NOTICE (константа E_NOTICE) - легкое предупреждение
 // => в php.ini по умолчанию включен вывод в браузер всех ошибок,
 //        кроме NOTICE
 // => вывод в браузер ошибок типа PARSE запретить нельзя


 // включить вывод инфоормации об ошибках в браузер
 error_reporting(E_ALL);

 // отключить вывод информации об ошибках в браузер
 error_reporting(0);

 // включить вывод ошибок типа FATAL ERROR
 error_reporting(E_ERROR);

 // включить вывод ошибок типа WARNING
 error_reporting(E_WARNING);

 // включить вывод ошибок типа NOTICE
 error_reporting(E_NOTICE);

 ?> 

 </body>
</html>
