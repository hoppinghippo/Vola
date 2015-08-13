'use strict';

angular.module('myApp.Vola-results', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Vola-results', {
    templateUrl: 'Vola-results/Vola-results.html',
    controller: 'VolaCtrl'
  });
}])

.controller('VolaCtrl', function($scope, $http) {

    $scope.friends = [
     
    ];
	
    $scope.response =  {name:'Franks Pizza', email:'blah@boo.com',location:'575 25th North Royal Oak, MI (555) 555-5555', 
                    percent:'The best place Frank’s Pizza based on 75% Quality Rank There you have a 3/4 chance of liking it.'};

    $scope.reasons = [
      {answer:'Don wants cheap food and the pizza is on sale', good:"yes"},
      {answer:'You want good internet and they have 10 mbps speed', good:"yes"},
      {answer:'You want outlets and they have 5', good:"yes"},
      {answer:'Don wants quiet, but the noise level is medium', good:"no"},
    ];
 

 


});