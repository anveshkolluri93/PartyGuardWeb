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
$scope.fratID = $rootScope.fraternityID;
var getUrlConstructed = 'https://partyguardservices20161110094537.azurewebsites.net/FraternityEvents/' + $scope.fratID;


console.log(getUrlConstructed);
//$scope.refresh();

$http({
      method: 'GET',
      url: getUrlConstructed,
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

      console.log($rootScope.selectedEvent);

    }

    $scope.deleteEvent = function(item){
      var postUrlConstructed = 'https://partyguardservices20161110094537.azurewebsites.net/api/EventsModels/' + item.eventID;
      console.log(postUrlConstructed);
      $http({
            method: 'DELETE',
            url: postUrlConstructed,
            // headers: {
            // 'Authorization': auth
            // }
          }).then(function(result) {
          alert("Successfully Deleted");
          $scope.refresh();
          },function(error) {
          console.log(error);
          alert("Sorry please try again at a later point of time");
          });

    }
    $scope.refresh = function(){
      $http({
            method: 'GET',
            url: getUrlConstructed,
            // headers: {
            // 'Authorization': auth
            // }
          }).then(function(result) {
          $scope.events = result.data;
          console.log($scope.events);
          },function(error) {
          console.log(error);
          });
}

$scope.editEvent = function(item){
  alert("Edit Event Service is not yet provided");
}


}]);
