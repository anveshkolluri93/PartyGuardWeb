
angular.controller("BasicUserEditController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = true;
$rootScope.isGuard = true;
$rootScope.isBasic = false;
                $rootScope.isUserLoggedIn = false;
                // $scope.submit = function(){
                //   alert('Edited Changes are changed Successfully');
                // }
                var localdetails = [];
                localdetails = $rootScope.udetails;
                $rootScope.rootlocaldetails = localdetails;
                $scope.submitForm = function(isValid) {
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
                }

}
]);
