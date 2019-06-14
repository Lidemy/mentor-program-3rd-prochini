<?php
setcookie("user", "",time()-10);

function my_msg($msg,$redirect){ 
    echo "<script language=javascript>"; 
    echo "window.alert('".$msg."')"; 
    echo "</SCRIPT>"; 
    echo "<script language=\"javascript\">"; 
    echo "location.href='".$redirect."'"; 
    echo "</script>"; 
    return; 
}
my_msg('登出成功','./index.php');
?>