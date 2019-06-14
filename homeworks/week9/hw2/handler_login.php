<?php 
require_once('./conn.php');

$username = $_POST['username'];
$password = $_POST['password'];

if(empty($username)|| empty($password)){die('請輸入資料');}
$sql = 'SELECT `username`, `password`,`nickname` FROM `prochini_users` WHERE 50';
$result = $conn->query($sql);
if($result->num_rows>0) {
    while ($row = $result->fetch_assoc()){
        if ($username===$row['username'] && $password===$row['password']){
            setcookie("user", $row['nickname'], time()+3600*24);
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