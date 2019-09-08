<?php
require_once('./conn.php');
$connection = $con;

function renderPost(){
	global $connection;
	$sql = "SELECT * FROM `todo_api`";
      $result = mysqli_query($connection,$sql);
      if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_assoc($result)){
			$response[] = $row;
		}
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	  }
	   else {
		echo '沒有資料';
	  }
}
function insertPost(){
	global $connection;
	$data = htmlspecialchars($_POST['content'],ENT_QUOTES);
	$status = htmlspecialchars($_POST['done'],ENT_QUOTES);
	$query = "INSERT INTO todo_api (content,done)VALUES (?,?)";	
	$stmt = $connection->prepare($query);
    $stmt->bind_param("si",$data,$status);    
    if ($stmt->execute()) {
      $result = $stmt->get_result();      
      echo '新增成功';
    } else {
      echo '新增失敗';
    }
}
function updatePost(){
	global $connection;
	$id = $_GET['id'];	
	$status = $_GET['status'];	
	$query = "UPDATE todo_api SET done = ? WHERE id = ?";	
	$stmt = $connection->prepare($query);	
	$stmt->bind_param("ii", $status, $id);	
    if ($stmt->execute()) {
		$result = $stmt->get_result();      
		echo '更新成功';
	  } else {
		echo '更新失敗';
	  }
}
function deletePost(){
	global $connection;
	$id = $_GET['id'];
	$query = "DELETE FROM todo_api where id = ".$id;
	mysqli_query($connection,$query);
}
?>