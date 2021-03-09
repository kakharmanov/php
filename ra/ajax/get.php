<?php

include "database/database.php";
include "general_content/emmet.php";
include "../login.php";

$postQuery = $bd->query("SELECT * FROM comments");

$result = [];

while ($row = $postQuery->fetch_object()){
    array_push($result, $row);
}

echo json_encode($result);

?>
