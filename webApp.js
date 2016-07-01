var app = angular.module('webApp', ['ngRoute', 'door3.css', 'ui.bootstrap']);
  
app.constant('baseUrl', 'file:///K:/bitbucket%20projects/Personal%20Website/') ;

app .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
      when('/about', {
        templateUrl: 'templates/bio.html',
        css: "css/bio.css", 
      }).
      when('/resume', {
        templateUrl: 'templates/resume.html',
        css: "css/resume.css", 
      }).
      when('/home', {
        templateUrl: 'templates/home.html',
        css: "css/home.css", 
      }).
      when('/projects', {
        templateUrl: 'templates/projects.html',
        css: "css/projects.css", 
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

   app.controller('mainController', function($scope) {
    });