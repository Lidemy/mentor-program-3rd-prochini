<?php
function my_msg($msg,$redirect){ 
    echo "<script language=javascript>"; 
    echo "window.alert('".$msg."')"; 
    echo "</script>"; 
    echo "<script language=\"javascript\">"; 
    echo "location.href='".$redirect."'"; 
    echo "</script>"; 
    return; 
}

?>