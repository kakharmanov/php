<?php

session_start();
include_once 'connect.php';

class Login{

    private function checkLogin($login){
        $query = mysqli_query("SELECT * FROM `users` WHERE `login` = '$login'");
        $query1 = mysqli_fetch_array($query);

        if($query1 > 0){
            return true;
        }
        else{
            return false;
        }
            
    }

    private function checkPassword($login, $pass){
        $query = mysqli_query("SELECT * FROM `users` WHERE `login` = '$login'");
        $row = mysqli_fetch_array($query);
        if ($row['password'] == $pass){
            return true;
        } else{
            return false;
        }
    }

    public function Entry($login,$pass){
        if($this->checkLogin($login)){
            if($this->checkPassword($login,$pass)){
                $_SESSION['login'] = $login;
                header("Location: profile.php");
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
}


?>