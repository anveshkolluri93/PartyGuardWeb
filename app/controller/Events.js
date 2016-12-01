//Events Controller
angular.controller("eventsController", ['$scope', '$rootScope', '$location', '$http', '$filter',
function ($scope, $rootScope, $location, $http, $filter) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
var auth = $rootScope.Author;
$scope.members =[];
$scope.isUserLoggedIn = true;
$scope.currentDate = new Date();
$scope.currentDateFormatted = $filter('date')($scope.currentDate, 'yyyy-MM-dd');
$scope.currentTimeFormatted = $filter('date')($scope.currentDate,'HH:mm');


 $http({
       method: 'POST',
       url: 'https://partyguardservices20161110094537.azurewebsites.net/api/HostUserProfile/DisplayGuardDetails',
       headers: {
       'Authorization': auth
       }}).then(function(result) {
         $scope.members = result.data;
         console.log($scope.members );
     },function(error) {
     console.log(error);
     });



   $scope.selected =[];
   $scope.final = [];

   $scope.exist = function(item){
     return $scope.selected.indexOf(item) > -1;
    console.log($scope.selected.indexOf(item));
   }

   $scope.toggleSelection = function(item){
     var idx = $scope.selected.indexOf(item);
     if(idx > -1){
       $scope.selected.splice(idx,1);

     }else{
       $scope.selected.push(item);
     }
   }

// Function to handle Submit button click
   $scope.display = function(showSuccessAlertFlag){
    $scope.user['selectedMembers'] = $scope.selected;
    $rootScope.eventCreated = $scope.user;
    $location.path('/EventConfirmation');
}
//Fucntion to handle reset button click
$scope.reset = function(showSuccessAlertFlag){
  $scope.user = {};
}

}]);
