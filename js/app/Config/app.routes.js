angular.module('ccApp')
.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
	

      $routeProvider.
        when('/', {
          templateUrl: './js/app/Views/home.html',
          controller:'homeController'
        }).
        when('/Restaurante', {
          template: ''
        }).
        otherwise('/');
         $locationProvider.html5Mode(true);
}]);