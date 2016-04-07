var app = angular.module('webApp', ['ngRoute', 'door3.css', 'ui.bootstrap']);
  
app.constant('baseUrl', 'file:///K:/bitbucket%20projects/Personal%20Website/') ;

app .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
      when('/about', {
        templateUrl: 'templates/bio.html',
      }).
      when('/resume', {
        templateUrl: 'templates/resume.html',
      }).
      when('/home', {
        templateUrl: 'templates/home.html',
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

   app.controller('mainController', function($scope) {
    });