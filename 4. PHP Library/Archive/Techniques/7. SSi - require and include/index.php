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

   .top {
       width: 900px;
       height: 100px;
       margin: 0 auto;
       border: 1px solid black;
   }

   .bottom {
       width: 900px;
       height: 100px;
       margin: 0 auto;
       border: 1px solid black;
   }

   .content {
       width: 900px;
       height: 100px;
       margin: 0 auto;
       border: 1px solid black;
   }

   li {
       list-style-type: none;
       display: inline;
       margin-right: 20px;
   }
   
  </style>   
 </head>
 <body>

<?php
/* --------------------------------------------------
---------------- Т Е Х Н И К А ----------------
7. Использование подключаемых файлов для хранения различных частей ВЕБ-приложения

> include - для включения файла в указанное место.
  > Если файл не найден, то ничего страшного. Будет warning, скрипт продолжает выполнение.
> require - для включения файла в указанное место.
  > Если файл не найден, то конец. Будет fatal error, скрипт будет остановлен.

---------------------------------------------- */

require "data.inc.php";      // скрипт с различной информацией
require "top.inc.php";       // блок с шапкой и меню
require "content.inc.php";   // блок с контентом
include "bottom.inc.php";    // блок с подвалом


?> 

 </body>
</html>
