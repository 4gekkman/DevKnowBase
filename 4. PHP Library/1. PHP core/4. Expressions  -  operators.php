<?php
/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Выражения  -  операторы

База
> Выражения
  > Выражение - это все, что угодно, имеющее значение

> Операторы
  > Арифметика                                | + - * / %   унарный_- унарный_+
  > Сравнение                                 | = == === != !== <> > < >= <=
  > Унарное присвоение                        | += -= *= /= %=
  > Операторы для работы со строками          | += +
  > Тернарный оператор                        | a ? b : c
    > Техника присвоения значения по умолчанию
  > Оператор управления ошибками @            | @
  > Инкремент и декремент                     | X++ ++X    X-- --X
  > Логические операторы                      | && AND   || OR   !   XOR

> Оператор instanceof проверки на принадлежность к классу

-------------------------------------------------- */


// Выражение - это все, что угодно, имеющее значение
    $b = $a = 5;  // эквивалентно  |  $a = 5; $b = 5;

// Операторы
    // Арифметика
        $a = 1 + 2;       // 3
        echo -$a;         // -3
        $a = 2 * 3;       // 6
        $a = 3 / 2;       // 1.5
        $a = 10 % 3;      // 1  (целочисленный остаток от деления)
        $b = +$a;         // 1
        $b = -$a;         // -1
    // Сравнение
        $a = 1; $b = 2; $c = 1;
        $a == $c;   // true  |  мягкое сравнение
        $a === $c;  // true  |  жесткое сравнение
        $a != $b;   // true  |  не равно
        $a !== $b;  // true  |  жестко не равно
        $a <> $b;   // true  |  не равно
        $b > $a;    // true  |  больше
        $a < $b;    // true  |  меньше
        $b >= $a;   // true  |  больше равно
        $a <= $b;   // true  |  меньше равно
    // Унарное присвоение
        $a = 1;     // 1
        $a += 5;    // $a = $a + 5;
        $a -= 5;    // $a = $a - 5;
        $a *= 2;    // $a = $a * 2
        $a /= 2;    // $a = $a / 2;
        $a %= 2;    // $a = $a % 2;
    // Операторы для работы со строками
        $a = 'Привет'; $b = ', Мир!';
        $a .= $b;        // 'Привет, Мир!'
                         // тоже, что и:    $a = $a . $b;

    // Тернарный оператор
        $res = (2 > 1) ? 10 : 20;    // 10      (если 2 > 1, то вернуть 10; иначе 20)

        // Техника присвоения значения по умолчанию
            $action = (empty($_POST['action'])) ? 'default' : $_POST['action'];

    // Оператор управления ошибками @
    $a = 2;
    echo $a = @($b + asf);       //  2  |  намеренно допущена ошибка
                                 // а без @ вывелось бы предупреждение: "Notice: Use of undefined constant asf"
    // Инкремент и декремент
        // числа
            $a = 1; $b = $a++;    // $b = 1
            $a = 1; $b = ++$a;    // $b = 2
        // буквы
            $a = 'A'; // 'A'
            $a++;     // 'B'
            $a++;     // 'C'
        // инкремент последней буквы английского алфавита
            $a = 'Z';   // 'Z'
            $a++;       // 'AA'
            $a++;       // 'AB'
            $a++;       // 'AC'    с кирилицей этого не происходит
        // с кирилицей такого не происходит
            $a = 'Я';   // 'Я'
            $a++;       // 'Я'
        // логические значения
            $a = TRUE; $a++;   // TRUE

    // Логические операторы
        // И
            $a = 1 && 2 && 3 && 4 && 0 && 10;  // FALSE
            $a = 1 and 2 and 3 and 4 and 0 and 10;  // FALSE
        // Или
            $a = '' || 0 || NULL || 'Катя' || '0' || 10;  // TRUE (в JS было бы 'Катя')
            $a = '' or 0 or NULL or 'Катя' or '0' or 10;
        // Не
            $a = !FALSE;  // TRUE
        // Исключающее или
            $a = 1 xor 0;  // 1
            $a = 1 xor 1;  // 1
            $a = 0 xor 0;  // 0



    // Оператор instanceof проверки на принадлежность к классу
        class MyClass {}
        $a = new MyClass;
        $b = $a instanceof MyClass;   // TRUE   (да, $a является экземпляром класса MyClass)




/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------

> Операторы
  > 3 типа операторов
    > Унарный              |  $а++
    > Бинарный             |  $a + $b
    > Тернарный            |  $a ? $b : $c
  > Операнды в выражении вычисляются согласно приоритету оператора
    > Таблица приоритетов здесь: http://www.php.net/manual/ru/language.operators.precedence.php
  > Оператор управления ошибками @
    > Можно поставить перед любым выражением, чтобы подавить сообщения об
      ошибках, которые это выражение может сгенерировать.
  > Логические операторы
    > Результатом выражения с логическими операторами будет TRUE или FALSE
      > В отличие от JavaScript, где результатом будет либо FALSE, либо
        первое попавшееся не empty-значение





-------------------------------------------------- */
?> 
