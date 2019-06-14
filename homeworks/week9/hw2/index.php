<?php require_once('./conn.php'); ?>
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
    <div class="container">
        <nav>
        <ul>
            <li><a href="<?php if(!isset($_COOKIE["user"])) { echo "./signup.php";}?>">| 註冊</a></li>
            <li><a href="<?php if(!isset($_COOKIE["user"])) { echo "./login.php";}?>">| 登入</a></li>
            <li><a href="<?php if(isset($_COOKIE["user"])) { echo "./logout.php";}?>">| 登出 |</a></li>
        </ul>
        </nav>
        <div class="reply">
        <form action="./process.php" method="POST">
        <div class="header"><h2> <pre>   建立貼文</pre> </h2></div>
        <div class="div"><textarea name="content" id="" cols="30" rows="10"placeholder="<?php 
        if(!isset($_COOKIE["user"])) {
            echo "請登入留言";
        } else {
            echo $_COOKIE["user"].'，在想些什麼?';
        }
        ?> "></textarea></div>
        <div class="div"></div>
        <div class="btn"><input type="submit" name="save" id="save-btn"value="發佈"></div>
        <div class="div"><input type="hidden" name="username" id="" ></div>
        </div>

        <?php
            $sql = 'SELECT prochini_comment.content, prochini_comment.created_at, prochini_users.nickname FROM prochini_comment JOIN prochini_users ON prochini_comment.username = prochini_users.username ORDER BY created_at DESC limit 0,50';
            $result = $conn->query($sql);
            if($result->num_rows>0) {
                while ($row = $result->fetch_assoc()) {
                    echo'<div class="comment">';
                    echo'<div class="div"><h1>'.$row['nickname'].'</h1></div>';
                    echo'<div class="div"><span>'.$row['created_at'].'</span></div>';
                    echo'<div class="div"><p>'.$row['content'].'</p></div>';
                    echo'</div>';
                }
            }
        ?>
  


        </form>
        </div>
    </div>


</body>
</html>