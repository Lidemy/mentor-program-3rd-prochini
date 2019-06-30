<?php require_once('./conn.php'); 
$id = $_GET['id'];
$content = $_POST['updateContent'];
if(empty($content)){
    die('empty data');
}
$sql = "UPDATE prochini_comment SET content ='$content' WHERE id = '$id'";
$result = $conn ->query($sql);
if($result){
    header("Location:./index.php#comment");
}else{
    dir("failed".$conn->error);
}
?>