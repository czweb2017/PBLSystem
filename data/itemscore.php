<?php
/*返回item详情*/
  header('Content-Type: application/json');
@$id = $_REQUEST['id'];
@$stuId = $_REQUEST['stuId'];
  require('init.php');
  $sql="SELECT * FROM itemscore WHERE itemid = '$id' and stuid ='$stuId'";
  $res=mysqli_query($conn,$sql);
  $output=mysqli_fetch_all($res,MYSQLI_ASSOC);
  echo json_encode($output);
