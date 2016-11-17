angular.controller("EditEventsController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {

                // $location.path('/HostProfile');
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
$scope.events = {};
$rootScope.selectedEvent = {};


$http({
      method: 'GET',
      url: 'http://partyguardservices20161110094537.azurewebsites.net/FraternityEvents/2',
      // headers: {
      // 'Authorization': auth
      // }
    }).then(function(result) {
    $scope.events = result.data;
    console.log($scope.events);
    },function(error) {
    console.log(error);
    });


    $scope.grabEvent = function(item){
      $rootScope.selectedEvent = item;
    
    }


}]);
