<?php

// Создадим псевдоним для класса IoServer
use Ratchet\Server\IoServer;

// Создадим псевдоним для класса Chat
use MyApp\Chat;

    require dirname(__DIR__) . '/vendor/autoload.php';

    $server = IoServer::factory(
        new Chat(),
        8080
    );

    $server->run();