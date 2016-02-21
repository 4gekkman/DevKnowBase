<?php
	/*
	ЗАДАЧА
	Отрисовать навигационное меню на странице, типа
		<a href="contact.php">Contact</a>
	используя массив в качестве структуры меню

	ЗАДАНИЕ 1
	- Создайте ассоциативный массив $menu
	- Заполните массив соблюдая следующие условия:
		- Название ячейки является пунктом меню, например: Home, About, Contact...
		- Значение ячейки является именем файла, на который будет указывать ссылка, например: index.php, about.php, contact.html...
	*/

$menu = array("Home" => "home.php",
              "About" => "about.php",
              "Contacts" => "contacts.html");


?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>Меню</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>
	<h1>Меню</h1>
	<?php

    /**
     * Draws menu using array. If param true it will draw vertical menu otherwise horizontal
     *
     * @author 4gekkman@gmail.com
     * @param array $links array contains links for menu
     * @param boolean $vertical true of false
     */
    function getMenu($links, $vertical) {
        $key=null;$mean=null;
        echo "<ul>";
    if($vertical) {
        foreach ($links as $key => $mean) {
            echo "<li><a href='$mean'>$key</li>";
        }
    } else {
        foreach ($links as $key => $mean) {
            echo "<li style='display:inline; margin-right: 10px;'><a href='$mean'>$key</li>";
        }
    }
        echo "</ul>";
    }
    getMenu($menu, false);
	?>
</body>
</html>
