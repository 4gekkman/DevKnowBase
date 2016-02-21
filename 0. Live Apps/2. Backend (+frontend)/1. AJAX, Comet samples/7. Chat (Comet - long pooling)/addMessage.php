<?php



//1. Проверить, если переменные $_POST['nickname'] и $_POST['message']
//		не пусты, то выполнить следующее: [2,3,4]
if(isset($_POST['nickname']) && isset($_POST['message'])) {


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


  //3. Выполнить процедуру addMessage с параметрами из п.1

    // Подготовить SQL-выражение с 3-мя метками-заполнителями:
    // - :timestamp
    // - :nickname
    // - :message
    $prepared = $pdo->prepare("

      CALL addMessage(:timestamp, :nickname, :message);

    ");


    // Связать имена меток-заполнителей с именами PHP-переменных
    $time = date('Y-m-d H:i:s');


    $prepared->bindParam(':timestamp', $time);
    $prepared->bindParam(':nickname', $_POST['nickname']);
    $prepared->bindParam(':message', $_POST['message']);


    // Выполнить подготовленное SQL-выражение
    $prepared->execute();


  //4. Отключиться от MySQL.
  $pdo = NULL;



}

