<?php 
require_once('./conn.php');
require_once('./token.php');
session_start();

if(isset($_POST['token'])){
    if(TOKEN::check($_POST['token'])){
        if(isset($_COOKIE["user"])) {
            $content = htmlspecialchars($_POST['content'],ENT_QUOTES);
            $nickname = $_POST['nickname'];
            $parent_id = $_POST['parent_id'];    
            if(empty($content)){die('請輸入資料');}
            $selectUserName = "SELECT username FROM prochini_users WHERE nickname ='$nickname'";
            $result = $conn->query($selectUserName);
            $row = $result->fetch_assoc();
            $username = $row['username'];
        
            $addMessage ="INSERT INTO prochini_comment(username, content, parent_id) VALUES(?, ?, ?)";
            $stmt = $conn ->stmt_init();
            if (!$stmt->prepare($addMessage)){
                echo"SQL statement failed";
            }else{
                $stmt->bind_param("ssi", $username, $content,$parent_id);
                $stmt->execute();
                $result = $stmt->get_result();
                    header('location: ./index.php');
            }
        } else {
            echo "請登入留言";
        }
    } else die("you can't do this");
}








?>