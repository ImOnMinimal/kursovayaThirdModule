
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
if (!empty($_GET['comment']) && !empty($_GET['nickname'])) {
    function valid($string){
        $string = trim($string);
        $string = htmlspecialchars($string);
        $string = urldecode($string);
        $string = strip_tags($string);
        return $string;
    }
    $comment = valid($_GET['comment']);
    $nickname = valid($_GET['nickname']);
    $post_id = $_GET['post_id'];

    $query = "INSERT INTO comments SET nickname='$nickname', comment='$comment', post_id='$post_id', date=CURRENT_TIMESTAMP";
    mysqli_query($link, $query) or die(mysqli_error($link));
    echo json_encode('success');
}
else{
    echo json_encode('Заполните все поля!');
}
    
    
?>

