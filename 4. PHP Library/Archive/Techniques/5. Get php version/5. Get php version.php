<?php
/**
 * Версия PHP состоит из: X.Y.Z. Например, 5.5.0. Возвращает массив 3-мя ячейками, содержамими X Y Z
 * @author German Manvelov <4gekkman@gmail.com>
 * @version 1.0
 * @return array массив с 3-мя ячейками, содержамими элементы версии X Y Z
 */
function getPhpVerAsArr() {
    $ver = explode('.', phpversion());
    $x = $ver[0];  // X
    $y = $ver[1];  // Y
    $z = $ver[2];  // Z
    return [$x,$y,$z];
}
?> 
