angular.controller("HouseProfileController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
//  $rootScope.master = {};
var finalresult = [];
var auth = $rootScope.Author;

console.log("Insisde Hostprofile "+ auth);

// $http({
//   method: 'GET',
//   url: 'https://partyguardservices20161110094537.azurewebsites.net/API/Account/UserInfo',
// }).then(function(result){
//   finalresult = result.data;
//   console.log("result before "+JSON.stringify(finalresult));
// },function(error){
//   console.log(error);
// });
$http({
      method: 'GET',
      url: 'http://partyguardservices20161110094537.azurewebsites.net/API/Account/UserInfo',
      headers: {
      'Authorization': auth
      }}).then(function(result) {
        finalresult = result.data;
      console.log("result before "+JSON.stringify(finalresult));
    },function(error) {
    console.log(error);
    });
 // $scope.master = {};
 // //
 //
 //          $scope.master = angular.copy(users);




// $scope.update = function(user) {
// $scope.users = user
// };

}]);
