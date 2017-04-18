<?php
/**
*接收客户端提交uid，查询出该用户有哪些订单，形如：
{
  totalCount: 23,  //满足条件的记录总数
  pageSize: 3,	  //页面大小，一页最多显示的记录数
  pageCount: 5,	  //页面总数量
  pageNum: 3,	  //当前显示的是哪页中的数据
  data: [{},{},{}] //当前页中的数据
}

*/
header('Content-Type: application/json');

@$id = $_REQUEST['id'];
@$stuid = $_REQUEST['stuid'];
@$pageNum = $_REQUEST['pageNum'];
if(! $pageNum ){ //客户端未提交要显示的页号
    $pageNum = 1;
}else {  //客户端提交了要显示的页号
    $pageNum = intval($pageNum); //把字符串解析为整数
}

//即将要输出给客户端的分页对象
$output = [
    'totalCount' => 0,//总数
    'pageSize' => 3,
    'pageCount' => 0,//总页数
    'pageNum' => $pageNum,//第几页
    'data' => null
];

require('init.php');

//1 查询出总记录数
$sql = "SELECT COUNT(*) FROM report WHERE itemid = '$id' AND stuid='$stuid'";
$result = mysqli_query($conn,$sql);
$output['totalCount'] = intval(  mysqli_fetch_row($result)[0]  );

//2 计算总页数
$output['pageCount'] = ceil( ($output['totalCount'])/($output['pageSize']) );

//3 查询所有的项目信息
$start = ($output['pageNum']-1)*$output['pageSize']; //从哪一条记录开始读取
$count = $output['pageSize']; //一次最多读取的条数
$sql = "SELECT * FROM report WHERE itemid = '$id' AND stuid='$stuid' order by id desc LIMIT $start, $count";
$result = mysqli_query($conn, $sql);
$orderList = mysqli_fetch_all($result, MYSQLI_ASSOC);

//把查询到数据保存入输出数组！！！！
$output['data'] = $orderList;
echo json_encode($output);