<?php

session_start();
if(isset($_SESSION['login'])){

    if(isset($_POST['logout'])){
        unset($_SESSION['login']);
        header("Location:index.php");
    }
    echo "Привет, ".$_SESSION['Login'];
}
else{
    exit("Вы не авторизованы");
}

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Профиль</title>
</head>
<body>
    <form action="" method="post">
        <input type="submit" name="logout" value="Выйти">
    </form>
    
</body>
</html>