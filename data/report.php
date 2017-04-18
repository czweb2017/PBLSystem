<?php
/*返回item详情*/
  header('Content-Type: application/json');
  $id=$_REQUEST['id'];
  $stuid=$_REQUEST['stuid'];
  require('init.php');
  $res=mysqli_query($conn,"SELECT * FROM report WHERE stuid='$stuid' AND itemid='$id'");
  $output=mysqli_fetch_all($res,MYSQLI_ASSOC);
  echo json_encode($output);
