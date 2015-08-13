'use strict';

angular.module('myApp.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'profileCtrl'
  });
}])

.controller('profileCtrl', function($scope, $http) {

    $scope.theProfile = {name:'Franks Pizza'};
     
  
    $scope.opportunities = [
      {name:'600 people are looking for hotdogs'},
      {name:'500 people are looking to eat outside'},
      {name:'300 people are looking for Pepsi'},
      {name:'300 people are looking to bring their dog'},
      {name:'200 people are look to bring their cat'},
      {name:'50 people are looking to bring their goldfish'},
      {name:'5 people want to not wear shoes'}
    ];
 


});