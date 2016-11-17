angular.controller("AssignGuardsController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
var auth = $rootScope.Author;
$scope.members =[];
$scope.isUserLoggedIn = true;

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




   $scope.display = function(showSuccessAlertFlag){
    $scope.user['selectedMembers'] = $scope.selected;
    $rootScope.eventCreated = $scope.user;
      $location.path('/EventConfirmation');
   }


}]);
