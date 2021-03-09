<?php
    $page = 0;
    $limit = 5;
    $skip = 0;

    if (isset($_GET['page'])) {
        $page = $_GET['page'];
        $skip = ($page - 1) * $limit;
    }

    $postQuery = $bd->query("SELECT * FROM `comments` LIMIT $skip, $limit;");
?>