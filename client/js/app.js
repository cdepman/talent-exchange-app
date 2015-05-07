var app = angular.module('myApp', [
  'myApp.HomeCtrl',
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'js/home/home.html',
      controller: 'HomeCtrl'
    })
});

