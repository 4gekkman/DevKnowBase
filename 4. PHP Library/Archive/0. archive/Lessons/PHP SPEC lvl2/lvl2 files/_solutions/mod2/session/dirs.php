<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>Работа с директориями</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<?php 
function readDirs($dirName, $sign=""){
	if($dir=opendir($dirName)){
		while($name=readdir($dir)){
			if(($name=='.') or ($name=='..')){
				continue;
			} 
			if(is_dir($dirName."/".$name)){
				echo "<BR>$sign <B>$dirName/$name</B>";
				readDirs($dirName."/".$name, $sign."-");
			}else{
				echo "<BR> $sign $dirName/$name";
				$GLOBALS["size"] += filesize($name);
			}
		} 
	}  
	closedir($dir);
 }
$size = 0;
readDirs(".");
echo $size;   
?>



</body>
<html>

