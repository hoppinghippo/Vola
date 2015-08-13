'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.setup-1',
  'myApp.setup-2',
  'myApp.setup-3',
  'myApp.study',
  'myApp.WheresVola',
  'myApp.WheresVolaActivity',
  'myApp.Vola-results',
  'myApp.profile',
  'myApp.view2',
  'myApp.adminHome',
  'myApp.adminAttributes',
  'myApp.initial',
  'myApp.reviewGood',
  'myApp.reviewBad',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);



