//creating GuardUserController with in built angular services such as scope,rootscope,location
angular.controller("GuardUserEditController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status
  $rootScope.loginValue = "Logout";
  $rootScope.isMaster = true;
  $rootScope.isHost = true;
  $rootScope.isGuard = false;
  $rootScope.isBasic = true;

  //Storing rootScope details to local scope of GuardUserEditController controller
        $scope.user = $rootScope.udetails;
         $rootScope.newdata = {};


//Custom validation
         $scope.submitForm = function(isValid) {

            // check to make sure the form is completely valid
            if ($scope.newform.$valid) {
                alert('our form is amazing');
                 $rootScope.newdata = $scope.guardetails;
                  $location.path('/Guard');
                  console.log("hi"+JSON.stringify($rootScope.newdata));

}
//if form is invalid alert will be shown
      else if ($scope.newform.$invalid) {
              alert('our form is not amazing');
          };

          };





}
]);
