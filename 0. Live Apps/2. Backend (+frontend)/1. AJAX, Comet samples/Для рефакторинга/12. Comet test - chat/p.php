<?php

  // Послать необходимый для работы с SSE заголовок
  header('Content-Type: text/event-stream');

  // Если это XMLHttpRequest-запрос, сохранить его в сессии
  if(!empty($HTTP_RAW_POST_DATA)) {
  session_start();

    // Записать данные в сессию
    $_SESSION['result'] = $HTTP_RAW_POST_DATA;

    echo $HTTP_RAW_POST_DATA;

  session_write_close();
  } else {                // если же нет, то значит это SSE
    // Послать данные клиенту с учетом полученной инфы от XMLHttpRequest-запроса
      session_start();
      echo "data: ".$_SESSION['result']."\n\n";

      // Обнулить данные сессии
      $_SESSION['result'] = '';
      session_write_close();

  }


?> 
