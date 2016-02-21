<?php



//0. Установить опцию ini_set("max_execution_time", "0") - это значит,
//		что скрипт сможет бесконечно выполняться, и не будет таймаута.
//		- В этом приложении это нужно, потому что используется архитектура
//			"длинных опросов", где соединение клиента с сервером остаётся
//			открытым довольно долгое время (пока никто не пишет в чат).
ini_set("max_execution_time", "0");



//1. Сохранить текущий timestamp в переменную в микросекундах.
//   Сохранить также текущую дату и время в формате Y-m-d H:i:s в переменную.

  # Сохранить текущую дату
  $requestDateTime = date('Y-m-d H:i:s');

  # Сохрнить текущую метку UNIX
  $requestTimestamp = microtime(true);


//2. Подключиться к серверу MySQL.

  // Определить параметры подключения
  $host = 'localhost:3308';
  $dbname = 'forrefdb';
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



//3. Устроить цикл while. В цикле делать следующее: [3,4]
while(1) {



  //4. Получить timestamp последнего изменения таблицы forChat из БД.

    // Выполнить запрос
    $pdoObj = $pdo->query("

      SELECT UPDATE_TIME FROM information_schema.tables WHERE TABLE_NAME='forchat'

    ");

    // Получить timestamp в секундах

      # Получить дату и время в формате Y-m-d H:i:s
      $lastUpdateTimestamp = $pdoObj->fetchAll()[0]['UPDATE_TIME'];

      # Получить timestamp
      $lastUpdateTimestamp = strtotime($lastUpdateTimestamp);


  //5. Сравнить timestampы из п.1 и п.4.
  //		- Если п3 >= п1, то сделать: [6-10]
  //		- Если п3	< п1, то сделать: [11,12]
  if($lastUpdateTimestamp >= $requestTimestamp) {


    //6. Извлечь все данные из таблицы forRefDB.forChat в массив, для которых
    //		timestamp из п.3 >= timestamp из п.1.

      # Подготовить SQL-выражение
      $prepared = $pdo->prepare("

        SELECT * FROM forRefDB.forChat WHERE timestamp > :requestDateTime;

      ");

      # Связать имена меток-заполнителей с именами PHP-переменныех
      $prepared->bindParam('requestDateTime', $requestDateTime);

      # Выполнить подготовленное SQL-выражение
      $prepared->execute();

      # Извлечь все полученные данные в массив
      $results = $prepared->fetchAll();


    //7. Сформировать из массива из п.6 JSON-строку указанного формата.
    //		Формат соответствует формату, который возвращает PHP-функция
    //   json_encode().

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
      $results_json = json_encode($results, JSON_UNESCAPED_UNICODE, JSON_NUMERIC_CHECK);


    //8. Отправить в выходной буфер подготовленную в п.8 JSON-строку
    echo $results_json;


    //9. Применить функцию usleep, чтобы программа "заснула" на 1 секунду,
    //    и завершить цикл while.
    //    - Ждать нужно для того, чтобы данные успели записаться в
    //      базу данных до следующего запроса.
    break;


  }


  else {

    //10. Применить функцию usleep, чтобы программа "заснула" на 1 секунду.
    usleep(1000000);

    //11. Перейти на следующую итерацию цикла с помощью continue
    continue;

  }


}

  // 12. Отключиться от MySQL.
  $pdo = NULL;


