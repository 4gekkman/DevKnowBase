<?php
setcookie("TestCookie", "John", time()+3600);
echo $_COOKIE["TestCookie"];
/* INFO
 *
 * -> Все куки лежат в специальном массиве $_COOKIE
 * -> В качестве ключей используется имя куки
 *
*/
?>