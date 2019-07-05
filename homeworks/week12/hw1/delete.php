<?php require_once('./conn.php'); 

$id = $_GET['id'];
$sql = "DELETE FROM  prochini_comment where id = ".$id;
if ($conn->query($sql)) {
    header("Location: ./index.php");
} else {
    die("failed.");
}
?>