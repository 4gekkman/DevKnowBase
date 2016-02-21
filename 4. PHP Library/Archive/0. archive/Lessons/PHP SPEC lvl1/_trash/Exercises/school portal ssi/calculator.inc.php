<?php
/*
ЗАДАНИЕ 1
- Проверьте, была ли корректно отправлена форма
- Если она была отправлена, отфильтруйте полученные значения
- В зависимости от оператора производите различные математические действия
- В случае деления, проверьте, делитель на равенство с нулем (на ноль делить нельзя)
- Сохраните полученный результат вычисления в переменной
*/
function clearData($data, $type='i') {
    switch($type) {
        case 'i':
            return $data * 1; break;
        case 's':
            return trim(strip_tags($data)); break;
    }
}
$output = '';  // переменная с результатом
if($_SERVER['REQUEST_METHOD'] == 'POST') {  // была ли отправлена форма
    // TODO: проверить, все ли поля пришли
    $n1 = clearData($_POST['num1']);
    $n2 = clearData($_POST['num2']);
    $op = clearData($_POST['operator'],'s');
    $output = "$n1 $op $n2 = ";
    switch($op) {
        case '+': $output .= $n1 + $n2; break;
        case '-': $output .= $n1 - $n2; break;
        case '*': $output .= $n1 * $n2; break;
        case '/':
            if($n2 === 0) {
                $output = 'Деление на 0 запрещено!';
            } else
                $output .= $n1/$n2;
            break;
        default: $output = "Неизвестный оператор $op";
    }
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>Калькулятор</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<h1>Калькулятор</h1>

<?php
/*
ЗАДАНИЕ 2
- Если результат существует, выведите его
*/
if($output) {
    echo "<p>Результат: $output</p>";
}
?>

<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="post">

Число 1:<br />
<input type="text" name="num1" /><br /><br />

Оператор:<br />
<input type="text" name="operator" /><br /><br />

Число 2:<br />
<input type="text" name="num2" /><br /><br />

<input type="submit" value="Считать!" />


</form>

</body>
</html>