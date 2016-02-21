<?php
//chat.php


//9. Указать, что всё будет происходить в пр.имён myChat
namespace myChat;




//10. Указать псевдонимы для следующих классов Ratchet:
//  - use Ratchet\MessageComponentInterface;
//  - use Ratchet\ConnectionInterface;
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;



//11. Создать класс Chat, который реализует интерфейс MessageComponentInterface.
//    Внутри определения класса выполнить следующее: [12-17]
class Chat implements MessageComponentInterface {


  //12. Объявить protected переменную - контейнер для хранения всех соединений.
  protected $clients;


  //13. Объявить public конструктор, который инициирует переменную из п.6
  //    объектом \SplObjectStorage.
  public function __construct() {

    // Инициировтать $clients экземпляром класса SplObjectStorage
    // - Этот стандартный класс специально создан для хранения объектов
    // - Не забыть добавить "\" перед именем класса, ведь выше мы указали
    //   namespace MyApp, и если не добавить "\", то получится, что мы вызываем
    //   myChat\SplObjectStorage, а такого нет и в помине.
    $this->clients = new \SplObjectStorage;
  }


  //14. Объявить публичную функцию-обработчик onOpen, которая реализует
  //   соотв. функцию интерфейса MessageComponentInterface. В ней выполнить
  //   следующее:
  //   - Подключиться к серверу MySQL.
  //   - Извлечь все данные из таблицы ratchetChat.chat1 в массив.
  //   - Отключиться от MySQL
  //   - Если массив с результатами пуст, то завершить работу функции
  //   - Сформировать JSON-строку из извлечённых данных
  //   - Отправить полученную JSON-строку подключившемуся клиенту
  //   - Добавить новое подключение в коллекцию clients
  public function onOpen(ConnectionInterface $conn) {

    // Подключиться к серверу MySQL

      # Определить параметры подключения
      $host = 'localhost:3308';
      $dbname = 'ratchetChat';
      $username = 'root';
      $password = '';

      # Подключиться к серверу MySQL
      try {

        $pdo = new \PDO('mysql:host='.$host.';dbname='.$dbname, $username, $password);

      } catch(\PDOException $e) {

        //echo "Код исключения: ".$e->getCode().'<br>';
        //echo "Сообщение: ".$e->getMessage().'<br>';
        //echo "<br><pre>";
        //print_r($e->getTrace());
        //echo "<br></pre>";

      }


    // Извлечь все данные из таблицы ratchetChat.chat1 в массив.

      # Подготовить SQL-выражение
      $prepared = $pdo->prepare("

        SELECT * FROM ratchetChat.chat1;

      ");

      # Выполнить подготовленное SQL-выражение
      $prepared->execute();

      # Извлечь все полученные данные в массив
      $results = $prepared->fetchAll();

    // Отключиться от MySQL
    $pdo = NULL;

    // Если массив с результатами пуст, то завершить работу функции
    if(empty($results)) return;

    // Сформировать JSON-строку из извлечённых данных
    $results_json = json_encode($results, JSON_UNESCAPED_UNICODE, JSON_NUMERIC_CHECK);

    // Отправить полученную JSON-строку подключившемуся клиенту
    $conn->send($results_json);

    // Добавить новое подключение в коллекцию clients
    $this->clients->attach($conn);

  }


  //15. Объявить публичную функцию-обработчик onClose, которая реализует
  //   соотв. функцию интерфейса MessageComponentInterface. В ней выполнить
  //   следующее:
  //   - Удалить закрытое соединение из коллекции $clients
  public function onClose(ConnectionInterface $conn) {

    // Удалить закрытое соединение из коллекции $clients
    $this->clients->detach($conn);

  }


  //16. Объявить публичную функцию-обработчик onMessage, которая реализует
  //    соотв. функцию интерфейса MessageComponentInterface. В ней выполнить
  //    следующее:
  //    - Десериализовать полученное от клиента сообщение
  //    - Подключиться к серверу MySQL.
  //    - Выполнить процедуру addMessage с полученными от клиента значениями
  //    - Отключиться от MySQL
  //    - Сформировать JSON-строку, содержащую следующие данные:
  //      timestamp, nickname, message
  //    - Переслать JSON-строку данными (timestamp, nickname, message) всем
  //      соединениям, в т.ч. самому клиенту.
  public function onMessage(ConnectionInterface $from, $msg) {

    //$from->send($msg);


    // Десериализовать полученное от клиента сообщение
    $data_arrays = json_decode($msg, true);


    // Подключиться к серверу MySQL

      # Определить параметры подключения
      $host = 'localhost:3308';
      $dbname = 'ratchetChat';
      $username = 'root';
      $password = '';

      # Подключиться к серверу MySQL
      try {

        $pdo = new \PDO('mysql:host='.$host.';dbname='.$dbname, $username, $password);

      } catch(\PDOException $e) {

        $from->send("Не удалось подключиться к PDO");
        //echo "Код исключения: ".$e->getCode().'<br>';
        //echo "Сообщение: ".$e->getMessage().'<br>';
        //echo "<br><pre>";
        //print_r($e->getTrace());
        //echo "<br></pre>";

      }

    // Выполнить процедуру addMessage с полученными от клиента значениями

      // Подготовить SQL-выражение с 3-мя метками-заполнителями:
      // - :timestamp
      // - :nickname
      // - :message
      $prepared = $pdo->prepare("

        CALL addMessage(:timestamp, :nickname, :message);

      ");


      // Подготовить переменные с данными, которые надо отправить
      $timestamp = date('Y-m-d H:i:s');
      $nickname = $data_arrays['nickname'];
      $message = $data_arrays['message'];


      // Связать имена меток-заполнителей с именами PHP-переменных
      $prepared->bindParam(':timestamp', $timestamp);
      $prepared->bindParam(':nickname', $nickname);
      $prepared->bindParam(':message', $message);

      // Выполнить подготовленное SQL-выражение
      $prepared->execute();

    //Отключиться от MySQL
    $pdo = NULL;


    //Сформировать JSON-строку, содержащую следующие данные:
    //timestamp, nickname, message
    $arr =  [
              0 =>  [
                      "timestamp" => $timestamp,
                      "nickname" => $nickname,
                      "message" => $message
                    ]
            ];
    $results_json = json_encode($arr, JSON_FORCE_OBJECT | JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK );


    //Переслать полученную от клиента JSON-строку всем соединениям,
    //в т.ч. самому клиенту.
    foreach($this->clients as $client) {

      // Послать $msg текущему $client
      $client->send($results_json);

      echo '$results_json = '.$results_json;
    }

  }


  //17. Объявить публичную функцию-обработчик onError, которая реализует
  //    соотв. функцию интерфейса MessageComponentInterface. В ней выполнить
  //    следующее:
  //    - Закрыть соединение
  public function onError(ConnectionInterface $conn, \Exception $e) {

    // Закрыть соединение
    $conn->close();

  }

}


