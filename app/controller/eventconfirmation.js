angular.controller("eventConfirmationController", ['$scope', '$rootScope',
function ($scope, $rootScope) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;

$scope.event = $rootScope.eventCreated;
$scope.assignedGuards = $scope.event.selectedMembers;
$scope.finalEventDetails = {};
//var eventDate = $filter('date')($scope.entity.date, 'yyyy-MM-dd');
//$scope.event['event.eventdate | date: "MM-dd-yyyy"']

console.log("Event details are");
console.log($scope.event);

$scope.finalEventDetails['eventName'] = $scope.event['eventname']
$scope.finalEventDetails['eventDateTime']


$scope.showSuccessAlert = false;


$scope.display = function(showSuccessAlertFlag){

  $http({
        method: 'POST',
        url: 'https://partyguardservices20161110094537.azurewebsites.net/api/EventsModels',
        headers: {
        'Authorization': auth
        }}).then(function(result) {
          $scope.members = result.data;
          console.log($scope.members );
      },function(error) {
      console.log(error);
      });

$scope.showSuccessAlert = true;
 $scope.successTextAlert = "Your Event has been successfully created !!";
}

}]);
