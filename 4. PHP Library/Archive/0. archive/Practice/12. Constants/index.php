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
 // - задаются функцией define('Aaa',100);
 // - общепринято писать с большой буквы
 // - нельзя присвоить, переприсвоить значение или удалить, константа существует до конца кода
 // - константы регистрозависимы

 // создание константы
 define("Aconstant", 100);

 // проверка свободности имени перед созданием    если оно не свободно, константа не создастся
 if(!defined("Aconstant1"))
     define("Aconstant1", 200);

 // константа может содержать следующие типы данных
 define("A1",1); echo "<p>".A1."</p>";
 define("B1",'John'); echo "<p>".B1."</p>";
 define("C1",true); echo "<p>".C1."</p>";
 define("D1",null); echo "<p>".D1."</p>";
 define("E1",1.53); echo "<p>".E1."</p>";

 // сделать константу регистронезависимой
 define("Aconst",5,true);  // надо в конце добавить true

 // шутка над программистом
 define("true",false,true);
 define("false",true,true);

 ?> 

 </body>
</html>
