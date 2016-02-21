<?php
//chat-server.php




//19. Назначить 3 псевдонима:
//    - use Ratchet\Server\IoServer;
//    - use Ratchet\Http\HttpServer;
//    - use Ratchet\WebSocket\WsServer;
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;


//20. Создать псевдоним для класса chat:
//    - use myChat\Chat
use myChat\Chat;



//21. Подключить файл autoload.php от композера.
require dirname(dirname(__DIR__)) . '/vendor/autoload.php';


//22. Создать экземпляр IoServer на порте 8080
// - В него завернуть экземпляр HttpServer
// - В него завернуть экземпляр WsServer
// - А в него завернуть экземпляр класса нашего чата Chat
    $server = IoServer::factory(
        new HttpServer(
          new WsServer(
            new Chat()
          )
        ),
        8080
    );


//23. Запустить сервер методом run()
$server->run();
