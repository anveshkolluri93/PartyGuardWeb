angular.controller("eventConfirmationController", ['$scope', '$rootScope',
function ($scope, $rootScope) {
$rootScope.loginValue = "Logout";

$scope.event = $rootScope.eventCreated;
$scope.assignedGuards = $scope.event.selectedMembers;

$scope.showSuccessAlert = false;


$scope.display = function(showSuccessAlertFlag){

$scope.showSuccessAlert = true;
 $scope.successTextAlert = "Your Event has been successfully created !!";
}

}]);
