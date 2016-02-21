<?php
	/*
	ЗАДАНИЕ 1
	- Опишите функцию getTable()
	- Задайте для функции три аргумента: $cols, $rows, $color

	ЗАДАНИЕ 2
	- Откройте файл mod3\getMultTable.php
	- Скопируйте код, который отрисовывает таблицу умножения
	- Вставьте скопированный код в тело функции getTable()
	- Измените код таким образом, чтобы таблица отрисовывалась в зависимости от входящих параметров $cols, $rows и $color
	*/
	/*
	ЗАДАНИЕ 4
	- Измените входящие параметры функции getTable() на параметры по умолчанию
	*/

/**
 * Summon multiplication table with header
 *
 * @author 4gekkman@gmail.com
 * @param integer $rows any number
 * @param integer $cols any number
 * @param string $color string with color data
 * @return boolean returns nothing
 */
function getMultTable($rows=10, $cols=10, $color=black) {

    echo "<h1>Таблица умножения!</h1>
       \n<table style='border-collapse: collapse; border: 1px solid $color; text-align: center;'>\n";
    for($i=0; $i<=$rows; $i++) {
        if($i===0) {   // вывод верхних множителей таблицы
            echo "<tr>\n";
            for($j=0; $j<=$cols; $j++) {
                echo "<th style='width: 30px; height: 30px; border: 1px solid $color'>$j</th>\n";
            }
            echo "</tr>\n";
        } else {
            echo "<tr>\n";
            for($j=0; $j<=$cols; $j++) {
                if($j===0) {   // вывод левых множителей таблицы
                    echo "<th style='width: 30px; height: 30px; border: 1px solid $color'>$i</th>\n";
                } else {
                    $result = $i*$j;
                    echo "<td style='width: 30px; height: 30px; border: 1px solid $color'>$result</td>\n";
                }
            }
            echo "</tr>\n";
        }
    }
    echo "</table>\n";

}



?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>Таблица умножения</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>
	<?php
	getMultTable();
    getMultTable(5,10,"green");
    getMultTable(30,30,"blue");

	/*
	ЗАДАНИЕ 3
	- Отрисуйте таблицу умножения вызывая функцию getTable() с различными параметрами
	*/
	/*
	ЗАДАНИЕ 5
	- Отрисуйте таблицу умножения вызывая функцию getTable() без параметров
	- Отрисуйте таблицу умножения вызывая функцию getTable() с одним параметром
	- Отрисуйте таблицу умножения вызывая функцию getTable() с двумя параметрами
	*/
	?>
</body>
</html>
