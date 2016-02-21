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

// константы
echo 'Powered by PHP '.PHP_VERSION.' on '.PHP_OS;

// псевдоконстанты
echo __LINE__."<br>";  // номер строки
echo __FILE__."<br>";  // полный путь к файлу
echo __DIR__."<br>";   // полный путь к директории

function foo() {
    echo __FUNCTION__."<br>";   // имя внешней функции
}
foo();

?> 

 </body>
</html>
