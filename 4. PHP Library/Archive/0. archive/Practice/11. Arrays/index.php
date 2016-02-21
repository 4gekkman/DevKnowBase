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
 // Массивы
 // нумерация ячеек начинается с 0
 // автоматическая нумерация: если в массив вкладывается новое значение без индекса,
   //то индекс автоматом задается +1 к наибольшему из всех пройденных ранее
 // объявим массив и положим туда 5 переменных разных типов
 $testArray[] = "John";
 $testArray[] = "root";
 $testArray[] = '1234';
 $testArray[] = 25;
 $testArray[] = true;

 // подсчет ячеек массива
 echo count($testArray);  // 5

 // получение значений из ячеек массива с помощью цикла
 echo "<br>Вывод массива циклом <br>";
 for($i=0;$i<=5;$i++){
     echo "<br>","$testArray[$i]";
 }

 // получение значений ячеек массива функцией print_r
 echo "<pre> Вывод массива функцией print_r <br>";
 print_r($testArray);
 echo "</pre>";

 // получение значений ячеек массива функцией var_dump
 echo "<pre> Вывод массива функцией var_dump <br>";
 var_dump($testArray);
 echo "</pre>";

 // создание массива функцией array()
 $testArray1 = array(
     10=>"John",         // с помощью => присваивается индекс ячейки
     10=>"root",
     '1234',
     25,
     true
                    );

 // ассоциативные массивы - задание имен вместо индексов
 // массивы могут быть смешанного типа - индексированный + ассоциативный
 // при инициализации ключи надо брать в кавычки обязательно, т.к. может быть такая константа
 $testArray2 = array(
     'name'=>"John",     // вместо индекса задаем ключ с помощью =>
     'login'=>"root",
     ' pass'=>'1234',
     4=>25,              // в этом же массиве этой ячейке задаем индекс
     true
                    );
 echo $testArray2['name'];
 echo "<br>";
 echo $testArray2[name]; // кавычки не необходимы при обращении к ключу ассоциативного массива

 // не перепутать строку с массивом
 $str = "John";
 echo $str{0};  // J    эта и нижняя записи идентичны, возвращают 1-ю букву строки
 echo $str[0];  // J    похоже на массив, но нет, это строка; осторожно!


 // многомерные массивы    вложенность массивов не ограничена
 // двухмерный массив
 $array2m = array(
     0 => array(
         "login" => "Admin",
         "password" => "12345"),
     1 => array(
         "login" => "John",
         "password" => "54321")
 );

 // обращение к ячейке двухмерного массива
 echo "<p>{$array2m[0][login]}</p>";



 ?>




 </body>
</html>
