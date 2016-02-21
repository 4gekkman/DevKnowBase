<?php


//1. Подключиться к серверу MySQL.

  // Определить параметры подключения
  $host = 'localhost:3308';
  $dbname = '';
  $username = 'root';
  $password = '';

  // Подключиться к серверу MySQL
  try {

    $pdo = new PDO('mysql:host='.$host.';dbname='.$dbname, $username, $password);

  } catch(PDOException $e) {

    //echo "Код исключения: ".$e->getCode().'<br>';
    //echo "Сообщение: ".$e->getMessage().'<br>';
    //echo "<br><pre>";
    //print_r($e->getTrace());
    //echo "<br></pre>";

  }



//2. Извлечь все данные из таблицы forRefDB.forChat в массив.

  # Подготовить SQL-выражение
  $prepared = $pdo->prepare("SELECT * FROM forRefDB.forChat");

  # Выполнить подготовленное SQL-выражение
  $prepared->execute();

  # Извлечь все полученные данные в массив
  $results = $prepared->fetchAll();



//3. Отключиться от MySQL.
$pdo = NULL;



//4. Сформировать из массива из п.2 JSON-строку указанного формата.
//		Формат соответствует формату, который возвращает PHP-функция
//    json_encode().

  # Перевести кодировку всех эл-тов массива в UTF8

    # Колбэк-функция для кодирования не UTF-8 строк массива в UTF-8
    function to_utf8($n) {
        // Является ли переданное значение строкой
        if(is_string($n)) {
            // Кодировка переданной строки не UTF-8?
            if(mb_detect_encoding($n) != 'UTF-8') {
                return utf8_encode($n);
            } else { // если UTF-8, то просто вернуть ее как есть
                return $n;
            }
        }
        return $n;
    }

    # Получить UTF-8 массив
    $results = array_map('to_utf8', $results);

  # Закодировать массив в JSON-строку
  $results_json = json_encode($results, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);


//5. Отправить в выходной буфер подготовленную в п.4 JSON-строку
echo $results_json;















