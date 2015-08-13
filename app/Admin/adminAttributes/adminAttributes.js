'use strict';

angular.module('myApp.adminAttributes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adminAttributes', {
    templateUrl: 'Admin/adminAttributes/adminAttributes.html',
    controller: 'adminAttCtrl'
  });
}])

.controller('adminAttCtrl', function($scope, $http) {

    $scope.attributeName = "Communities you serve";

    $scope.adminUser = "Franks Pizza";


    $scope.communites = [
  		{name:'WifiSpeed', group:[{name:'10mbps'},{name:'20mbps'}], acvtive:'no'},
      {name:'Coupons', group:[{name:'Free Piece of Pizza'},{name:'Free drink'}], acvtive:'no'}
    ];

    $scope.loadAttribute = function(){

            
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