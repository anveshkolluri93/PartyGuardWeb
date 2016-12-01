
//creating BasicUserPasswordController with in built angular services such as scope,rootscope,location,http
angular.controller("BasicUserPasswordController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location , $http) {
    // reset login status
$rootScope.loginValue = "Logout";
  $rootScope.isMaster = true;
  $rootScope.isHost = true;
  $rootScope.isGuard = true;
  $rootScope.isBasic = false;
                 $rootScope.isUserLoggedIn = false;

//constructing json object basicreq with Email,NewPassword,ConfirmPassword
        var basicreq ={};
//submit function will be triggered after clicking submit button
          $scope.submit=function(rootlocaldetails){

console.log("confirm is" , $scope.password.ConfirmPassword);
               $rootScope.test=$scope.password;
$rootScope.Basicemail = $rootScope.udetails.Email;
console.log("email is" + $rootScope.Basicemail);

//constructing json object basicreq with Email,NewPassword,ConfirmPassword
basicreq['Email'] = $rootScope.Basicemail;
basicreq['NewPassword'] = $rootScope.test.NewPassword;
basicreq['ConfirmPassword'] = $rootScope.test.ConfirmPassword;
console.log("your parsed object is" +JSON.stringify(basicreq));

//This condition will check whether NewPassword and ConfirmPassword match each other or not
if($rootScope.test.NewPassword === $rootScope.test.ConfirmPassword) {
  console.log("Passwords matched");

//Integrating Change Password webserveice using http post
  $http({
        method: 'POST',

        url: 'https://partyguardservices20161110094537.azurewebsites.net/api/Account/NewPasswordSet',
        data: basicreq,
        headers: {
        'Content-Type': 'application/json'
      }}).then((result) =>{
          console.log('res is' ,result);
          //if passwords match then we will redirect the user to Login page so he can login with NewPassword
           $location.path('/Login');
        }, (e) => {
        console.log("shit"+e);

        });


alert('Password changed succesfully');
}
else {

//if passwords are not matching we will show an alaert and remain in same page
  $location.path('/Basicpass');
  alert('Passwords not matching');

}
}

}

]);
