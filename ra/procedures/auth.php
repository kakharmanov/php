<?php
$login = filter_var(trim($_POST['login']),
FILTER_SANITIZE_STRING);
$name = filter_var(trim($_POST['name']),
FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']),
FILTER_SANITIZE_STRING);

$password = md5($password."ratata5hhifjiojfe"); //хеширование пароля

$mysqli = new mysqli("localhost","root","root","register");

$result = $mysqli->query("SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");

$user = $result->fetch_assoc();//переводим данные в массив и ниже проверяем

if(empty($user)) {
    echo "Такого пользователя не существует";
    header('refresh: 2; url=http://localhost:8888/ra/login.php');
    exit();
} 

// else if($user['status'] == 1){
//     header('Location:http://localhost:8888/login/admin.php');
//     exit();
// } else {
   
// }

setcookie('user', $user['name'], time() + 3600,"/");
setcookie('status', $user['status'], time() + 3600,"/");

$mysqli->close();

header('Location:http://localhost:8888/ra/login.php');

?>