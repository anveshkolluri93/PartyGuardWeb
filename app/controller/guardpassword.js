angular.controller("GuardUserPassController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {
  $rootScope.loginValue = "Logout";
  $rootScope.isMaster = true;
  $rootScope.isHost = true;
  $rootScope.isGuard = false;
  $rootScope.isBasic = true;
    // reset login status

                // $location.path('/AddAck');
                // $rootScope.isUserLoggedIn = false;
        var passdetails = {};
                $scope.submit = function(user){
                  console.log(JSON.stringify($scope.user));
                  passdetails['Email'] = $rootScope.udetails.Email;
                  passdetails['NewPassword'] = $scope.user.newpwd;
                  passdetails['ConfirmPassword'] = $scope.user.cnfpwd;
                  console.log(JSON.stringify(passdetails));
                  if( $scope.user.newpwd == $scope.user.cnfpwd){
                    $http({
                          method: 'POST',
                          url: 'https://partyguardservices20161110094537.azurewebsites.net/api/Account/NewPasswordSet',
                          data: passdetails,
                          headers: {
                          'Content-Type': 'application/json'
                          }}).then(function(result) {

                          console.log(result);

                          //  callback(response);
                          }, function(error) {
                          console.log("shit"+error);

                          });

                  }else {
                    alert("passwords did not match");
                  }


                }

}]);
