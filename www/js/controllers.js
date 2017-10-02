angular.module('controllers',[])

.controller('loginCtrl',function ($scope,$state,HTTP) {
    $scope.usuario={
        email:'',
        senha:'',
    }

    $scope.login=function () {
        HTTP.post('Pessoa/Login',$scope.usuario,null).then(function successCallback(data) {

        },function errorCallback(error){
            if(error.status == 412)
                alert('Usuário não encontrado');
            else alert('Erro de conexão, tente novamente');
        })

    }

    $scope.abrir=function(){
        $state.go('cadastro');
    }
    /*$scope.login=function () {
        HTTP.post('Pessoa/Login',$scope.usuario,null).then(function successCallback(data){

        },function errorCallback(error) {
            if(error.status == 412)
                alert('Usuario não encontrado');
            else alert('Erro de conexão, tente novamente');
        })
    }*/
})

.controller('cadastroCtrl',function ($scope,$state,HTTP) {
    $scope.usuario={
        nome:'',
        email:'',
        senha:'',
    }
    $scope.cadastrar=function () {
        HTTP.post('Pessoa/Cadastrar',$scope.usuario,null).then(function successCallback(data){

        },function errorCallback(error){
            if(error.status == 412)
                alert('E-mail já existente');
            else alert('Erro de conexão, tente novamente');
        })
    }
})
