<?php
error_reporting(E_ALL); // (0) / (E_ALL)
ini_set('display_errors', 'on'); // 'off' / 'on'
?>
<?php
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'test';
    $link = mysqli_connect($host, $user, $pass, $db); //, $db
    mysqli_query($link, "SET NAMES 'utf8'");
?>
<?php
    session_start();
    if (!empty($_GET['password']) and !empty($_GET['email'])) {
        function valid($string){
            $string = trim($string);
            $string = htmlspecialchars($string);
            $string = urldecode($string);
            $string = strip_tags($string);
            return $string;
        }
        $email = valid($_GET['email']);
        $password = valid($_GET['password']);

        $query = "SELECT * FROM users WHERE email='$email'";
        $res = mysqli_query($link, $query);
        $user = mysqli_fetch_assoc($res);

        if (!empty($user)) {
            $hash = $user['password']; 
            if (password_verify($password, $hash)) {
                echo('logged');
            } else {
                echo('Неверный пароль!');
            }
        }
        else {
            echo('Пользователя с таким логином не существует!');
        }
    }
    else {
        echo('Заполните все поля!');
    }
?>
