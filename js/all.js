/**
 * Created by CHENZ on 2017/4/17.
 */
/*各种数据交互*/
app.service('$GS', ['$http',
    function ($http, $ionicLoading) {
        this.sendJSON=function(url,sendData){//sendData为对象
            $.ajax({
                type:'POST',
                url:'data/'+url,
                data:{data:sendData},
                success:function(data){
                    console.log(data)
                },
                error:function(){
                    console.log('0')
                }
            })
        }
        /*发送并获取返回*/
        this.send = function (url, arr,callback) {
            $http({
                url:'data/'+url,
                method:'POST',
                data:{arr:arr}
            }).success(function (data) {
                callback(data)
            });
        }
        this.getDataById=function(url,id,callback){
            $http.get('data/'+url+'?id='+id)
                .success(function(data){
                    if(callback){
                        callback(data)
                    }
                })
        }
        this.getDataByTwoId=function(url,id1,id2,callback){
            $http.get('data/'+url+'?id='+id1+'&stuid='+id2)
                .success(function(data){
                    if(callback){
                        callback(data)
                    }
                })
        }
    }])
/*有关时间*/
app.service('$time', [function () {
        this.getTime = function () {
            var now = new Date()
            now=now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()
            return now
        }
    }])
    app.service('$identy',[function(){
        var majors=['计算机科学与技术','电子信息工程','国际经济与贸易','高分子材料']
        var teachers=['Mike','Bill','Tom','Lilith']
        var students=['Bob','Jack','Mary','Peter']
        this.getMajors=function(num){
            return majors[num]
        }
        this.getTeachers=function(num){
            return teachers[num]
        }
        this.getStudents=function(num){
            return students[num]
        }
    }])