<?php 
require_once('./conn.php');
require_once('./utils.php');

$username = $_POST['username'];
$password = $_POST['password'];
$token = hash('sha256', bin2hex(random_bytes(15)));


if(empty($username)|| empty($password)){die('請輸入資料');};


$sql = "SELECT * FROM prochini_users WHERE prochini_users.username = ?; ";
$stmt = mysqli_stmt_init($conn);
if (!mysqli_stmt_prepare($stmt, $sql)){
    echo"SQL statement failed";
} else {
    mysqli_stmt_bind_param($stmt, "s",$username);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if($result->num_rows>0) {
        $row = $result->fetch_assoc();
                if (password_verify($password, $row['password'])){
                    $conn->query("DELETE FROM prochini_certificate where username = '$username'") or die ($conn->error);
                    setcookie("user", $token, time()+3600*24);            
                    $conn->query("INSERT INTO prochini_certificate(id, username) VALUES('$token', '$username')") or die ($conn->error);
                    my_msg('登入成功','./index.php');
                }
            }
            my_msg('帳號密碼不符，登入失敗','./index.php');
}


?>