

<?php
/* --------------------------------------------------
---------------- Т Е Х Н И К А ----------------
8. Вывод того или иного контента в зависимости от какого-либо условия

Например, разным пользователям личного кабинета нужно будет показывать разный
контент.

---------------------------------------------- */

// Вывод формы для выбора номер контента для вывода

echo '
<form action="'.$_SERVER["PHP_SELF"].'"method="get">
    <p><label><input type=radio name="id" value=1>Телка</label></p>
    <p><label><input type=radio name="id" value=2>Тачка</label></p>
    <p><label><input type=radio name="id" value=3>Ствол</label></p>
    <p><input type="submit"></p>
</form>';


// Условный вывод контента
// > Происходит только, если есть кука с выбранным номером контента

if(!empty($_GET['id'])) {
    switch ($_GET['id']) {

        case 1:
            echo '<br>Вывожу контент №1<br>';
            include 'content1.php';
            break;

        case 2:
            echo '<br>Вывожу контент №2<br>';
            include 'content2.php';
            break;

        case 3:
            echo '<br>Вывожу контент №3<br>';
            include 'content3.php';
            break;
    }
}

?> 
