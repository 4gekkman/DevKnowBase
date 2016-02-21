<!-- Шапка сайта и главное меню -->
<section class="top">
    <p style="text-align: center"><b><?=$top_info?></b></p>
    <?php
    echo "<ul>";
    foreach($menu as $key => $value) {
        echo "<li><a href='$value'>$key</a></li>";
    }
    echo "</ul>";
    ?>
</section>

