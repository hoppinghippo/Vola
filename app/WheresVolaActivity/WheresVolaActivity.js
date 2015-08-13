'use strict';

angular.module('myApp.WheresVolaActivity', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/WheresVolaActivity', {
    templateUrl: 'WheresVolaActivity/WheresVolaActivity.html',
    controller: 'studyCtrl'
  });
}])

.controller('studyCtrl', function($scope, $http) {

   $scope.theActivity = "Study"; 

    $scope.friends = [
     
    ];
	$scope.preferences = [
      {name:'Conference Rooms', email:'blah@boo.com'},
      {name:'Couches', email:'blah@boo.com', notAnOption: true},
      {name:'Outlets', email:'blah@boo.com'},
      {name:'Free Wifi', email:'blah@boo.com', notAnOption: true},
      {name:'Wifi Quality', email:'blah@boo.com', notAnOption: true},
      {name:'Coupons', email:'blah@boo.com'},
      {name:'Noise', email:'blah@boo.com', notAnOption: true},
      {name:'Crowds', email:'blah@boo.com', notAnOption: true},
    ];


    $scope.loadPreferences = function(){


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