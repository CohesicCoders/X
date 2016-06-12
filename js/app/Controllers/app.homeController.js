var appControllers = angular.module('app.appControllers');
appControllers.controller('homeController',['$scope',function($scope){
	$scope.$parent.log="Home controller attached.";
}]);