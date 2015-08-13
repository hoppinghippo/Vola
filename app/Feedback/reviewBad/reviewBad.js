'use strict';

angular.module('myApp.reviewBad', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reviewBad', {
    templateUrl: 'Feedback/reviewBad/reviewBad.html',
    controller: 'FeedbackCtrl'
  });
}])

.controller('FeedbackCtrl', function($scope, $http) {

	$scope.feedbackAdmin = "Franks Pizza";

	$scope.communites = [
  		{name:'WifiSpeed', group:[{name:'10mbps'},{name:'20mbps'}], acvtive:'no'},
      {name:'Coupons', group:[{name:'Free Piece of Pizza'},{name:'Free drink'}], acvtive:'no'}
    ];


	$scope.submitfeedback = function(){

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