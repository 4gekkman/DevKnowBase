<?php
/* INFO
 *
 * Полученные от пользователя данные всегда надо фильтровать
 */

// setcookie("name","");
// setcookie("age","");

// сначала принять данные и записать в переменные
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $age = $_POST['age'];

// пропускаем полученные данные через всякие фильтры
// ---> strip_tags - обрежем HTML и PHP тэги
    $name = strip_tags($name);
    $age = strip_tags($age);
// ---> trim - обрежем пробелы справа и слева от строки
    $name = trim($name);
    $age = trim($age);
// ---> age должно быть положительным числом от 1 до 150 или 0
    if (is_numeric($age)) {
        $age = abs((int)$age);
        if ($age > 150) {
            $age = "Вам что, больше 150 лет?! Вампир!?!?!!";
        }
    } elseif (!array_key_exists('name', $_POST)) {
        $age = '';
    } else {
        $age = "Вы ввели не число. Введите его.";
    }

// записать данные в куки
    setcookie("name",$name,time()+3600);
    setcookie("age",$age,time()+3600);

// перезапрос страницы методом GET, чтобы при нажатии
    // F5 данные формы не посылались снова и снова в базу
header("Location: ".$_SERVER['PHP_SELF']);
    exit;  // завершение работы кода

} else {
    // прочитать куки
    $name = $_COOKIE['name'];
    $age = $_COOKIE['age'];
}
if(empty($_COOKIE['name']) and empty($_COOKIE['age'])) {
    $name = 'Катька';
    $age = 18;
}
?>

    <!-- теперь выводится форма -->
    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="post">  <!-- по умолчанию стоит метод get -->
        <label>Имя <input type="text" name="name" value=<?=$name?>></label>
        <label>Возраст <input type="text" name="age" value=<?=$age?>></label>
        <input type="submit">
    </form>

<?php
// теперь обработанную информацию можно использовать
if ($name && $age) {
    echo "<br>Вы указали, что Ваше имя: " . $name;
    echo "<br>Вы указали, что Ваш возраст: " . $age;
}

?>