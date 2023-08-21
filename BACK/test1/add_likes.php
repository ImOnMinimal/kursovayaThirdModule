<?php 
    header('Access-Control-Allow-Origin: *');
    error_reporting(E_ALL);
    ini_set('display_errors', 'on');

    if (!empty($_GET) and isset($_GET['id'])) {
        $host = 'localhost';
        $user = 'root';
        $pass = '';
        $db = 'test';
        $link = mysqli_connect($host, $user, $pass, $db);
        mysqli_query($link, "SET NAMES 'utf8'");

        $id = $_GET['id'];
    
        $query = "UPDATE posts SET likes=likes+1 WHERE id=$id";
        $result = mysqli_query($link, $query) or die(mysqli_error($link));
        // for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row);
        // $data = mysqli_fetch_assoc($result);
        // echo json_encode($data);
    }



    
    ?>