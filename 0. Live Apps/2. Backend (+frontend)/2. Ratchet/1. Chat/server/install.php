<?php
// install.php


//3. Подключиться к серверу MySQL.
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


//4. Если еще не существует, создать базу данных ratchetChat.
//   И использовать её по умолчанию.
$pdo->exec('

  CREATE DATABASE IF NOT EXISTS ratchetChat;
  USE ratchetChat;

');



//5. Если еще не существует, создать таблицу ratchetChat.chat1.
$pdo->exec('

  CREATE TABLE IF NOT EXISTS chat1 (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                                    timestamp TIMESTAMP,
                                    nickname VARCHAR(30),
                                    message VARCHAR(256));

');


//5.5. Настроить хранимую процедуру populateTable, которая добавляет
//     в таблицу базы данных чата ratchetChat.chat1 3 тестовых сообщения,
//     но только если эта таблица пуста.
//     А именно, надо сделать следующее:
//     - Удалить хранимую процедуру populateTable, если существует.
//     - Создать хранимую процедуру populateTable.
//     - Выполнить эту процедуру.

  # Удалить хранимую процедуру populateTable, если существует
  $pdo->exec("DROP PROCEDURE IF EXISTS populateTable;");

  # Создать хранимую процедуру populateTable
  $pdo->exec("

    CREATE PROCEDURE populateTable()
      BEGIN

        # Объявить локальную переменную curNumOfStrings
        DECLARE curNumOfStrings INT DEFAULT 0;

        # Получить текущее кол-во строк в таблице chat1
        SELECT COUNT(*) INTO curNumOfStrings FROM chat1;

        # Если таблица пуста, то вставить в неё 3 строки
        IF curNumOfStrings >= 0 THEN

          INSERT INTO chat1
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


//6. Настроить хранимую процедуру addMessage, которая добавляет
//   строку в таблицу. А именно сделать следующее:
//   - Удалить хранимую процедуру addMessage, если существует
//   - Создать хранимую процедуру addMessage.
//     Она должна принимать 3 параметра - timestamp, nickname и message
//     Она должна Добавлять в базу данных новую запись вида:
//        (NULL, timestamp, nickname, message)

  # Удалить хранимую процедуру addMessage, если существует
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

        INSERT INTO chat1
          VALUES  (NULL, timestamp, nickname, message);

      END IF;

    END;

  ");



//7. Отключиться от MySQL
$pdo = NULL;



