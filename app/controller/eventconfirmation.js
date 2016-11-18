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
var eventDate = $filter('date')($scope.event['eventdate'], 'yyyy-MM-dd');
var eventTime = $filter('date')($scope.event['eventtime'],'HH:mm:ss');
var eventDateTime = eventDate + 'T' + eventTime + '.0000000+00:00';



console.log("Event details are");
console.log($scope.event);
console.log(eventDate);
console.log(eventTime);
console.log(eventDateTime);

$scope.finalEventDetails['eventName'] = $scope.event['eventname'];
$scope.finalEventDetails['eventDateTime'] = eventDateTime;
$scope.finalEventDetails['fraternityId'] = $rootScope.fraternityID;

console.log($scope.finalEventDetails);


$scope.showSuccessAlert = false;


$scope.display = function(showSuccessAlertFlag){

  console.log("inside");

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
        $scope.showSuccessAlert = true;
         $scope.successTextAlert = "Your Event has been successfully created !!";
         $location.path('/EditEvents');
      },function(error) {
      console.log(error);
      });


}

$scope.cancel = function(){

  confirm('Are you sure to cancel?');
  $location.path('/Events');
}

}]);
