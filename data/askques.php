<?php
$databag=$_POST['data'];
require('init.php');
echo $databag['itemid'];
echo $databag['createid'];
echo $databag['message'];
$sql="INSERT INTO question VALUES(NULL,'$databag[title]','$databag[content]',$databag[asker],$databag[askfor],$databag[tip],now())";
$res=mysqli_query($conn,$sql);
if($res){
    echo 1;
}else{
    echo 0;
}
?>


