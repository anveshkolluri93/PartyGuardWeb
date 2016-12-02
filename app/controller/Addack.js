angular.controller("AckController", ['$scope','$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {

  // $scope.master = {};
  //
  //       $scope.update = function(user) {
  //         $scope.master = angular.copy(user);
  //       };
   $rootScope.loginValue = "Logout";
     $rootScope.isMaster = false;
     $rootScope.isHost = true;
     $rootScope.isGuard = true;
     $rootScope.isBasic = true;

var users = {
  "hname": "SIGMA PHI EPSILON(SigEp)",
  "hnickname": "SIGMA PHI EPSILON(SigEp)",
  "img": "https://s32.postimg.org/j39r4gait/Sigmapi.jpg",
  "chapter": "Missouri Lambda Chapter",
  "univ": "Northwest Missouri State University",
  "addr": "511 W 3rd St Maryville , MO ,64468",
  "uname": "Missouri Lambda",
  "temppwd": "password",
  "custid": "000000001",
  "subcode": "123-456-789",
  "guardcode": "123-456-789",
};
// console.log($rootScope.master);
//  $scope.users = myService.getJson();
 $scope.users = users;

 $scope.showSuccessAlert = false;


 $scope.display = function(showSuccessAlertFlag){
   var temp = $rootScope.hostRegistration.Email;
    var mail = $rootScope.userResponse;
//building JSON
    var data = {};
    data['Email'] = temp;
    data['fName'] = $rootScope.hostRegistration.firstName;
    data['fraternityName'] = mail.fraternityName;
    data['paymentStatus'] = mail.paymentStatus;
    data['nickName'] = mail.nickName;
    data['chapter'] = mail.chapter;
    data['subscripCode'] = mail.subscripCode;
    data['tempPass'] = mail.tempPass;
    data['guardCode'] = mail.guardCode;
    data['UniversityModel'] = mail.UniversityModel.univeristyName;
    data['Location'] = mail.LocationModel.locationName;


     console.log("mail data"+data);
   //var data = $scope.user;
   console.log(JSON.stringify(data));
   $http({method: 'GET',
          url: 'http://localhost:8080/domail',
          params: data,
          headers: {
          'Content-Type': 'application/json'
          }
      });
   $scope.showSuccessAlert = true;
   $scope.successTextAlert = "Account details have been successfully sent to the customer !!";
 }





}]);
