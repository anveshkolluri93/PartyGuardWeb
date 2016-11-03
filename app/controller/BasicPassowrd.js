angular.controller("BasicUserPasswordController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location ) {
$rootScope.loginValue = "Logout";
                 $rootScope.isUserLoggedIn = false;

          $scope.submitMyForm=function(){

               $rootScope.test=$scope.password;
$rootScope.Basicemail = $rootScope.udetails.Email;
console.log("email is" + $rootScope.Basicemail);
var basicreq ={};
basicreq['Email'] = $rootScope.Basicemail;
basicreq['NewPassword'] = $rootScope.test.NewPassword;
basicreq['ConfirmPassword'] = $rootScope.test.ConfirmPassword;
console.log("your parsed object is" +JSON.stringify(basicreq));
if($rootScope.test.NewPassword === $rootScope.test.ConfirmPassword) {
  console.log("Passwords matched");

//change pwd api comment
//   $http({
//         method: 'POST',
//         url: 'http://partyguardservices20161025060016.azurewebsites.net/api/ForgotPassword/ForgotPassword',
//         data: basicreq,
//         headers: {
//         'Content-Type': 'text/plain'
//         }}).then(function(result) {
//           console.log(result);
//         }

 $location.path('/Login');

}
else {


  $location.path('/Basicpass');
  console.log("Passwords not matching");
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
