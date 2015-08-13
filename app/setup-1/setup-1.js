'use strict';

angular.module('myApp.setup-1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setup-1', {
    templateUrl: 'setup-1/setup-1.html',
    controller: 'setup-1Ctrl'
  });
}])

.controller('setup-1Ctrl', function($scope, $http) {

	$scope.submitSetupOne = function(){

		var postBody = {"username":$scope.user.name, 
						"password":$scope.user.password, 
						"address":$scope.user.address,
						"cell":$scope.user.cell,
						"gender":$scope.user.gender,
						"dob":$scope.user.dob
					};
					
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