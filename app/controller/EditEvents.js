angular.controller("EditEventsController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {

                // $location.path('/HostProfile');
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
$scope.events = {};


$http({
      method: 'GET',
      url: 'http://partyguardservices20161110094537.azurewebsites.net/FraternityEvents/2',
      // headers: {
      // 'Authorization': auth
      // }
    }).then(function(result) {
      //  console.log("Hello"+JSON.stringify(result));
      $scope.events = result.data;
  //  $scope.events['EventName']= result.data['eventName'];
    // $scope.events['Date'] = result.data['eventDateTime'].substring(0,10);
    // $scope.events['time'] = result.data['eventDateTime'].substring(11,16);
    console.log($scope.events);
  //  console.log(result);
    },function(error) {
    console.log(error);
    });


}]);
