<!DOCTYPE html>
<html lang="ru">
<head>
 <meta charset="utf-8"/>
 <title>1. echo and print</title>
 <!--[if lt IE 9]>
 <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
 }
 .in {
 display: none;
 <![endif]-->
 <style>
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
   display: block;
  }

 </style>
</head>

<body>

 <h1>Команды echo и pring в PHP</h1>


 <p>Это текст до вывода текста с помощью PHP.</p>
 <p><?php echo("Это текст #1, выведенный PHP.");  ?></p> <!-- функция echo -->
 <p><?php print("Это текст #2, выведенный PHP.");  ?></p> <!-- функция print -->
 <p>Это текст после текста текста, выведенного с помощью PHP.</p>
 <?php echo '<h2>', 'Это хитрая особенность echo, использование запятых -
 это не склеивание строк, а способ записи вместо нескольких идущих подряд echo', '</h2>' ?>
 <p><?='&#8249;?=текст, который добавляет echo ?&#8250; - это сокращенный вариант написания echo'?></p>
 <p><?='Выражение выше - это тоже самое, что и: &#8249;?php echo\'текст, который добавляет echo\' ?&#8250'?></p>


</body>

</html>


<?php

?>
