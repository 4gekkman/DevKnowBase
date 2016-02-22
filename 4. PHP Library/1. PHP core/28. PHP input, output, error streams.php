<?php
/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
28. PHP input, output, error streams









-------------------------------------------------- */














/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:
> Официальное руководство по работе со входным, выходным и ошибочным потоками PHP:
    http://php.net/manual/en/wrappers.php.php





*****************************************************
Оглавление:

  > PHP предоставляет ряд разных I/O потоков, позволяющих...
  > php://stdin, php://stdout и php://stderr
  > php://input
  > php://output
  > php://fd



*****************************************************



> PHP предоставляет ряд разных I/O потоков, позволяющих
  получить доступ к:
  - Собственному входному потоку PHP
  - Собственному выходному потоку PHP
  - К дескрипторам стандартного ввода, вывода и потока ошибок
  - К временным файловым потокам в памяти и на диске
  - К фильтрам, которые могут манипулировать другими файловыми ресурсами
    по мере их считывания или записи


> php://stdin, php://stdout и php://stderr
  > Эти выражения позволяют получить прямой доступ к соответствующим
    потокам ввода или вывода PHP-процесса.
  > Поток указывает лишь на копию файлового дескриптора
    > Т.О. если вы откроете php://stdin и потом закроете его, вы закроете
      только вашу копию дескриптора.
  > Рекомендуется использовать нижеуказанные константы вместо ручного
    открытия потоков с использованием оберток:

      Константы   Обертки         Описание
      - STDIN     php://stdin     Доступ к собственному входному потоку PHP
      - STDOUT    php://stdout    Доступ к собственному выходному потоку PHP
      - STDERR    php://stderr    Доступ к собственному потоку ошибок PHP


> php://input

  > Общая информация
    > Этот поток позволяет читать необработанные данные из тела запроса.
    > Поток только для чтения.
    > В случае POST-запросов предпочтительней использовать php://input
      вместо $HTTP_RAW_POST_DATA, т.к. первый не зависит от специальных
      php.ini директив.
    > php://input не доступен с типом содержимого enctype="multipart/form-data"
    > Поток, открытый php://input, может быть прочтен только 1 раз.
    > Поток не поддерживает операции поиска.

  > Использование для приема JSON-строки
    > JSON-строку можно передать только методом POST, а методом GET нельзя.
    > JSON-строка - это и есть те самые необработанные данные из тела запроса,
      которые можно получить с помощью php://input
    > См. пример использования по следующему адресу:

        '3. Javascript' ->
        '0. Practical samples and techniques' ->
        '5. AJAX - send object as JSON to server (POST)'


> php://output
  > Поток только для записи.
  > Позволяет записать данные в выходной буфер подобно тому, как
    это делают echo и print.

> php://fd
  > Предоставляет прямой доступ к указанному файловому дескриптору.
  > Например, php://fd/3 получает доступ к файловому дескриптору 3.







-------------------------------------------------- */


















