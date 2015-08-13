'use strict';

angular.module('myApp.WheresVola', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/WheresVola', {
    templateUrl: 'WheresVola/WheresVola.html',
    controller: 'volaHomeCtrl'
  });
}])

.controller('volaHomeCtrl', function($scope, $http) {

    $scope.upcomings = [
      {name:'Movie', email:'blah@boo.com'},
      {name:'Lunch', email:'blah@boo.com', notAnOption: true},
      {name:'Dinner', email:'blah@boo.com'},
     
    ];

    $scope.activities = [
		{name:'study' , acvtive:'no'},
		{name:'excersice' , acvtive:'no'}, 
		{name:'movie' , acvtive:'no'}, 
		{name:'music' , acvtive:'no'}, 
		{name:'dinner' , acvtive:'no'},

    ];

    $scope.loadUpcoming = function(){

            
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

     $scope.loadActivities = function(){

            
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

    $scope.loadVola = function(){


    	//loads the Vola info and redirects to the page
            
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