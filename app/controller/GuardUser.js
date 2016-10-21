angular.controller("GuardUserController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status

                // $location.path('/AddAck');
                 $rootScope.isUserLoggedIn = false;

  // $rootScope.newdata = {};
  //                      $scope.update = function(user) {
  //
  //                       $rootScope.newdata = $scope.user;
  //                        $location.path('/Guard');
  //                        console.log("hi"+JSON.stringify($rootScope.newdata));
  //                      };

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
