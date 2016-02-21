<?php
// ###############################
// 18.3. Полоса прогресса загрузки
// ###############################
// > Отслеживание прогресса загрузки с помощью сессий (PHP >= 5.4.0)
// > Для наглядной демонстрации прогресса закачки рекомендуется увеличить размер файла, который можно закачать
// > Вся информация в файле '18. Working with Files'

/* Этапы реализации:
1. Проверка версии PHP. Если она < 5.4.0 - вырубить скрипт.
2. Проверка, включена ли директива session.upload_progress.enabled. Если нет - вырубить скрипт.
3. Запуск сессии
4. Обработка запросов-проверок прогресса от клиента
5. Подключение jQuery
6. Вывод HTML формы для загрузки файлов
7. Клиентский код, содержащий AJAX запросы
*/

// 1. Проверка версии PHP. Если она < 5.4.0 - вырубить скрипт.
$ver = explode('.', phpversion());
if($ver[0] . $ver[1] . $ver[2] < 540)
    die('Требуется PHP версии 5.4.0 или выше');

// 2. Проверка, включена ли директива session.upload_progress.enabled. Если нет - вырубить скрипт.
if ( !intval(ini_get('session.upload_progress.enabled')) )
    die( 'session.upload_progress.enabled is not enabled' );

// 3. Запуск сессии
session_start();

// 4. Обработка запросов-проверок прогресса от клиента
if ( isset( $_GET['progress'] ) ) {

    $progress_key = strtolower(ini_get("session.upload_progress.prefix").'demo');

    if ( !isset( $_SESSION[$progress_key] ) ) exit('Идет закачка...');

    $upload_progress = $_SESSION[$progress_key];
    /* get percentage */
    $progress = round( ($upload_progress['bytes_processed'] /
                        $upload_progress['content_length']) * 100, 2 );

    exit( "Процесс загрузки: $progress%" );
}
?>

<!-- 5. Подключение jQuery -->
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>

<!-- 6. Вывод HTML формы для загрузки файлов -->
<?php if ( isset($_GET['iframe']) ): /* thank you Webkit... */ ?>
    <form action="" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="<?php echo ini_get("session.upload_progress.name"); ?>" value="demo">
        <input type="file" name="uploaded_file">
        <input type="submit" value="Upload">
    </form>

    <script type="text/javascript">
        // Сбросить текущий хэш (то, что в адресе идет после # )
        window.location.hash = ""; /* reset */

        // Назначит текущий хэш = 'uploading'
        jQuery("form").bind("submit", function() { window.location.hash = "uploading"; });
    </script>

<!-- 7. Клиентский код, содержащий AJAX запросы -->
<?php else: ?>

    <iframe src="?iframe" id="upload_form"></iframe>
    <script type="text/javascript">
        jQuery(document).ready(init);

        function init() {
            /* start listening on submit */
            update_file_upload_progress();
        }

        function update_file_upload_progress() {
            if ( window.frames.upload_form.location.hash != "#uploading" ) {
                setTimeout( update_file_upload_progress, 100 ); /* has upload started yet? */
                return;
            }
            $.get( /* lather */
                "?progress",
                function(data) {
                    /* rinse */
                    jQuery("#file_upload_progress").html(data);
                    /* repeat */
                    setTimeout( update_file_upload_progress, 500 );
                }
            ).error(function(jqXHR, error) { alert(error); });
        }
    </script>

    <div id="file_upload_progress"></div>
<?php endif; ?>