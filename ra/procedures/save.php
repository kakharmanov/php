<?php
include "../database/database.php";

$add_comment = $_POST['comment'];
$bd->query("INSERT INTO `comments`(`comment`) VALUES ('$add_comment')");


header('Location:http://localhost:8888/ra/login.php');

?>

