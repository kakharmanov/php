<?php
    include 'class/login.php';
    session_start();
    if(isset($_POST['ok'])){
        $user = new login();
        $log = $_POST['login'];
        $pass = $_POST['password'];
        $user->Entry($log,$pass);
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация</title>
</head>
<body>
    <form action="" method="post">
        <input type="login" name="login" placeholder="login">
        <input type="password" name="password" placeholder="password">
        <input type="submit" name="ok">
    </form>
</body>
</html>