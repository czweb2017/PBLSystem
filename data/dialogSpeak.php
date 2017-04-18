<?php
$databag=$_POST['data'];
require('init.php');
echo $databag['itemid'];
echo $databag['createid'];
echo $databag['message'];
$sql="INSERT INTO dialog VALUES(NULL,$databag[itemid],$databag[createid],'$databag[message]')";
$res=mysqli_query($conn,$sql);
if($res){
    echo 1;
}else{
    echo 0;
}
?>


