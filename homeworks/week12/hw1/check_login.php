<?php 
include_once('./conn.php');
if(isset($_COOKIE["user"]) && !empty($_COOKIE["user"])){
    $token = $_COOKIE["user"];
    $sql= 
    "SELECT u.nickname ,c.id, c.username 
    FROM prochini_certificate as c
    JOIN prochini_users as u
    ON c.username = u.username 
    where c.id = '$token'";
    $result = $conn->query($sql);
    if(!$result || $result->num_rows <=0){
        $user = null;
    }else {
        $row = $result->fetch_assoc();
        $user = $row['nickname'];
    }
}else{
    $user = null;
}


function isLogin() {
    if (isset($_COOKIE["user"]) && !empty($_COOKIE["user"])) {
      return true;
    } else{
        return false;
    }
  }
  
?>