angular.module('myApp.HomeCtrl', [])
.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.userSignup = function(){
    window.location.href = '/signup';
  }
  $scope.home = function(){
    $state.go('home');
  }
}]);