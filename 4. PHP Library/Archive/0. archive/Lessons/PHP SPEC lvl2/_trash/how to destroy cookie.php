<?php
setcookie("name","John");
if(isset($_COOKIE["name"]))
    echo $_COOKIE["name"];

setcookie("name", "", time()-3600);

/* INFO
 *
 * -> послать куку с тем же именем, пустой строкой и
 *        отрицательным временем
 *
 */
?>