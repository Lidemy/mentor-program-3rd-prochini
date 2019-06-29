<?php
require_once("./conn.php");

$id = $_COOKIE["user"];
$sql = "DELETE FROM prochini_certificate WHERE id = ".'e184b57c59e4d48615d61a88dc26c60082915579';
$conn->query($sql);
setcookie("user", "",time()-10);
my_msg('登出成功','./index.php');


Function my_msg($msg,$redirect){ 
    echo "<script language=javascript>"; 
    echo "window.alert('".$msg."')"; 
    echo "</script>"; 
    echo "<script language=\"javascript\">"; 
    echo "location.href='".$redirect."'"; 
    echo "</script>"; 
    return; 
}

?>