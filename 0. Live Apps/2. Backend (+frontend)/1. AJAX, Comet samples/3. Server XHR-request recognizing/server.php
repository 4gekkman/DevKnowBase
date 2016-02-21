<?php



//1. Проверить значение HTTP-заголовка "X-Requested-With".
//		- Если оно равно "XMLHttpRequest", то выполнить: [2]
//		- Если оно НЕ равно "XMLHttpRequest", то выполнить: [3]
if(@apache_request_headers()['X-Requested-With'] === "XMLHttpRequest") {


  //2. Послать в выходной буфер серверную дату и время.
  echo 'Серверное время: '.date('Y-m-d H:i:s');


} else {


  //3. Послать в выходной буфер HTML-страницу со списком,
  //		в котором перечислены все цифры от 0 до 100.
  echo '<h3>Список цифр от 0 до 100: </h3>';
  echo '<ul>';
  for($i = 0; $i<=100; $i++) {
    echo '<li>'.$i.'</li>';
  }
  echo '</ul>';

}