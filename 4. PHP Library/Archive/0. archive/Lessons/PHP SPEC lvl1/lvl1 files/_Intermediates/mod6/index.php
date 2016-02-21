<?php
	include "lib.inc.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>Шаблон сайта</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<table width="100%" border="1">

<tr>
	<td colspan="2" align="center">
		<!-- Верхняя часть страницы -->
		<?php
			include "top.inc.php";
		?>
	</td>
</tr>

<tr>
	<td width="20%" valign="top">
		<!-- Меню -->
		<?php
			include "menu.inc.php";
		?>
	</td>
	<td>
		<!-- Область основного контента -->
		<?php
		/*
		ЗАДАНИЕ 1
		- Создайте переменную $id
		- Присвойте переменной $id значение параметра id переданного при запросе методом GET
		- С помощью конструкции switch, в зависимости от значения переменной $id, выведите содержимое области основного контента страницы
		*/
		?>
	</td>
</tr>

<tr>
	<td colspan="2" align="center">
		<!-- Нижняя часть страницы -->
		<?php
			include "bottom.inc.php";
		?>
	</td>
</tr>
</table>

</body>
</html>