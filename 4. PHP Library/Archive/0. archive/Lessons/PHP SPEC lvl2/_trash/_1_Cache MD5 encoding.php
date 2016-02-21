<?php
/* INFO
 *
 * md5 - односторонний алгоритм шифрования, зашифровать можно,
 *  а расшифровать нельзя. MD5 в php это хэш функция.
 *
 * md5(str string);
 */

$password = "888";
$encriptedPassword = md5($password);
// 0a113ef6b61820daa5611c870ed8d5ee
// для строки 888 это значение всегда будет одно и тоже

echo "<p>" . $password . "</p>";
echo "<p>" . $encriptedPassword . "</p>";
?>