'use strict';

angular.module('myApp.adminHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adminHome', {
    templateUrl: 'Admin/adminHome/adminHome.html',
    controller: 'adminHomeCtrl'
  });
}])

.controller('adminHomeCtrl', function($scope, $http) {

   $scope.adminUser = "Franks Pizza";

    $scope.upcomings = [
      {name:'Movie', email:'blah@boo.com'},
      {name:'Lunch', email:'blah@boo.com', notAnOption: true},
      {name:'Dinner', email:'blah@boo.com'},
     
    ];

    $scope.atributes = [
		{name:'industry' , acvtive:'no'},
		{name:'location' , acvtive:'no'}, 
		{name:'Contact Info' , acvtive:'no'}, 
		{name:'Description' , acvtive:'no'}, 
		{name:'Menu' , acvtive:'no'},
    {name:'Logos' , acvtive:'no'},
    {name:'Photos' , acvtive:'no'},
    {name:'Hours' , acvtive:'no'},
    {name:'Communities' , acvtive:'no'},

    ];

    $scope.adminServices = [
      {name:'Matches' , acvtive:'no'},
      {name:'Comments' , acvtive:'no'}, 
      {name:'Who\' scheduled' , acvtive:'no'}, 
      {name:'Quickbooks' , acvtive:'no'}, 
    ];

    $scope.loadAttributes = function(){

            
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

     $scope.loadServices = function(){

            
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

    $scope.loadAdminSvc = function(service){

            
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

    $scope.loadAtt = function(attr){

            
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