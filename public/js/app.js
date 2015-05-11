var app = angular.module('myApp', [
  'myApp.HomeCtrl',
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'js/home/home.html',
      controller: 'HomeCtrl'
    })
});


$('.sign-in').on('click', function(){
  window.location = "/login";
});