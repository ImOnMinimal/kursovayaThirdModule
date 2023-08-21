<?php
    header("Access-Control-Allow-Origin: *");
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'test';
    $link = mysqli_connect($host, $user, $pass, $db); //, $db
    mysqli_query($link, "SET NAMES 'utf8'");

    $query = "SELECT * FROM users";
    $res = mysqli_fetch_assoc(mysqli_query($link, $query));
    echo json_encode($res['login']);

    // $res = mysqli_query($link, $query) or die(mysqli_error($link));
    // for ($data = []; $row = mysqli_fetch_assoc($res); $data[] = $row);
    

    // foreach ($data as $elem){
    //     echo json_encode($elem);
    // }

?>