<?php 
require_once('./conn.php');

$username = $_POST['username'];
$password = $_POST['password'];
$id = hash('sha256', bin2hex(random_bytes(15))); 

if(empty($username)|| empty($password)){die('請輸入資料');}

$sql_certificate = 'SELECT `id` FROM `prochini_certificate`';
$result_certificate = $conn->query($sql_certificate);
if($result_certificate->num_rows>0){
    while ($row = $result_certificate->fetch_assoc()){
        if ($id === $row['id']){
            setcookie("user", $id, time()+3600*24);
            my_msg('登入成功','./index.php');
        }
    }
}
$sql = 'SELECT `username`, `password`,`nickname` FROM `prochini_users` ';
$result = $conn->query($sql);
if($result->num_rows>0) {
    while ($row = $result->fetch_assoc()){
        if ($username === $row['username'] && password_verify($password, $row['password'])){
            setcookie("user", $id, time()+3600*24);
            $conn->query("INSERT INTO prochini_certificate(id, username) VALUES('$id', '$username')") or die ($conn->error);
            my_msg('登入成功','./index.php');
        }
    }my_msg('帳號密碼不符，登入失敗','./index.php');
}
Function my_msg($msg,$redirect){ 
    echo "<SCRIPT Language=javascript>"; 
    echo "window.alert('".$msg."')"; 
    echo "</SCRIPT>"; 
    echo "<script language=\"javascript\">"; 
    echo "location.href='".$redirect."'"; 
    echo "</script>"; 
    return; 
}


?>