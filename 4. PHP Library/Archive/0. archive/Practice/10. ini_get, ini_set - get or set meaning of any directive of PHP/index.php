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
 // ini_get('Имя директивы') - получить значение директивы PHP, возвращает строку
 // посмотреть все директивы можно функцией phpinfo()
 // например, переменная post_max_size (мах размер данных из формы) - там может быть, примеры:
 // 232525235    500KB     8M      1G

 $size = ini_get('post_max_size');
 echo "$size<br>";
 $lastSymbol = $size{strlen($size)-1};
 if($lastSymbol === "G") {
     $size = (int)$size*1024*1024*1024;
     echo "В байтах это $size";
 }
 else if($lastSymbol === "M") {
     $size = (int)$size*1024*1024;
     echo "В байтах это $size";
 }
 else if($lastSymbol === "B") {
     $size = (int)$size*1024;
     echo "В байтах это $size";
 }
 else {
     $size = (int)$size;
     echo "В байтах это $size";
 }
 ?>

 </body>
</html>
