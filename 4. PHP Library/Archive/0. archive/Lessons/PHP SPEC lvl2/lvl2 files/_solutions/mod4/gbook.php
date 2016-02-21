<?php
// Подключаемся к серверу БД и выбираем необходимую базу данных
mysql_connect('localhost','root','password');
mysql_select_db('gbook');

// Проверяем, была ли корректным образом отправлена форма
if(
	isset($_POST['name']) && !empty($_POST['name']) &&
	isset($_POST['email']) && !empty($_POST['email']) &&
	isset($_POST['msg']) && !empty($_POST['msg'])
){
	// Фильтруем полученные данные
	$name = stripslashes(trim(htmlspecialchars($_POST['name'],ENT_QUOTES)));
	$email = stripslashes(trim(htmlspecialchars($_POST['email'],ENT_QUOTES)));
	$msg = stripslashes(trim(htmlspecialchars($_POST['msg'],ENT_QUOTES)));
	
	// Формируем SQL-оператор на вставку данных и выполняем его
	$sql = "
	INSERT INTO
		msgs (name, email, msg)
	VALUES
		('$name','$email','$msg')
	";
	mysql_query($sql);
	
	// Перезапрашиваем страницу, чтобы избавиться от информации, переданной через форму
	header('Location: ' . $_SERVER['PHP_SELF']);
	exit;
}

// Проверяем, был ли запрос на удаление записи
if(isset($_GET['del']) && is_numeric($_GET['del'])){
	// Фильтруем полученные данные
	$del = $_GET['del'] * 1;
	
	// Формируем SQL-оператор на удаление данных и выполняем его
	$sql = "DELETE FROM msgs WHERE id=$del";
	mysql_query($sql);
	
	// Перезапрашиваем страницу, чтобы избавиться от информации, переданной методом GET
	header('Location: ' . $_SERVER['PHP_SELF']);
	exit;
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>Гостевая книга</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<h1>Гостевая книга</h1>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">

Ваше имя:<br />
<input type="text" name="name" /><br />
Ваш E-mail:<br />
<input type="text" name="email" /><br />
Сообщение:<br />
<textarea name="msg" cols="50" rows="5"></textarea><br />
<br />
<input type="submit" value="Добавить!" />

</form>

<?php
// Формируем SQL-оператор на выборку данных из БД и выполняем его
$sql = "SELECT * FROM msgs ORDER BY id DESC";
$res = mysql_query($sql);

// Закрываем соединение с БД
mysql_close();

// Получаем количество рядов результата выборки и выводим его
$rows = mysql_num_rows($res);
print "<p>Записей в гостевой книге: $rows</p>";

// В цикле выводим все сообщения
while($row = mysql_fetch_assoc($res)){
	$id = $row['id'];
	$name = $row['name'];
	$email = $row['email'];
	$msg = nl2br($row['msg']);
	
	print <<<HTML
	
	<hr>
	<p><b><a href="mailto:$email">$name</a></b><br />$msg</p>
	<p align="right"><a href="{$_SERVER['PHP_SELF']}?del=$id">Удалить</a></p>
HTML;
	
}
?>

</body>
</html>