<?php
    $bd = new mysqli('localhost','root','root','register');

    if($bd->connect_error){
        echo $bd->connect_error;
    }
?>