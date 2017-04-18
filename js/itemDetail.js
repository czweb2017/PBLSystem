// /**
//  * Created by CHENZ on 2017/4/16.
//  */
var url=location.search;
function getId(url){//获取id
    var res=url.split('?')[1].split('=')[1]
    return res;
}
var id=getId(url);
var studentId=0;
var app=angular.module('itemdetailApp',['ng'])
app.controller('itemDetailCtrl',['$scope','$time','$location','$http',function($scope,$time,$location,$http){
    $scope.data={};
    $scope.dia={};
    $scope.progress=null
    /*项目详情*/
    $http.get('data/item.php?id='+id)
        .success(function(data){
            $scope.data=data[0]
            //console.log('项目详情',data)
            /*进度条*/
            var now =new Date().getTime()
            var end=new Date(data[0].endtime).getTime();
            var start=new Date(data[0].starttime).getTime();
            $scope.progress=((parseInt(now-start))/parseInt(end-start)).toFixed(2)*100
        })
    //console.log($time.getTime())
    /*对话*/
    $http.get('data/dialog.php?id='+id)
        .success(function(data){
            $scope.dia=data
            //console.log('dia',data)
        })
}])
app.controller('itemMember',['$scope','$http','$GS',function($scope,$http,$GS){
    $scope.members=[]
    $GS.getDataById('itemmembers.php',2,function(data){
        console.log(data)
        $scope.members=data
    })
    // $http.get('data/'+'itemmembers.php'+'?id='+id)
    //     .success(function(data){
    //         console.log(data)
    //     })
}])
app.controller('itemListCtrl',['$scope','$location','$http',function($scope,$location,$http){
    $scope.itemList=[];//项目列表
    $scope.pagenow=1;//当前页面
    $scope.itemPage=[]//分页显示
    $scope.quesList=[]//问题列表
    /*连接详情部分*/
    $scope.showItemDetail=function(index){
        //console.log($scope.itemList[index]['id'])//项目索引
        return $scope.itemList[index]['id']
    }
    $scope.showQuesDetail=function(index){
        //console.log($scope.quesList[index])//问题索引
    }
    /*查询部分*/
    $scope.queryItem=function(){//查询项目
        if($scope.itemKeyWord1!==undefined){
            alert($scope.itemKeyWord1)
        }else if($scope.itemKeyWord2!==undefined){
            alert($scope.itemKeyWord2)
        }else if($scope.itemKeyWord3!==undefined){
            alert($scope.itemKeyWord3)
        }
    }
    $scope.queryQues=function(){//查询问题
        if($scope.quesKeyWords!==undefined){
            alert($scope.quesKeyWords)
        }
    }
    /*请求项目分页显示*/
    $scope.showItemPage=function(page){
        $http.get('data/itemlist.php?pageNum='+page)
            .success(function(data){
                console.log(data)
                $scope.itemList=data['data'];
                $scope.pagecount=data['pageCount']
                var sum=data['pageCount']-data['pageNum']>5?5:data['pageCount'];
                $scope.itemPage=[]
                for(var i=data['pageNum'];i<=sum;i++){
                    $scope.itemPage.push(i);
                }
                if(data['pageNum']>=3){
                    $scope.itemPage.unshift(data['pageNum']-1);
                    $scope.itemPage.unshift(data['pageNum']-2);
                }else if(data['pageNum']==2){
                    $scope.itemPage.unshift(data['pageNum']-1);
                }
            })
    }
    $scope.toItemPage=function(s){
        $scope.pagenow=s;
        $scope.showItemPage(s);
    }
    $scope.preItem=function(){
        if($scope.pagenow>1){
            $scope.pagenow--;
            $scope.showItemPage($scope.pagenow)
        }
    }
    $scope.nextItem=function(){
        if($scope.pagenow<$scope.pagecount){
            $scope.pagenow++;
            $scope.showItemPage($scope.pagenow)
        }
    }
    $scope.isActivePage=function(page){
        return page==$scope.pagenow
    }

    /*请求问题分页显示*/
    $scope.showItemPage=function(page){
        $http.get('data/itemlist.php?pageNum='+page)
            .success(function(data){
                //console.log(data)
                $scope.itemList=data['data'];
                $scope.pagecount=data['pageCount']
                var sum=data['pageCount']-data['pageNum']>5?5:data['pageCount'];
                $scope.itemPage=[]
                for(var i=data['pageNum'];i<=sum;i++){
                    $scope.itemPage.push(i);
                }
                if(data['pageNum']>=3){
                    $scope.itemPage.unshift(data['pageNum']-1);
                    $scope.itemPage.unshift(data['pageNum']-2);
                }else if(data['pageNum']==2){
                    $scope.itemPage.unshift(data['pageNum']-1);
                }
            })
    }
    $scope.toItemPage=function(s){
        $scope.pagenow=s;
        $scope.showItemPage(s);
    }
    $scope.preItem=function(){
        if($scope.pagenow>1){
            $scope.pagenow--;
            $scope.showItemPage($scope.pagenow)
        }
    }
    $scope.nextItem=function(){
        if($scope.pagenow<$scope.pagecount){
            $scope.pagenow++;
            $scope.showItemPage($scope.pagenow)
        }
    }
    $scope.isActivePage=function(page){
        return page==$scope.pagenow
    }
    $scope.showItemPage($scope.pagenow)
    $http.get('data/question.php')
        .success(function(data){
            $scope.quesList=data;
        })
}])
app.controller('reportCtrl',['$scope','$location','$http',function($scope,$location,$http){
    $scope.itemList=[];//项目列表
    $scope.pagenow=1;//当前页面
    $scope.itemPage=[]//分页显示
    $scope.quesList=[]//问题列表

    /*连接详情部分*/
    $scope.showItemDetail=function(index){
        //console.log($scope.itemList[index]['id'])//项目索引
        return $scope.itemList[index]['id']
    }
    $scope.showQuesDetail=function(index){
        //console.log($scope.quesList[index])//问题索引
    }
    /*查询部分*/
    $scope.queryItem=function(){//查询项目
        if($scope.itemKeyWord1!==undefined){
            alert($scope.itemKeyWord1)
        }else if($scope.itemKeyWord2!==undefined){
            alert($scope.itemKeyWord2)
        }else if($scope.itemKeyWord3!==undefined){
            alert($scope.itemKeyWord3)
        }
    }
    $scope.queryQues=function(){//查询问题
        if($scope.quesKeyWords!==undefined){
            alert($scope.quesKeyWords)
        }
    }
    /*请求项目分页显示*/
    $scope.showItemPage=function(page){
        $http.get('data/itemlist.php?pageNum='+page)
            .success(function(data){
                console.log(data)
                $scope.itemList=data['data'];
                $scope.pagecount=data['pageCount']
                var sum=data['pageCount']-data['pageNum']>5?5:data['pageCount'];
                $scope.itemPage=[]
                for(var i=data['pageNum'];i<=sum;i++){
                    $scope.itemPage.push(i);
                }
                if(data['pageNum']>=3){
                    $scope.itemPage.unshift(data['pageNum']-1);
                    $scope.itemPage.unshift(data['pageNum']-2);
                }else if(data['pageNum']==2){
                    $scope.itemPage.unshift(data['pageNum']-1);
                }
                console.log($scope.itemPage)
            })
    }
    $scope.toItemPage=function(s){
        $scope.pagenow=s;
        $scope.showItemPage(s);
    }
    $scope.preItem=function(){
        if($scope.pagenow>1){
            $scope.pagenow--;
            $scope.showItemPage($scope.pagenow)
        }
    }
    $scope.nextItem=function(){
        if($scope.pagenow<$scope.pagecount){
            $scope.pagenow++;
            $scope.showItemPage($scope.pagenow)
        }
    }
    $scope.isActivePage=function(page){
        return page==$scope.pagenow
    }

    /*请求问题分页显示*/
    $scope.showItemPage=function(page){
        $http.get('data/reportlist.php?pageNum='+page+'&id='+id+'&stuid='+studentId)
            .success(function(data){
                console.log(data,'???')
                $scope.itemList=data['data'];
                $scope.pagecount=data['pageCount']
                var sum=data['pageCount']-data['pageNum']>5?5:data['pageCount'];
                $scope.itemPage=[]
                for(var i=data['pageNum'];i<=sum;i++){
                    $scope.itemPage.push(i);
                }
                if(data['pageNum']>=3){
                    $scope.itemPage.unshift(data['pageNum']-1);
                    $scope.itemPage.unshift(data['pageNum']-2);
                }else if(data['pageNum']==2){
                    $scope.itemPage.unshift(data['pageNum']-1);
                }
            })
    }
    $scope.toItemPage=function(s){
        $scope.pagenow=s;
        $scope.showItemPage(s);
    }
    $scope.preItem=function(){
        if($scope.pagenow>1){
            $scope.pagenow--;
            $scope.showItemPage($scope.pagenow)
        }
    }
    $scope.nextItem=function(){
        if($scope.pagenow<$scope.pagecount){
            $scope.pagenow++;
            $scope.showItemPage($scope.pagenow)
        }
    }
    $scope.isActivePage=function(page){
        return page==$scope.pagenow
    }
    $scope.showItemPage($scope.pagenow)
    $http.get('data/question.php')
        .success(function(data){
            $scope.quesList=data;
        })
}])
app.controller('finalScoreCtrl',['$scope','$GS',function($scope,$GS){
    $scope.data=[]
    $GS.getDataByTwoId('finalscore.php',id,studentId,function(data){
        console.log(data)
        $scope.data=data
    })
}])
app.controller('dialog',['$scope','$GS','$location','$http',function($scope,$GS,$location,$http){
    $scope.speakword=''
    $scope.speak=function(data){
        if(data!=''){
            $GS.sendJSON('dialogSpeak.php',{itemid:id,createid:studentId,message:data})
            $scope.dia.push({id:'',itemid:id,createid:studentId,content:data})
            $scope.speakword='';
        }
    }
}])