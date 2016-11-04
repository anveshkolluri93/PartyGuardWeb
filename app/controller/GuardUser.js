angular.controller("GuardUserController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status

                // $location.path('/AddAck');
                // $rootScope.isUserLoggedIn = false;
                $rootScope.loginValue = "Logout";
                  $rootScope.isMaster = true;
                  $rootScope.isHost = true;
                  $rootScope.isGuard = false;
                  $rootScope.isBasic = true;

  //alert
    $scope.submit = function(){
      alert('Password has changed Successfully');
    }

    $scope.editform = function(){
      $location.path("/GuardUserEdit");
    }

//populating dataLoading

var guardetails = $rootScope.udetails;

 $scope.guardetails = guardetails;


if($rootScope.newdata == null){
var guardetails = $rootScope.udetails;

 $scope.guardetails = guardetails;

//$rootScope.newdata = $scope.guardetails;
// $scope.guardetails = $rootScope.newdata;
}
else{
  $scope.guardetails = $rootScope.newdata;
}
}



]);
