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
// => техника heredoc выводит текст в html так, как он выглядит,
//    а не в одну строку.

// эхом вывести произвольный текст
echo <<< LABEL
Здесь написан произвольный текст,<br>
в нем используются символы типа $ и "",<br>
можно так '', или вставить слэшей \ \ \ \<br>
Все выводится так, как я написал в коде,<br>
без экранирований.<br>

LABEL;


?> 

 </body>
</html>
