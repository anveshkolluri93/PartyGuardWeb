angular.controller("AssignGuardsController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
$scope.selectedEvent = $rootScope.selectedEvent;
var auth = $rootScope.Author;
$scope.members =[];
$scope.isUserLoggedIn = true;
$scope.dataToSend ={};
$scope.selectedGuardID =[];
$scope.showSuccessAlert = false;


 $http({
       method: 'POST',
       url: 'https://partyguardservices20161110094537.azurewebsites.net/api/HostUserProfile/DisplayGuardDetails',
       headers: {
       'Authorization': auth
       }}).then(function(result) {
         $scope.members = result.data;
         console.log($scope.members);
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




   $scope.display = function(showSuccessAlertFlag){
//console.log("selected guards");

for(var i=0;i<$scope.selected.length; i++){
//  $scope.selectedGuardID.push($scope.selected[i].guardProfileID);
//$scope.selectedGuardID[i].id = $scope.selected[i].guardProfileID;
$scope.selectedGuardID.push({'id':$scope.selected[i].guardProfileID});
}
// $scope.selectedGuardID.push({
//   key : "id",
//   value : $scope.selected.guardProfileID;
// })

  // console.log($scope.selected);
  // console.log($scope.selectedGuardID);
  $scope.dataToSend['guards'] = $scope.selectedGuardID;
  $scope.dataToSend['eventId'] = $scope.selectedEvent.eventID;
 console.log($scope.dataToSend);

    $http({
          method: 'POST',
          url: 'http://partyguardservices20161110094537.azurewebsites.net/AssignGuards',
          data: $scope.dataToSend,
          headers: {
    //      'Content-Type': 'application/json'
          'Authorization': auth
          }}).then(function(result) {
            $scope.showSuccessAlert = true;
            $scope.successTextAlert = "Your have successfully assigned Guards to your event !!";
        },function(error) {
          $scope.showSuccessAlert = true;
          $scope.successTextAlert = "Your have already assigned Guards to your event !!";
        console.log(error);

        });
   }


}]);
