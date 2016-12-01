//creating BasicUserEditController with in built angular services such as scope,rootscope,location
angular.controller("BasicUserEditController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {
      // reset login status
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = true;
$rootScope.isGuard = true;
$rootScope.isBasic = false;
                $rootScope.isUserLoggedIn = false;

                var localdetails = [];
                localdetails = $rootScope.udetails;
                $rootScope.rootlocaldetails = localdetails;
                //After clicking Submit button if all fields are valid then will be redirected to /Guard
                $scope.submitForm = function(isValid) {
                  if ($scope.newform.$valid) {
                      alert('our form is amazing');
                       $rootScope.newdata = $scope.guardetails;
                        $location.path('/Guard');
                        console.log("hi"+JSON.stringify($rootScope.newdata));
      }
          //After clicking Submit button if any of the fields are invalid then will be remained in same page b showing the alert
      else if ($scope.newform.$invalid) {
                    alert('our form is not amazing');
                };
                }
}
]);
