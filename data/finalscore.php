<?php
  header('Content-Type: application/json');
  @$id = $_REQUEST['id'];
  @$stuid = $_REQUEST['stuid'];
  require('init.php');

  $sql="SELECT * FROM itemscore WHERE itemid='$id' AND stuid='$stuid'";
  $res=mysqli_query($conn,$sql);
  $res=mysqli_fetch_all($res,MYSQLI_ASSOC);
  echo json_encode($res);
