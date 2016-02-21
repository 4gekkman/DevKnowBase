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

 <!-- Обработка формы методом GET -->
 <p>Обработка формы методом GET</p>
 <form action="<?=$_SERVER['PHP_SELF']?>" method='get'>
     <input type='text' name='name' /><br>
     <input type='text' name='age' /><br>
     <input type='submit' /><br>
 </form>
 <?php
 $name = $_GET['name'];
 $age = abs((int)($_GET['age']));

 // вырежем все теги из текста
 $name = strip_tags($name);
 $age = strip_tags($age);

 // обрежем пробелы справа и слева
 $name = trim($name);
 $age = trim($age);

 // выведем данные
 echo '<p>Ваше имя: ' . $name;
 echo '<p>Ваш возраст: ' . $age;
 ?>

 <!-- обработка формы методом POST -->
   <!-- обратите внимание на отсутствие query_string в адресной строке -->
 <br><br><p>Обработка формы методом POST</p>

 <?php
 if ($_SERVER['REQUEST_METHOD'] == "POST") {
     $name = $_POST['name'];
     $age = abs((int)($_POST['age']));
 }
 ?>

 <form action="<?=$_SERVER['PHP_SELF']?>" method='post'>
     <input type='text' name='name' value='<?=$name?>' /><br>
     <input type='text' name='age' value='<?=$age?>' /><br>
     <input type='submit' /><br>
 </form>

 <?php
 if ($name and $age) {
     $name = $_POST['name'];
     $age = abs((int)($_POST['age']));

     // вырежем все теги из текста
     $name = strip_tags($name);
     $age = strip_tags($age);

     // обрежем пробелы справа и слева
     $name = trim($name);
     $age = trim($age);

     // выведем данные
     echo '<p>Ваше имя: ' . $name . '</p>';
     echo '<p>Ваш возраст: ' . $age . '</p>';
 }
 ?>

<?php
?> 

 </body>
</html>
