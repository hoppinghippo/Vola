'use strict';

angular.module('myApp.initial', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/initial', {
    templateUrl: 'Feedback/initial/initial.html',
    controller: 'FeedbackCtrl'
  });
}])

.controller('FeedbackCtrl', function($scope, $http) {

	$scope.feedbackAdmin = "Franks Pizza";

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