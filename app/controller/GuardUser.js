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
 Fullname:"myname",
 Fraternityname:"isa",
 Email:"big@big.com",
 Phonenumber:"98567"
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
