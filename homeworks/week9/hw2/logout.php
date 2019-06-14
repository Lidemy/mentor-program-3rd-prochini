<?php
setcookie("user", "",time()-10);

Function my_msg($msg,$redirect){ 
    echo "<SCRIPT Language=javascript>"; 
    echo "window.alert('".$msg."')"; 
    echo "</SCRIPT>"; 
    echo "<script language=\"javascript\">"; 
    echo "location.href='".$redirect."'"; 
    echo "</script>"; 
    return; 
}
my_msg('登出成功','./index.php');
?>