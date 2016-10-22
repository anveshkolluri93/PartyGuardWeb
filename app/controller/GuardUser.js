angular.controller("GuardUserController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status

                // $location.path('/AddAck');
                 $rootScope.isUserLoggedIn = false;


  //alert
    $scope.submit = function(){
      alert('Password has changed Successfully');
    }


if($rootScope.newdata == null){
var guardetails =
 {
 Fullname:"abishai",
 Fraternityname:"isa",
 Email:"abishai@gmail.com",
 Phonenumber:"9856745678"
 };
 $scope.guardetails = guardetails;

$rootScope.newdata = $scope.guardetails;
// $scope.guardetails = $rootScope.newdata;
}
else{
  $scope.guardetails = $rootScope.newdata;
}
}



]);
