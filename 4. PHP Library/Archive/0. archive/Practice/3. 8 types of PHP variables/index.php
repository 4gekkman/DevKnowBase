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
  /*  PHP не строго типизированный язык, как и JavaScript
   1. boolean
   2. integer
   3. float
   4. string

   5. array
   6. object

   7. resource
   8. NULL
   */

 // boolean
 // FALSE ЭТО:     0, 0.0, '', '0', '0000000', пустой массив, NULL       остальное TRUE
 $varBoolTrue = true;  // правда
 $varBooolFalse = false;  // ложь
 // echo $varBoolTrue;     выведет цифру 1
 // echo $varBooolFalse;     !!! выведет пустую строку '', а не 0

 // integer
 // целые числа
 $varInt = 12345;
 $varInt2 = 012345; // в восьмеричном формате
 $varInt3 = 0x7FFFFFFF; // в шестнадцатеричном формате.

 // float
 // не целое число
 $varFlo = 1.234;
 $varFlo2 = 1.2e3;
 $varFlo3 = 7E-19;

 // string
 $varStr = 'Строка';
 $varStr2 = "Строка2";
 $varStr3 = "Строка 3 плюс $varStr2";  // !!! в двойные кавычки можно подставлять значение переменной, а в одинарные нет
 $varStr4 = "Строка 4 \n";  // в двойных кавычках можно использовать спец. символы, форматирующие исходный код
                            // \n - перевод на новую строку
                            // \t - горизонтальная табуляция
 $varStr5 = "Способ заэкранировать служебные символы \' \" \$ \\ \n \t \r ... ";

 // string (heredoc)
 // еще один способ вывода - для вывода большой строки, особенность в том, что перевод на новую строку, табуляция,
 // гашение системных символов, и прочее подставляется автоматом
$varStr6 = <<<LABEL
 Пример строки, охватывающей
 несколько строк кода похоже на HTML тег <pre> строки переносятся автоматом
 "Можно писать в кавычках без гашения их обратным слешом \ "
 ну и т.д.
                 Еще можно подставлять переменные и использовать специальные символы.
LABEL;

 echo $varStr6;

 // экранирование переменных
 $car = 'subaru';
 echo "<p>{$car}'s color is great</p>";  // пример экранирования переменной
 echo "<p>He like {$car}s</p>";  // пример экранирования переменной

 // доступ к символам в строке по номеру символа
 $first = "Hello, world";
 echo $first{0};  // Выведет букву H
 echo $first{1};  // Выведет букву e

 // получение последнего символа строки
 $len = strlen($first);
 $pos = $len - 1;
 $last = $first{$pos};
 echo "<p>Последний символ в строке \"$first\" $last</p>"

// NULL
// --> Если переменной не существует или ей не присвоили значение она NULL
// --> Если переменной присвоили значение NULL, она NULL
// --> Если переменную удалили с помощью unset(), она NULL




 ?>

 </body>
</html>


