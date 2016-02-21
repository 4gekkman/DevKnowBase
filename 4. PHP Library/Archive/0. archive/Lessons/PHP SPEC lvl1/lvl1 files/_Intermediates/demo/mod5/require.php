<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Функции включения</title>
</head>

<body>
<h1>Функции включения</h1>

include несуществующего файла file-not-exist.php<br>
<?php @include("file-not-exist.php") ?>


require несуществующего файла file-not-exist.php<br>
<?php @require("file-not-exist.php") ?>

Некий текст

</body>
</html>
