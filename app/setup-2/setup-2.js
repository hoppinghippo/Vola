'use strict';

angular.module('myApp.setup-2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setup-2', {
    templateUrl: 'setup-2/setup-2.html',
    controller: 'setup-2Ctrl'
  });
}])

.controller('setup-2Ctrl', function($scope, $http) {


		$scope.interests = [  
			{name:'study' , acvtive:'no'},
			{name:'excersice' , acvtive:'no'}, 
			{name:'jog' , acvtive:'no'}, 
			{name:'gender' , acvtive:'no'}, 
			{name:'party' , acvtive:'no'}, 
			{name:'movie' , acvtive:'no'}, 
			{name:'hotel' , acvtive:'no'}, 
			{name:'breakfast' , acvtive:'no'}, 
			{name:'lunch' , acvtive:'no'}, 
			{name:'dinner' , acvtive:'no'}
		];

		$scope.submitSetupTwo = function(){

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
		},

		$scope.getInterests = function(){

			var postBody = {};
						
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