angular.module('myApp.UserViewCtrl', [])
.controller('UserViewCtrl', ['$scope', '$state', '$http', function($scope, $state, $http, OrgService) {

  $scope.orgs = [];

  OrgService.getOrgs(function(data){
    $scope.orgs = data;
    $scope.$apply();
  });


}]);