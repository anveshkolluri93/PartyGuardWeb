// Start of Edit Events Controller
angular.controller("EditEventsController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
$scope.events = {};
$rootScope.selectedEvent = {};
$scope.fratID = $rootScope.fraternityID;
var getUrlConstructed = 'https://partyguardservices20161110094537.azurewebsites.net/FraternityEvents/' + $scope.fratID;


// GET call to load list of events onload of controller

$http({
      method: 'GET',
      url: getUrlConstructed,
    }).then(function(result) {
    $scope.events = result.data;
    console.log($scope.events);
    },function(error) {
    console.log(error);
    });


// Function that handles click of event checkbox
    $scope.grabEvent = function(item){
      $rootScope.selectedEvent = item;
    }

//Function that deletes the selected event from the database
    $scope.deleteEvent = function(item){
      var postUrlConstructed = 'https://partyguardservices20161110094537.azurewebsites.net/api/EventsModels/' + item.eventID;
      console.log(postUrlConstructed);
      $http({
            method: 'DELETE',
            url: postUrlConstructed,
          }).then(function(result) {
          alert("Successfully Deleted");
          $scope.refresh();
          },function(error) {
          console.log(error);
          alert("Sorry please try again at a later point of time");
          });

    }

    //Function to reload the data after it performs the delete operation
    $scope.refresh = function(){
      $http({
            method: 'GET',
            url: getUrlConstructed,
          }).then(function(result) {
          $scope.events = result.data;
          console.log($scope.events);
          },function(error) {
          console.log(error);
          });
}

//Function that handles click on event name
$scope.editEvent = function(item){
  alert("Edit Event Service is not yet provided");
}


}]);
//End of Edit events Controller
