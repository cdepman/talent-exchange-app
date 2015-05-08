angular.module('myApp.UserViewCtrl', [])
.controller('UserViewCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {

  $scope.orgs = [];

  var getOrgs = function () {
    $http.get('/private/orgs').
    success(function(data, status, headers, config) {
      $scope.orgs = data;
      console.log($scope.orgs);
    }).
    error(function(data, status, headers, config) {
      console.log(status);
    });
  }

  getOrgs();

}]);