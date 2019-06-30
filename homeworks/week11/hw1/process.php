<?php 
require_once('./conn.php');

if(isset($_COOKIE["user"])) {

    $content = $_POST['content'];
    $nickname = $_POST['nickname'];
    if(empty($content)){die('請輸入資料');}
    $selectUserName = "SELECT username FROM prochini_users WHERE nickname ='$nickname'";
    $result = $conn->query($selectUserName);
    $row = $result->fetch_assoc();
    $username = $row['username'];

    $addMessage ="INSERT INTO prochini_comment(username, content) VALUES('$username', '$content')";
    
    $result = $conn->query($addMessage);
    if($result){
        header('location: ./index.php');
    } else {
        echo"failed" . $conn->error;
    }
    
    
} else {
    echo "請登入留言";
}






?>