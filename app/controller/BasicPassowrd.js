angular.controller("BasicUserPasswordController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location , $http) {
$rootScope.loginValue = "Logout";

  $rootScope.isMaster = true;
  $rootScope.isHost = true;
  $rootScope.isGuard = true;
  $rootScope.isBasic = false;
                 $rootScope.isUserLoggedIn = false;
        var basicreq ={};
          $scope.submit=function(rootlocaldetails){

               $rootScope.test=$scope.password;
$rootScope.Basicemail = $rootScope.udetails.Email;
console.log("email is" + $rootScope.Basicemail);

basicreq['Email'] = $rootScope.Basicemail;
basicreq['NewPassword'] = $rootScope.test.NewPassword;
basicreq['ConfirmPassword'] = $rootScope.test.ConfirmPassword;
console.log("your parsed object is" +JSON.stringify(basicreq));
if($rootScope.test.NewPassword === $rootScope.test.ConfirmPassword) {
  console.log("Passwords matched");

//change pwd api comment
  $http({
        method: 'POST',

        url: 'https://partyguardservices20161110094537.azurewebsites.net/api/Account/NewPasswordSet',
        data: basicreq,
        headers: {
        'Content-Type': 'application/json'
      }}).then((result) =>{
          console.log('res is' ,result);
           $location.path('/Login');
        }, (e) => {
        console.log("shit"+e);

        });


alert('Password changed succesfully');
}
else {


  $location.path('/Basicpass');
  alert('Passwords not matching');

}
}
//api call
// if($rootScope.test.NewPassword == $rootScope.test.ConfirmPassword) {
//   $http({
//         method: 'POST',
//         url: 'http://partyguardservices20161025060016.azurewebsites.net/api/ForgotPassword/ForgotPassword',
//         data: basicreq,
//         headers: {
//         'Content-Type': 'text/plain'
//         }}).then(function(result) {
//           console.log(result);
//         }
// }
// else {
//   console.log("passwords didnt match");
// }
}

]);
