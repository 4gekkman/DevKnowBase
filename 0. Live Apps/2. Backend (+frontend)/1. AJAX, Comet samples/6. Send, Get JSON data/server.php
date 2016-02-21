<?php


//1. Проверить содержимое HTTP-заголовка - если оно равно
//		'application/json', то продолжить. Иначе - ничего не делать.
if(@apache_request_headers()['Content-Type'] === "application/json") {



  //2. Извлечь необработанные POST-данные из входного буфера, и
  //		сохранить их в переменную
  $post_data = file_get_contents('php://input');


  //3. Преобразовать извлечённую в п.2 JSON-строку в массив.
  //		- Сделать это с помощью ф-ии json_decode(json, true);
  $data_array = json_decode($post_data, true);


  //4. С помощью var_dump отправить полученный в п.3 массив в
  //		выходной буфер.
  echo '<h3>Распарсенная сервером JSON-строка:</h3>';
  echo '<pre>';
  var_dump($data_array);
  echo '</pre>';


}
