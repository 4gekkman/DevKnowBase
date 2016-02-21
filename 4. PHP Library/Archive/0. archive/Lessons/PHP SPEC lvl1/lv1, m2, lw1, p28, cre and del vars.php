

<?php
/* ABOUT
 *
 * Создание и удаление переменных
 */




    /* INFO
     * 1. Создаем 2 переменные, и присваиваем им 2
     *     значения
     */
    $name = 'Герыч';   // 1
    $age = '26';
?>


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
    /* INFO
     * 1. Выводим данные на экран с помощью echo
     * 2. Удаляем переменную $age
     */
    echo "Меня зовут: $name";   // 1
    echo "<br>";
    echo "Мой возраст: $age";

    unset($age);                // 2
?>

 </body>
</html>
