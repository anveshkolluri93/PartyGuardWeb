//creating GuardUserController with in built angular services such as scope,rootscope,location
angular.controller("GuardUserController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status
                $rootScope.loginValue = "Logout";
                  $rootScope.isMaster = true;
                  $rootScope.isHost = true;
                  $rootScope.isGuard = false;
                  $rootScope.isBasic = true;
  //alert
    $scope.submit = function(){
      alert('Password has changed Successfully');
    }
    //After editform is triggered then page will be redirectd to /GuardUserEdit
    $scope.editform = function(){
      $location.path("/GuardUserEdit");
    }
//populating dataLoading
var guardetails = $rootScope.udetails;
 $scope.guardetails = guardetails;
if($rootScope.newdata == null){
var guardetails = $rootScope.udetails;

 $scope.guardetails = guardetails;

}
else{
  $scope.guardetails = $rootScope.newdata;
}
}

]);
