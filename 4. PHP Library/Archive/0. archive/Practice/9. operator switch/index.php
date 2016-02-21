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
 // оператор switch
 $a = 78;
 switch($a) {
     case 0:
     case 1:  echo "0 и 1"; break;
     case 2:  echo "2"; break;
     case 3:  echo "3"; break;
     default:  echo "Дефолт";
 }
 ?> 

 </body>
</html>
