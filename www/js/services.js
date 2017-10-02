angular.module('services',[])

/*.factory('HTTP',function ($http,$q) {
    self={
        _url:'http://localhost/prodotto/Index.php/',
        post:function(url,data,config) {
            var defer=$q.defer();
            var postData = 'myData='+JSON.stringify(data);
            var req = {
                method: 'POST',
                url: self._url+url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data:postData
            }
            $http(req).then(function successCallback(r){
                console.log(r);
                defer.resolve(r);
            },function errorCallback(error){
                console.log(error);
                defer.reject(error);
            })
            return defer.promise;
        }
    }
    return self;
})*/

.factory('HTTP',function ($http,$q){
    self={
        _url:'http://localhost/prodotto/Index.php/',
        post:function(url,data,config){
            var defer=$q.defer();
            var postData = 'myData='+JSON.stringify(data);
            var req = {
                method: 'POST',
                url: self._url+url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data:postData
            }
            $http(req).then(function successCallback(r) {
                console.log(r);
                defer.resolve(r);

            },function errorCallback(error){
                console.log(error);
                defer.reject(error);
            })
            return defer.promise;
        }
    }
    return self;
})