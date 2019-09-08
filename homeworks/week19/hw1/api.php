<?php

header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PATCH,DELETE,PUT");
header("Access-Control-Allow-Origin: *");

require_once('./conn.php');
require_once('./sql.php');

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch($requestMethod) {
    case 'GET':	
    	renderPost();
        break;
    case 'POST':        
        insertPost();
        break;
    case 'PATCH':	
        updatePost();
        break;
    case 'DELETE':	        
        deletePost();
        break;
    case 'OPTIONS':	        
        header("HTTP/1.0 200");
        break;    
	default:
	    header("HTTP/1.0 200");
	    break;
}
?>