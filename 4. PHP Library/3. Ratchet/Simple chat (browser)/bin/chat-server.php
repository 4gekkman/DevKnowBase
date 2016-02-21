<?php

// Создадим "бутерброд" из 3-х компонентов Ratchet
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;

// Создадим псевдоним для класса Chat
use MyApp\Chat;

// Подключим файл автозагрузки от композера
require dirname(__DIR__) . '/vendor/autoload.php';

// Создадим экземпляр IoServer
// - Завернём в него экземпляр HttpServer
// - В него завернём экземпляр WsServer
// - А в него завернём экземпляр класса нашего чата

    $server = IoServer::factory(
        new HttpServer(
          new WsServer(
            new chat()
          )
        ),
        8080
    );

// Запустим наш сервер
$server->run();