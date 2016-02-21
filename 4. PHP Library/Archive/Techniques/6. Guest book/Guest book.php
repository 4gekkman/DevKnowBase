<?php
/* --------------------------------------------------
---------------- Т Е Х Н И К А ----------------
6. Гостевая книга

Пишем простейшую гостевую книгу с использованием файла
для хранения информации.

-------------------------------------------------- */

// строка для записи в текстовый файл
$str = '';

// сначала принять данные и записать в переменные
if ($_SERVER['REQUEST_METHOD'] == 'POST') {  // если запрос был методом POST
    $name = $_POST['name'];
    $email = $_POST['email'];
    $textarea = $_POST['textarea'];

// пропускаем полученные данные через всякие фильтры
// ---> strip_tags - обрежем HTML и PHP тэги
    $name = strip_tags($name);
    $email = strip_tags($email);
    $textarea = strip_tags($textarea);
// ---> trim - обрежем пробелы справа и слева от строки
    $name = trim($name);
    $email = trim($email);
    $textarea = trim($textarea);

// записать данные в куки на 1 час
    setcookie("name",$name,time()+3600);
    setcookie("email",$email,time()+3600);
    setcookie("textarea",$textarea,time()+3600);

// сформировать строку для записи в файл
    $str = $name . " " . $email . " " . $textarea . "\n";

// записываем их в файл
    $f = fopen("file.txt","r+") or die("Ошибка!");
    fseek($f,0,SEEK_END);   // курсор в конец
    fwrite($f,$str);        // записываем данные
    fclose($f);

// перезапрос страницы методом GET, чтобы при нажатии
    // F5 данные формы не посылались снова и снова в базу
    header("Location: ".$_SERVER['PHP_SELF']);
    exit;  // завершение работы кода

} else {        // если запрос был НЕ методом POST
    // прочитать куки, но сначала проверить на пустоту
    if(!empty($_COOKIE['name']))     $name = $_COOKIE['name'];
    if(!empty($_COOKIE['email']))    $email = $_COOKIE['email'];
    if(!empty($_COOKIE['textarea'])) $textarea = $_COOKIE['textarea'];
}

// Если в какой-нибудь куке пусто, то вот данные по умолчанию
if(empty($_COOKIE['name']) and empty($_COOKIE['age'])) {
    $name = 'Катька';
    $email = "ivan@mail.ru";
    $textarea = "Сообщение";
}

?>


<!-- теперь выводится форма -->
<form action="<?= $_SERVER['PHP_SELF'] ?>" method="post" xmlns="http://www.w3.org/1999/html">  <!-- по умолчанию стоит метод get -->
    <label>Имя <input type="text" name="name" value=<?=$name?>></label>
    <label>E-mail <input type="text" name="email" value=<?=$email?>></label><br><br>
    Сообщение: <br>
    <textarea name="textarea" rows="10" cols="45"><?=$textarea?></textarea><br>
    <input type="submit">
</form>

<?php
// отображаем сообщения из файла построчно, с последней строки
echo "<h1>Гостевая книга</h1>";
if ($_SERVER['REQUEST_METHOD'] == 'GET' && file_exists('file.txt')) {

    echo "<b>Размер файла</b>: ".filesize('file.txt')." байт<br>";
    $arr = file("file.txt");  // получаем содержимое файла в виде массива
    for($i=count($arr)-1; $i>=0; $i--) {
        echo $arr[$i]."<br>";
    }

}
?>