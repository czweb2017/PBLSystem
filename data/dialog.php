<?php
/*返回item详情*/
  header('Content-Type: application/json');
@$id = $_REQUEST['id'];
  require('init.php');
  $sql="SELECT * FROM dialog WHERE itemid = '$id'";
  $res=mysqli_query($conn,$sql);
  $output=mysqli_fetch_all($res,MYSQLI_ASSOC);
  echo json_encode($output);
