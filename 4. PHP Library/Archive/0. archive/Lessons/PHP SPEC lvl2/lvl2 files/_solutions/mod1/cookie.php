<?php
// »нициализируем переменную дл€ подсчета количества посещений
// ≈сли соответствующие данные передавались через куки
// сохран€ем их в эту переменную
$visit_counter = 0;
if(isset($_COOKIE['visitCounter']) && is_numeric($_COOKIE['visitCounter'])){
	$visit_counter = $_COOKIE['visitCounter'] * 1;
}
// ѕриращиваем счетчик посещений
$visit_counter++;

// »нициализируем переменную дл€ хранени€ значени€ последнего посещени€ страницы
// ≈сли соответствующие данные передавались из куки, сохран€ем их в эту переменную
$last_visit = '';
if(isset($_COOKIE['lastVisit'])){
	$last_visit = stripslashes(trim(htmlspecialchars($_COOKIE['lastVisit'],ENT_QUOTES)));
}

// ”станавливаем куки
setcookie('visitCounter', $visit_counter, 0x7FFFFFFF);
setcookie('lastVisit', date('d/m/Y H:i:s'), 0x7FFFFFFF);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>ѕоследний визит</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<h1>ѕоследний визит</h1>

<?php
// ¬ыводим информацию о количестве посещений и дате последнего посещени€
if($visit_counter == 1){
	print '<h2>ƒобро пожаловать!</h2>';
}else{
	print <<<HTML
	<h2>¬ы здесь уже $visit_counter раз</h2>
	<p>ѕоследнее посещение: $last_visit</p>
HTML;
}
?>

</body>
</html>