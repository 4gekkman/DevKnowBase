<?php
// Создание структуры Базы Данных гостевой книги

define("DB_HOST", "localhost");
define("DB_LOGIN", "root");
define("DB_PASSWORD", "password");

mysql_connect(DB_HOST, DB_LOGIN, DB_PASSWORD) or die(mysql_error());

$sql = 'CREATE DATABASE gbook';
mysql_query($sql) or die(mysql_error());

mysql_select_db('gbook') or die(mysql_error());

$sql = "
CREATE TABLE msgs (
	id int(11) NOT NULL auto_increment,
	name varchar(50) NOT NULL default '',
	email varchar(50) NOT NULL default '',
	msg TEXT,
	PRIMARY KEY (id)
)";
mysql_query($sql) or die(mysql_error());

mysql_close();

print '<p>Структура базы данных успешно создана!</p>';
?>