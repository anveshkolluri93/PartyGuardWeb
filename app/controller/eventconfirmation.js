//Start of Event Confirmation Controller
angular.controller("eventConfirmationController", ['$scope', '$rootScope', '$filter', '$http', '$location',
function ($scope, $rootScope, $filter, $http, $location) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
var auth = $rootScope.Author;
$scope.event = $rootScope.eventCreated;
$scope.assignedGuards = $scope.event.selectedMembers;
$scope.finalEventDetails = {};

//Date formatted to desired format
var eventDate = $filter('date')($scope.event['eventdate'], 'yyyy-MM-dd');
var eventTime = $filter('date')($scope.event['eventtime'],'HH:mm:ss');
var eventDateTime = eventDate + 'T' + eventTime + '.0000000+00:00';

$scope.finalEventDetails['eventName'] = $scope.event['eventname'];
$scope.finalEventDetails['eventDateTime'] = eventDateTime;
$scope.finalEventDetails['fraternityId'] = $rootScope.fraternityID;
var eventmail = $scope.finalEventDetails;
eventmail['Email'] = $rootScope.uname;
$scope.showSuccessAlert = false;


// Function that handles submit event creation
$scope.display = function(showSuccessAlertFlag){
  $http({
        method: 'POST',
        url: 'https://partyguardservices20161110094537.azurewebsites.net/api/EventsModels',
        data: $scope.finalEventDetails,
        headers: {
        'Content-Type': 'application/json'
        }}).then(function(result) {
      $rootScope.eventID = result.data['eventID'];
      console.log($rootScope.eventID);
        console.log(result);

        $http({method: 'GET',
               url: 'http://localhost:8080/doevent',
               params: eventmail,
               headers: {
               'Content-Type': 'application/json'
               }
           });

        $scope.showSuccessAlert = true;
         $scope.successTextAlert = "Your Event has been successfully created !!";
         $location.path('/EditEvents');
      },function(error) {
      console.log(error);
      });


}

//Fucntion to handle click of cancel button
$scope.cancel = function(){

  confirm('Are you sure to cancel?');
  $location.path('/Events');
}

}]);
