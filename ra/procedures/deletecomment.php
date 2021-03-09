<?php
include "../database/database.php";

$id = $_GET['pid'];
$bd->query("DELETE FROM `comments` WHERE `id`='$id'");


header('Location:http://localhost:8888/ra/login.php');

?>
