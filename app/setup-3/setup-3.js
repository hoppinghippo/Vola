'use strict';

angular.module('myApp.setup-3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setup-3', {
    templateUrl: 'setup-3/setup-3.html',
    controller: 'setup-3Ctrl'
  });
}])

.controller('setup-3Ctrl', function($scope, $http) {

    $scope.colors = [
      {name:'Joe Joseph', email:'blah@boo.com'},
      {name:'Bob Bobby', email:'blah@boo.com', notAnOption: true},
      {name:'Dan Daniel', email:'blah@boo.com'},
      {name:'Tim Timothy', email:'blah@boo.com', notAnOption: true},
    ];
    $scope.myColor = $scope.colors[2]; // red

    $scope.saveFriends = function(){

  
            
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