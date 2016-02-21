<?php
	/*
	ЗАДАНИЕ 1
	- Создайте строковую переменную $now
	- Создайте строковую переменную $birthday
	- Присвойте переменной $now значение метки времени актуальной даты(сегодня)
	- Присвойте переменной $birthday значение метки времени Вашего дня рождения
	*/
$nov = time();
$birthday = mktime(0,0,0,1,24,2014,-1);

	?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>Использование функций даты и времени</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>
	<h1>Использование функций даты и времени</h1>
	<?php
	/*
	ЗАДАНИЕ 2
	- Выведите фразу "До моего дня рождения осталось "
	- Выведите количество секунд оставшееся до Вашего дня рождения
	- Закончите фразу " секунд"
	*/
    $sec = $birthday - $nov;
    $min = round($sec/60);
    $hours = round($min/60);
    $days = round($hours/24);
    echo "До моего дня рождения осталось: <br>$days дней, <br>$hours часов, <br>$min минут, <br>$sec секунд";
	?>
</body>
</html>
