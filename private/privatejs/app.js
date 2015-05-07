var app = angular.module('myApp', [
  'myApp.UserViewCtrl',
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/userview');

  $stateProvider
    .state('userview', {
      url: '/userview',
      templateUrl: 'privatejs/userview/userview.html',
      controller: 'UserViewCtrl'
    })
});
