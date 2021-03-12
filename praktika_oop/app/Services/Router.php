<?php

namespace App\Services;

class Router
{
    private static $list = [];
    
    public static function page($uri,$page_name)
    {
        self::$list[] = [
            "uri" => $uri,
            "page" =>$page_name,
        ];
    }

    public static function post($uri, $class, $method)
    {
        self::$list[] = [
            "uri"=>$uri,
            "class"=>$class,
            "method"=>$method,
            "post"=>true
        ];
    }

    public static function enable()
    {

        $query = $_GET['q'];

        foreach (self::$list as $route) {  //перебор передаваемых данных
            if($route["uri"] === '/'.$query){ // если такой урл есть то пропускаем дальше
                if($route["post"] === true){ // если это метод пост пропускаем дальше
                    $action = new $route["class"]; // создаем экземпляр класса Auth
                    $method = $route["method"];  //передача метода
                    $action->$method($_POST); //
                    die();
                }
            } else { // елси это не пост метод, продолжаем отсюда и переходим по ссылке
                require_once "views/pages/".$route['page'].'.php';
                die();
            }
            
            
        }
        self::errors();//нет такого урла? ошибка значит!
        
    }

    private static function errors()
    {
        require_once "views/errors/404.php";
    }

}

?>