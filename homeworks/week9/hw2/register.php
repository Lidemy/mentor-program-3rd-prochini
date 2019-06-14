<?php 
require_once('./conn.php');

$username = $_POST['username'];
$password = $_POST['password'];
$nickname = $_POST['nickname'];


if(empty($username)|| empty($password)||empty($nickname)){die('請輸入資料');}

$sql = 'SELECT `username`FROM `prochini_users` WHERE 100';
$result = $conn->query($sql);

if($result->num_rows === 0){
    $conn->query("INSERT INTO prochini_users(username, password, nickname) VALUES('$username', '$password', '$nickname')") or die ($conn->error);
    my_msg('註冊成功','./login.php'); 
}
if($result->num_rows>0) {
    while ($row = $result->fetch_assoc()){
        if ($username===$row['username']){
            return my_msg('此帳號已有人使用，請選擇其他帳號','./index.php');
        } 
    } $conn->query("INSERT INTO prochini_users(username, password, nickname) VALUES('$username', '$password', '$nickname')") or die ($conn->error);
    my_msg('註冊成功','./login.php'); 
}

function my_msg($msg,$redirect){ 
    echo "<script language=javascript>"; 
    echo "window.alert('".$msg."')"; 
    echo "</SCRIPT>"; 
    echo "<script language=\"javascript\">"; 
    echo "location.href='".$redirect."'"; 
    echo "</script>"; 
    return; 
}


?>