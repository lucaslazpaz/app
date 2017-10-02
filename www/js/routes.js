angular.module('routes',[])

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('login',{
        url:'/login',
        templateUrl:'templates/login.html',
        controller:'loginCtrl'
    })

    $stateProvider.state('cadastro',{
        url:'/cadastro',
        templateUrl:'templates/cadastro.html',
        controller:'cadastroCtrl'
    })

    $urlRouterProvider.otherwise('/login');
})