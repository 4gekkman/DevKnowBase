<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Предопределённые константы</title>
</head>

<body>
<h1>Предопределённые константы</h1>
<?php
function getFuncName(){
	echo 'Вызвана функция по имени '.__FUNCTION__.'<br>';
}
echo 'Это строка номер '.__LINE__.'<br>';
echo 'Это файл '.__FILE__.'<br>';
getFuncName();
?>
<hr>
Мы используем РНР версии <?= PHP_VERSION?>
</body>
</html>
