'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {

	$scope.login = function(){

		var postBody = {"username":$scope.username, "password":$scope.password};
		var data = {}; 
		var endPoint = "/endpoint/goes/here";
		var status = {}; 
		var headers = {};
		var config = {};

		$http.post(endPoint , postBody).success(function(data, status, headers, config)
		{
			
		}).error(function(data)
		{
		
	
		});
	}


});