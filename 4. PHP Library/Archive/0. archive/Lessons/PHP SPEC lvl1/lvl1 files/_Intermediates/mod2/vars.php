<?php
/*
ЗАДАНИЕ 1
- Создайте переменную $name и присвойте ей значение содержащее Ваше имя, например "Игорь"(обязательно в кавычках!)
- Создайте переменную $age и присвойте ей значение содержащее Ваш возраст, например 40
*/

$name = 'Герман';
$age = 26;

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>Переменные и вывод</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>
	<h1>Переменные и вывод</h1>
	<p>Мое имя <?=$name?></p>
	<p>Мне <?=$age?> лет</p>
	
	
	<?php
	/*
	ЗАДАНИЕ 2
	- Выведите с помощью echo(или print) фразу "Меня зовут: ваше_имя", например: "Меня зовут: Игорь"
	- Выведите фразу "Мне ваш_возраст лет", например: "Мне 40 лет"
	- Удалите переменную $age. 
	*/
	
	echo '<p>', 'Мое имя ', $name, '</p>';
	echo 'Мне ', $age, ' лет';
	
	unset($name);
	
	?>
</body>
</html>
