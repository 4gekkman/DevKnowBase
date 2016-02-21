<?php
	/*
	ЗАДАНИЕ 1
	- Откройте файл mod4\menu.php
	- Скопируйте код функции getMenu()
	- Вставьте скопированный код в данный файл
	*/
	/*
	ЗАДАНИЕ 2
	- Откройте файл mod4\table.php
	- Скопируйте код функции getTable()
	- Вставьте скопированный код в данный файл
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
function getTable($rows=10, $cols=10, $color=black) {

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

/**
 * Draws menu using array. If param true it will draw vertical menu otherwise horizontal
 *
 * @author 4gekkman@gmail.com
 * @param array $links array contains links for menu
 * @param boolean $vertical any number
 */
function getMenu($links, $vertical) {
    $key=null;$mean=null;
    echo "<ul>";
    if($vertical) {
        foreach ($links as $key => $mean) {
            echo "<li><a href='$mean'>$key</a></li>";
        }
    } else {
        foreach ($links as $key => $mean) {
            echo "<li style='display:inline; margin-right: 10px;'><a href='$mean'>$key</a></li>";
        }
    }
    echo "</ul>";
}

?>
