<?php
/*返回item详情*/
  header('Content-Type: application/json');
  $id=$_REQUEST['id'];
  require('init.php');
  $res=mysqli_query($conn,"SELECT * FROM report WHERE id='$id'");
  $output=mysqli_fetch_all($res,MYSQLI_ASSOC);
  echo json_encode($output[0]);
