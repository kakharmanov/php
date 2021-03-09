<?php 
    $login = $_POST['login'];
    $name = $_POST['name'];
    $password = $_POST['password'];
    
    if(mb_strlen($login) < 3 || mb_strlen($login) > 20) {
        echo "недопустимая длина сторики - логин";
        exit();
    }else if(mb_strlen($name) < 3||mb_strlen($name) > 20){
        echo "недопустимая длина сторики - имя";
        exit(); 
    }else if(mb_strlen($password) < 3||mb_strlen($password) > 20){
        echo "недопустимая длина сторики - пароль";
        exit(); 
    }
    $password = md5($password."ratata5hhifjiojfe"); //хеширование пароля
    $mysqli = new mysqli("localhost","root","root","register"); 
    
    $result = $mysqli->query("SELECT * FROM `users` WHERE `login` = '$login'");
    
    $user = $result->fetch_assoc();

    if(count($user) == 0) {
        $mysqli->query("INSERT INTO `users` (`login`, `password`, `name`) VALUES('$login','$password','$name')");        
    } else {
        echo "Такого пользователь уже есть";
        header('refresh: 2; url=http://localhost:8888/ra/login.php');  
        exit();
    }
    
    $mysqli->close();
    header('Location:/ra/login.php');  
?>