// /**
//  * Created by CHENZ on 2017/4/16.
//  */
var studentId=0;//获取学生id
var app=angular.module('myApp',['ng','ngRoute'])
app.controller('myItemAndMyQues',['$scope','$GS',function($scope,$GS){
    $GS.getDataById('myitemandques.php',0,function(data){
        console.log(data)
        $scope.myitem=data[0];
        $scope.myques=data[1];
        $scope.mil=data[0].length
        $scope.mql=data[1].length
    })
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
app.controller('quesListCtrl',['$scope','$location','$http',function($scope,$location,$http){
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
        $http.get('data/question.php?pageNum='+page)
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
