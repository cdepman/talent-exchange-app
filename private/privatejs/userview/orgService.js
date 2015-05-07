function OrgService () {
  var OrgService = {};
  OrgService.getOrgs = function (callback) {
    $http.get('/private/orgs').
    success(function(data, status, headers, config) {
      console.log(data);
      callback(data);
    }).
    error(function(data, status, headers, config) {
      console.log(status);
    });
  };
  return OrgService;
}
angular
  .module('myApp.OrgService')
  .factory('OrgService', OrgService);