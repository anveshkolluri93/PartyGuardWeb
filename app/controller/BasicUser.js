angular.controller("BasicUserController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location ) {

    // reset login status

                // $location.path('/AddAck');
                 $rootScope.isUserLoggedIn = false;


                      //  $scope.update = function(basicuserdetails) {
                      //    $scope.newdata = angular.copy(basicuserdetails);
                      //  };

//alert
  $scope.submit = function(){
    alert('Password has changed Successfully');
  }


  //data sharing
  if($rootScope.newuser == null)    {


var basicuserdetails =
 { Fullname:"Spanny",
 Fraternityname:"Aplha Phi",
 Email:"Spanny@gmail.com",
 Phonenumber:"8765432908" };
 $scope.basicuserdetails = basicuserdetails;

 $rootScope.newuser = $scope.basicuserdetails;
}
else {
  $scope.basicuserdetails =  $rootScope.newuser;
}
}
]);
