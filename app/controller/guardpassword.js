//creating BasicUserPasswordController with in built angular services such as scope,rootscope,location,http

angular.controller("GuardUserPassController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {
  //for login and logout functionality
  $rootScope.loginValue = "Logout";
  $rootScope.isMaster = true;
  $rootScope.isHost = true;
  $rootScope.isGuard = false;
  $rootScope.isBasic = true;

  //constructing json object passdetails with Email,NewPassword,ConfirmPassword
        var passdetails = {};
        //submit function will be triggered after clicking submit button
                $scope.submit = function(user){
                  console.log(JSON.stringify($scope.user));
                  //constructing json object basicreq with Email,NewPassword,ConfirmPassword
                  passdetails['Email'] = $rootScope.udetails.Email;
                  passdetails['NewPassword'] = $scope.user.newpwd;
                  passdetails['ConfirmPassword'] = $scope.user.cnfpwd;
                  console.log(JSON.stringify(passdetails));
//This condition will check whether NewPassword and ConfirmPassword match each other or not
                  if( $scope.user.newpwd == $scope.user.cnfpwd){
                    //Integrating Change Password webserveice using http post
                    $http({
                          method: 'POST',

                          url: 'https://partyguardservices20161110094537.azurewebsites.net/api/Account/NewPasswordSet',
                          data: passdetails,
                          headers: {
                          'Content-Type': 'application/json'
                          }}).then(function(result) {

                          console.log(result);
                            //if passwords match then we will redirect the user to Login page so he can login with NewPassword
                          $location.path('/Login');

                          }, function(error) {
                          console.log("shit"+JSON.stringify(error));

                          });
                    alert('Password changed succesfully');
                  }else {
                    //if passwords are not matching we will show an alaert and remain in same page
                    $location.path('/Guardpass');
                    alert("passwords did not match");
                  }


                }

}]);
