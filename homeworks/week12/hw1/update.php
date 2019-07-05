<?php require_once('./conn.php'); 
      require_once('./check_login.php');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mine 留言版</title>
    <link rel="stylesheet" href="./index.css">
</head>
<body>
    <div class="wrapper">

    <nav>

<ul>
<?php if(!isset($_COOKIE["user"])) { 
    echo "<li><a href='./signup.php'>| 註冊</a></li>";
    echo "<li><a href='./login.php'>| 登入 |</a></li>";
}?>
<?php if(isset($_COOKIE["user"])) { 
    echo "<li><a href='./logout.php'>| 登出 |</a></li>";}?>
</ul>
</nav>
<p>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</p>

    <div class="container">


        <?php
            $comment_id = $_GET['id'];
            $sql = "SELECT prochini_comment.content, prochini_comment.id, prochini_comment.created_at, prochini_users.nickname 
            FROM prochini_comment 
            JOIN prochini_users ON prochini_comment.username = prochini_users.username 
            where prochini_comment.id = $comment_id ";            
            $result = $conn->query($sql);
            if($result->num_rows>0) {
                while ($row = $result->fetch_assoc()) {
                    if ($user!==$row['nickname']){
                        die('禁止修改別人的頁面');
                    }
                    if(isset($_COOKIE["user"])){
                        $id = $row['id'];
                        $getId = $_GET['id'];
                        if ($id === $getId){
                            echo'<div class="comment" id ="comment">';
                            echo'<div class="div"><h1>'.$row['nickname'].'</h1></div>';
                            echo'<div class="div"><span>'.$row['created_at'].'</span></div>';
                            echo'<form action="./handler_update.php?id='.$id.'" method="POST">';
                            echo'<textarea name="updateContent" id="updateContent" cols="30" rows="10">'.$row['content'].'</textarea>';
                            echo'<input type="submit" name="save" id="save-btn"value="完成">';
                            echo'</form>';
                            echo'</div>';
                            
                    }
                }
            }
        }
        ?>
        </div>
    </div>
</body>
</html>