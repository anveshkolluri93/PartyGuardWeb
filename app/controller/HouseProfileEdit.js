angular.controller("HouseProfileEditController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {
  $rootScope.loginValue = "Logout";
$scope.user= $rootScope.master;
$scope.update = function(user) {
$rootScope.master = $scope.user;
$location.path('/Hostprofile');
console.log("Hello buddy" + JSON.stringify($rootScope.master))
};

}]);
