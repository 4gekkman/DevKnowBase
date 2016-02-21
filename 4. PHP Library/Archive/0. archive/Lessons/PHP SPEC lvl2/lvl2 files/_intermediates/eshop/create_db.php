<?php
// �������� ��������� ���� ������ �������� �����
	define("DB_HOST", "localhost");
	define("DB_LOGIN", "root");
	define("DB_PASSWORD", "password");
	define("DB_NAME", "eshop");

mysql_connect(DB_HOST, DB_LOGIN, DB_PASSWORD) or die(mysql_error());

$sql = 'CREATE DATABASE ' . DB_NAME;
mysql_query($sql) or die(mysql_error());

mysql_select_db(DB_NAME) or die(mysql_error());

$sql = "
CREATE TABLE catalog (
	id int(11) NOT NULL auto_increment,
	author varchar(50) NOT NULL default '',
	title varchar(50) NOT NULL default '',
	pubyear int(4) NOT NULL default 0,
	price int(11) NOT NULL default 0,
	PRIMARY KEY (id)
)";
mysql_query($sql) or die(mysql_error());
$sql = "
CREATE TABLE _trash (
	id int(11) NOT NULL auto_increment,
	customer varchar(32) NOT NULL default '',
	goodsid int(11) NOT NULL default 0,
	quantity int(4) NOT NULL default 0,
	datetime int(11) NOT NULL default 0,
	PRIMARY KEY (id)
)";
mysql_query($sql) or die(mysql_error());
$sql = "
CREATE TABLE orders (
	id int(11) NOT NULL auto_increment,
	author varchar(50) NOT NULL default '',
	title varchar(50) NOT NULL default '',
	pubyear int(4) NOT NULL default 0,
	price int(11) NOT NULL default 0,
	customer varchar(32) NOT NULL default '',
	quantity int(4) NOT NULL default 0,
	datetime int(11) NOT NULL default 0,
	PRIMARY KEY (id)
)";
mysql_query($sql) or die(mysql_error());

mysql_close();

print '<p>��������� ���� ������ ������� �������!</p>';
?>
