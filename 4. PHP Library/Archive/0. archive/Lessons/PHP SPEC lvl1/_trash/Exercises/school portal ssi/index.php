<?php
		/*
		ЗАДАНИЕ 1
		- Подключите файл lib.inc.php
		*/
include "lib.inc.php";
include "data.inc.php";
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
		/*
		ЗАДАНИЕ 2
		- Подключите файл, содержащий код верхней части страницы (top.inc.php)
		*/
        require "top.inc.php";
		?>
	</td>
</tr>

<tr>
	<td width="20%" valign="top">
		<!-- Меню -->
		<?php
		/*
		ЗАДАНИЕ 3
		- Подключите файл, содержащий код меню (menu.inc.php)
		*/
        include "menu.inc.php";
		?>
	</td>
	<td>
		<!-- Область основного контента -->
        <p>Основной контент</p>
        <?php
        $id = strip_tags($_GET['id']);
        echo "_GET[\"id\"] = ".$_GET['id'];
        echo "<br>QUERY_STRING: ".$_SERVER['QUERY_STRING'];
        switch($id) {
            case "page1.php":
                include "page1.php";
                break;
            case "page2.php":
                include "page2.php";
                break;
            case "page3.php":
                include "page3.php";
                break;
            case "table.php":
                include "table.php";
                break;
            case "calculator.inc.php":
                include "calculator.inc.php";
                break;
            default:
                echo "<br>Привет всем!";
        }
        ?>
	</td>
</tr>

<tr>
	<td colspan="2" align="center">
		<!-- Нижняя часть страницы -->
		<?php
		/*
		ЗАДАНИЕ 4
		- Подключите файл, содержащий код нижней части страницы (bottom.inc.php)
		*/
        include "bottom.inc.php";
		?>
	</td>
</tr>
</table>

</body>
</html>