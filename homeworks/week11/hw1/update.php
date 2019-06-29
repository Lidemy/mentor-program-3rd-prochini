<?php require_once('./conn.php'); 

        $sql_certificate = 'SELECT prochini_users.nickname ,prochini_certificate.id, prochini_certificate.username FROM prochini_certificate JOIN prochini_users ON prochini_certificate.username = prochini_users.username ';
        $result_certificate = $conn->query($sql_certificate);
        if(isset($_COOKIE["user"])){
            if($result_certificate->num_rows>0) {
                while ($row_certificate = $result_certificate -> fetch_assoc()) {
                    if ($_COOKIE["user"] === $row_certificate['id']){
                        $user = $row_certificate['nickname'];
                    }
                }
            }
        }




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

        <div class="reply">

        <div class="header"><h2> <pre>   建立貼文</pre> </h2></div>
        <form action="./process.php" method="POST">
        <div class="div"><textarea name="content" id="" cols="30" rows="10"placeholder="<?php
        if(!isset($_COOKIE["user"])) {
            echo "請登入留言";
        } else {
            echo $user."，在想什麼呢?";
        }
        ?> "></textarea>

        </div>
        <input type="hidden" name="nickname" value="<?php if(isset($_COOKIE["user"])){echo $user; }?>">
        <div class="btn"><input type="submit" name="save" id="save-btn"value="發佈"></div>
        </form>
        </div>

        <?php
            $sql = 'SELECT prochini_comment.content, prochini_comment.id, prochini_comment.created_at, prochini_users.nickname FROM prochini_comment JOIN prochini_users ON prochini_comment.username = prochini_users.username ORDER BY created_at DESC limit 0,50';
            $result = $conn->query($sql);
            if($result->num_rows>0) {
                while ($row = $result->fetch_assoc()) {
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
                            
                    }if ($id !== $getId){
                        echo'<div class="comment">';
                        echo'<div class="div"><h1>'.$row['nickname'].'</h1></div>';
                        echo'<div class="div"><span>'.$row['created_at'].'</span></div>';
                        echo'<div class="div"><p>'.$row['content'].'</p></div>';
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