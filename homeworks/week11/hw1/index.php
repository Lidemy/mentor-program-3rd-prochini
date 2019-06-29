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
            $sql = 'SELECT prochini_comment.content, prochini_comment.id, prochini_comment.created_at, prochini_users.nickname 
            FROM prochini_comment JOIN prochini_users ON prochini_comment.username = prochini_users.username ORDER BY created_at DESC ';
            $result = $conn->query($sql);
            $data_nums = $result->num_rows;
            $per = 20;
            $pages = ceil($data_nums/$per);
            if (!isset($_GET["page"])){ //假如$_GET["page"]未設置
                $page=1; //則在此設定起始頁數
            } else {
                $page = intval($_GET["page"]); //確認頁數只能夠是數值資料
            }
            $start = ($page-1)*$per; //每一頁開始的資料序號
            $count = 'SELECT prochini_comment.content, prochini_comment.id, prochini_comment.created_at, prochini_users.nickname 
            FROM prochini_comment JOIN prochini_users ON prochini_comment.username = prochini_users.username ORDER BY created_at DESC limit '.$start.','.$per;
            $countResult = $conn->query($count);
            if($countResult->num_rows>0) {
                while ($row = $countResult->fetch_assoc()) {
                    echo'<div class="comment">';
                    echo'<div class="div"><h1>'.$row['nickname'].'</h1></div>';
                    echo'<div class="div"><span>'.$row['created_at'].'</span></div>';
                    echo'<div class="div"><p>'.$row['content'].'</p></div>';
                    if(isset($_COOKIE["user"])){
                        if ($row['nickname']===$user){
                            $id = $row['id'];
                            echo'<a href="./update.php?id='.$id.'#comment">'." 編輯".'</a>';
                            echo'<a href="./delete.php?id='.$id.'">'." 刪除".'</a>';
                        }
                    }
                    echo'</div>';


                }
            }
        ?>
        <div class="page">
        <?php
    //分頁頁碼
    echo '共 '.$data_nums.' 筆-在 '.$page.' 頁-共 '.$pages.' 頁';
    echo "<br /><a href=?page=1>首頁</a> ";
    echo "第 ";
    for( $i=1 ; $i<=$pages ; $i++ ) {
        if ( $page-3 < $i && $i < $page+3 ) {
            echo "<a href=?page=".$i.">".$i."</a> ";
        }
    } 
    echo " 頁 <a href=?page=".$pages.">末頁</a><br /><br />";
?>
        </div>
 



        </div>
    </div>


</body>
</html>