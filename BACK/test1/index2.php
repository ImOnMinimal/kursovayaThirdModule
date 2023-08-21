<?php
header("Access-Control-Allow-Origin: *");
function get_rand_img($dir)
{
    $arr = array();
    $list = scandir($dir);
    foreach($list as $file)
    {
        if(!isset($img))
        {
            $img = '';
        }
        if(is_file($dir . '/' . $file))
        {
            $ext = end(explode('.', $file));
            if($ext == 'gif' || $ext == 'jpeg' || $ext == 'jpg' || $ext == 'png' || $ext == 'GIF' || $ext == 'JPEG' || $ext == 'JPG' || $ext == 'PNG')
            {
                array_push($arr, $file);
                $img = $file;
            }
        }
    }
    
    if($img != ''){
        $text = [];
        $i = 1;

        $img = array_rand($arr);
        $img = $arr[$img];
        $img = "./dota2heroes/$img";
        array_push($text, (object)[
            'id' => $i,
            'src' => $img,
        ]);
        return $text;
    }
    // $img = str_replace("'", "\'", $img);
    // $img = str_replace(" ", "%20", $img);
    // return $img;
}
echo json_encode(get_rand_img('./dota2heroes'));


?>