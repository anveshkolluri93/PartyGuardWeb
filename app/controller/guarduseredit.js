angular.controller("GuardUserEditController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {


  $rootScope.loginValue = "Logout";
  $rootScope.isMaster = true;
  $rootScope.isHost = true;
  $rootScope.isGuard = false;
  $rootScope.isBasic = true;
    // reset login status

                // $location.path('/AddAck');
              //   $rootScope.isUserLoggedIn = false;
        $scope.user = $rootScope.udetails;
         $rootScope.newdata = {};




         $scope.submitForm = function(isValid) {

            // check to make sure the form is completely valid
            if ($scope.newform.$valid) {
              // console.log(
              //   "hi isvalid value is",isValid);
              //   alert('Please fill the details before sumitting');
                alert('our form is amazing');
                // console.log('hey im true');

                 $rootScope.newdata = $scope.guardetails;
                  $location.path('/Guard');
                  console.log("hi"+JSON.stringify($rootScope.newdata));

}
else if ($scope.newform.$invalid) {

              alert('our form is not amazing');
          };
    //         else {
    // console.log('hey im not true');
    //          alert('Please fill the details before sumitting');
    //         }

          };





}
]);
