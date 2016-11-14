angular.controller("forgotpwdMainController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {

    // reset login status

                // $location.path('/AddAck');
                // $rootScope.isUserLoggedIn = false;
                  $scope.update = function(user){
                    var data = $scope.user;
                    var resetpwd = {};
                    resetpwd['Email'] = data.username;
                    resetpwd['NewPassword'] = data.password;
                    resetpwd['ConfirmPassword'] = data.cnfpassword;

                    console.log(JSON.stringify(resetpwd));
                $http({
                      method: 'POST',
                      url: 'https://partyguardservices20161110094537.azurewebsites.net/api/Account/NewPasswordSet',
                      data: resetpwd,
                      headers: {
                        'Content-Type': 'application/json'
                      }}).then(function(result) {

                         console.log(result);
                         $scope.showSuccessAlert = true;
                         $scope.successTextAlert = "Reset has been succesful.";
                      }, function(error) {
                        e.showSuccessAlert = true;
                        $scope.successTextAlert = "Reset unsuccesful.";
                      console.log(error);
                      });
          }
}]);
