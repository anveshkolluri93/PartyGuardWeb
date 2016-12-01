//House Profile Controller
angular.controller("HouseProfileController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
$scope.users =[];

var auth = $rootScope.Author;

//  GET call to load Host user details
$http({
      method: 'GET',
      url: 'https://partyguardservices20161110094537.azurewebsites.net/API/Account/UserInfo',
      headers: {
      'Authorization': auth
      }}).then(function(result) {
        $scope.users = result.data;
        $rootScope.fraternityID = $scope.users['FraternityId']
        console.log($rootScope.fraternityID);
      console.log("result before "+JSON.stringify($scope.users));
    },function(error) {
    console.log(error);
    });

}]);
