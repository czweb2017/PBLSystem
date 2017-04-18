<?php
/*返回item详情*/
  header('Content-Type: application/json');
  @$id = $_REQUEST['id'];
  require('init.php');
  $sql="SELECT itemid FROM itemmember WHERE uid='$id'";
  $res=mysqli_query($conn,$sql);
  $res=mysqli_fetch_all($res,MYSQLI_ASSOC);
  /*echo $res[1]['itemid'];*/
  $item = [];
  $ques = [];
  foreach($res as $re){
    $sql = "SELECT * FROM item WHERE id=$re[itemid]";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    $item[] = $row;
  }

  $sql="SELECT * FROM question WHERE asker='$id'";
  $res=mysqli_query($conn,$sql);
  $ques=mysqli_fetch_all($res,MYSQLI_ASSOC);

  $finaloutput=[$item,$ques];
  echo json_encode($finaloutput);
