'use strict';

angular.module('myApp.study', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/study', {
    templateUrl: 'study/study.html',
    controller: 'studyCtrl'
  });
}])

.controller('studyCtrl', function($scope, $http) {

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
 


});