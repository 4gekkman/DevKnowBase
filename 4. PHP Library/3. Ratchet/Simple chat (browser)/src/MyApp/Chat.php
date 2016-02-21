<?php

// Указать пр.имён
namespace MyApp;

// Создать 2 псевдонима для этих классов
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

// Создать класс Chat
// - Он реализует интерфейс MessageComponentInterface
// - Каждый из реализованных методов принимает аргумент в виде объекта класса ConnectionInterface
class Chat implements MessageComponentInterface {

    // Это будет контейнер для объектов-соединений
    protected $clients;

    // Конструктор
    public function __construct() {

      // Инициировтать $clients экземпляром класса SplObjectStorage
      // - Этот стандартный класс специально создан для хранения объектов
      // - Не забыть добавить "\" перед именем класса, ведь выше мы указали
      //   namespace MyApp, и если не добавить "\", то получится, что мы вызываем
      //   MyApp\SplObjectStorage, а такого нет и в помине.
      $this->clients = new \SplObjectStorage;

    }

    // Вызывается при подключении нового клиента
    public function onOpen(ConnectionInterface $conn) {

      // Добавить соединение в наше хранилище объектов-соединений
      $this->clients->attach($conn);

      // Вывести сообщение о новом подключении
      echo "New connection! ({$conn->resourceId}) \n";

    }

    // Вызывается при получении нового сообщения из соединения
    public function onMessage(ConnectionInterface $from, $msg) {

      // Получить текущее количество подключений
      $num = count($this->clients) - 1;

      // Вывести в выходной буфер сообщении о новом сообщении
      echo "Connection $from->resourceId send message '$msg' to num of other connections: $num \n";

      // Переслать $msg всем соединениям
      // - Кроме того, от которого $msg изначально пришло
      foreach($this->clients as $client) {

        // Не слать $msg тому соединению, из которого это $msg прило
        if($from === $client) continue;

        // Послать $msg текущему $client
        $client->send($msg);

      }

    }

    // Вызывается при закрытии соединения
    public function onClose(ConnectionInterface $conn) {

      // Удалить закрытое соединение из коллекции $clients
      $this->clients->detach($conn);

      // Послать сообщение о закрытии соединения в выходной буфер
      echo "Connection {$conn->resourceId} was closed\n\r";

    }

    // Вызывается при возникновении ошибки соединения
    public function onError(ConnectionInterface $conn, \Exception $e) {

      // Послать сообщение с подробностями о возникшей ошибке в выходной буфер
      echo "Error occurred : {$e->getMessage()}\n\r";

      // Закрыть соединение
      $conn->close();

    }

}
 