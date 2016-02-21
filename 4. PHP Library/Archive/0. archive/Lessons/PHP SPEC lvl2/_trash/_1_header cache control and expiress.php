<?php
// Запрет на кэширование
header("Cache-Control: no-store,no-cache,must-revalidate");
header("Expires: " . date('r'));

// Разрешение на кэширование
header("Cache-Control: public");
header("Expires: " . date("r", time()+3600));
?>

<h1>Ты меня больше не увидишь =]</h1>