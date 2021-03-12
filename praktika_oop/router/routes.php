<?php

use App\Services\Router;
use App\Controllers\Auth;

Router::page('/home', 'home');
Router::page('/register', 'register' );

Router::post('/auth/register', Auth::class, 'register');
Router::enable();



?>