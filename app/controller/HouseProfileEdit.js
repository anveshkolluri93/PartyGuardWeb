angular.controller("HouseProfileEditController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {
  $rootScope.loginValue = "Logout";

  $rootScope.isMaster = true;
  $rootScope.isHost = false;
  $rootScope.isGuard = true;
  $rootScope.isBasic = true;

$scope.user= $rootScope.master;
$scope.update = function(user) {
$rootScope.master = $scope.user;
$location.path('/Hostprofile');
console.log("Hello buddy" + JSON.stringify($rootScope.master))
};

}]);
