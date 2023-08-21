
<?php
header("Access-Control-Allow-Origin: *");
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
$access = true;
$msg = '';
if (!empty($_GET['login']) && !empty($_GET['email']) && !empty($_GET['password']) && !empty($_GET['confirm'])) {
    function valid($string){
        $string = trim($string);
        $string = htmlspecialchars($string);
        $string = urldecode($string);
        $string = strip_tags($string);
        return $string;
    }
    $login = valid($_GET['login']);
    $password = valid($_GET['password']);
    $email = valid($_GET['email']);
    // $firstname = valid($_POST['firstname']);
    // $middlename = valid($_POST['middlename']);
    // $lastname = valid($_POST['lastname']);
    // $dateofbirth = $_POST['dateofbirth'];

    if ($_GET['password'] !== $_GET['confirm']) {
        $access = false;
        $msg .= 'Пароли не совпадают!';
    }

    $query = "SELECT * FROM users WHERE login='$login'";
    $user = mysqli_fetch_assoc(mysqli_query($link, $query));
    if (!empty($user)) {
        $access = false;
        $msg .= 'Логин уже занят!';  
    }

    if (mb_strlen($password)<8) {
        $access = false;
        $msg .= 'Пароль должен содержать 8 или более символов!';  
    }

    if ($access == true) {
        $password = password_hash($_GET['password'], PASSWORD_DEFAULT);
        $query = "INSERT INTO users SET login='$login', password='$password', email='$email'";
        mysqli_query($link, $query);

        // $id = mysqli_insert_id($link);
        // session_start();
        // $_SESSION['id'] = $id;
        // $_SESSION['auth'] = true;
        // $_SESSION['userLogin'] = $login;
        echo json_encode('logged');
        
        // header('Location: index.php');
        // die();

    }
    else {
        echo json_encode($msg);
    }
}
else{
    echo json_encode('Заполните все поля!');
}
    
    
?>

