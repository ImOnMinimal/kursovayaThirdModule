<?php 
    header('Access-Control-Allow-Origin: *');
    error_reporting(E_ALL);
    ini_set('display_errors', 'on');


    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'test';
    $link = mysqli_connect($host, $user, $pass, $db);
    mysqli_query($link, "SET NAMES 'utf8'");

    $query = "SELECT * FROM posts ORDER BY id ASC";
    $result = mysqli_query($link, $query) or die(mysqli_error($link));
    for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row);
    echo json_encode($data);
?>