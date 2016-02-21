<?php


//1. Создать "установочный" PHP-файл для приложения ЧАТ.
//		Этот файл надо будет запустить вручную перед эксплуатацией
//		приложения с конкретным сервером MySQL.
//		Выполнить в нём следующее: [2-6]




//2. Подключиться к серверу MySQL.

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


//3. Если еще не существует, создать базу данных forRefDB.
//    И использовать её по умолчанию.
$pdo->exec('

  CREATE DATABASE IF NOT EXISTS forRefDB;
  USE forRefDB;

');



//4. Если еще не существует, создать таблицу forRefDB.forChat
//		В таблице должно быть 4 столбца:
//		- id				 	тип: INT 				| с автоинкрементом
//		- timestamp		тип: TIMESTAMP
//		- nickname		тип: varchar(30)
//		- message			тип: varchar(256)
$pdo->exec('

  CREATE TABLE IF NOT EXISTS forChat (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                                      timestamp TIMESTAMP,
                                      nickname VARCHAR(30),
                                      message VARCHAR(256));

');



//5. Удалить хранимую процедуру populateTable, если существует.
//		Создать хранимую процедуру populateTable, выполнить её, а затем удалить.
//		Она должна делать следующее:
//		- Если кол-во строк в таблице = 0, то добавит в таблицу
//			3 демо-строки, просто чтобы она не пустовала.
//	  - Если > 0, то ничего не будет делать.

  # Удалить хранимую процедуру populateTable, если существует
  $pdo->exec("DROP PROCEDURE IF EXISTS populateTable;");

  # Создать хранимую процедуру populateTable
  $pdo->exec("

    CREATE PROCEDURE populateTable()
      BEGIN

        # Объявить локальную переменную curNumOfStrings
        DECLARE curNumOfStrings INT DEFAULT 0;

        # Получить текущее кол-во строк в таблице forChat
        SELECT COUNT(*) INTO curNumOfStrings FROM forChat;

        # Если таблица пуста, то вставить в неё 3 строки
        IF curNumOfStrings >= 0 THEN

          INSERT INTO forChat
            VALUES  (NULL,NOW(),'John','Всем привет!'),
                    (NULL,NOW(),'Joe','Привет чувак!'),
                    (NULL,NOW(),'Jack','Парни, а вы заметили, что у
                      нас у всех имена начинаются с одной и той же буквы \"J\"?');

        END IF;

      END;

  ");

  # Выполнить эту процедуру
  $pdo->exec("CALL forRefDB.populateTable();");

  # Удалить процедуру
  $pdo->exec("DROP PROCEDURE IF EXISTS forRefDB.populateTable;");




//6. Удалить хранимую процедуру addMessage, если существует.
//		Создать хранимую процедуру addMessage.
//		Она должна принимать 3 параметра - timestamp, nickname и message.
//		Она должна делать следующее:
//		- Добавлять в базу данных новую запись:
//			(NULL, timestamp, nickname, message).

  # Удалить хранимую процедуру populateTable, если существует
  $pdo->exec("DROP PROCEDURE IF EXISTS addMessage;");

  # Создать хранимую процедуру addMessage
  $pdo->exec("

  CREATE PROCEDURE
    addMessage(timestamp TIMESTAMP, nickname VARCHAR(30), message VARCHAR(256))
    BEGIN

      # Если timestamp, nickname и message не пусты, добавить новую запись в таблицу
      IF nickname IS NOT NULL AND
         message IS NOT NULL AND
         timestamp IS NOT NULL
      THEN

        INSERT INTO forChat
          VALUES  (NULL, timestamp, nickname, message);

      END IF;

    END;

  ");



//7. Отключиться от MySQL.
$pdo = NULL;


