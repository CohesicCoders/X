var appControllers = angular.module('app.appControllers');
appControllers.controller('mainController',['$scope',function($scope){
	$scope.log="Main controller attached.";
}]);