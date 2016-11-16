angular.controller("eventsController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
var auth = $rootScope.Author;
$scope.members =[];


                // $location.path('/HostProfile');
 $scope.isUserLoggedIn = true;

 $http({
       method: 'POST',
       url: 'https://partyguardservices20161110094537.azurewebsites.net/api/HostUserProfile/DisplayGuardDetails',
       headers: {
       'Authorization': auth
       }}).then(function(result) {
         $scope.members = result.data;
         console.log($scope.members );

    //   console.log("guards for this fraternity "+JSON.stringify(finalresult));

     },function(error) {
     console.log(error);
     });
//                  var members =[
//    {"image":"https://s18.postimg.org/zcgklkqbt/1421296_323487294457690_682764613_o_640x401.jpg", "firstName":"Srichaitanya", "lastName":"Peddinti", "email":"peddintisrichaitanya@gmail.com", "phone":"6184391808", "age":"25"},
//    {"image":"https://s11.postimg.org/s2n8ksggj/11224756_10203199692231723_7411357595581364253_o.jpg", "firstName":"Lokesh Reddy", "lastName":"Pothapu", "email":"lokeshreddy.p@gmail.com", "phone":"6184391808", "age":"24"},
//   {"image":"https://s21.postimg.org/jqir5bgxz/10620030_10153379421618265_8349315650679533942_o.jpg", "firstName":"Abishai", "lastName":"Parise", "email":"abishaiparise@gmail.com", "phone":"6184391808", "age":"25"},
//   {"image":"https://s15.postimg.org/cyfzd5gx7/13528571_1137806456261626_7331896690535876532_o.jpg", "firstName":"Nihita", "lastName":"Bhimireddy", "email":"nihitabhimireddy@gmail.com", "phone":"6184391808", "age":"24"},
//   {"image":"https://s16.postimg.org/4pgvq79n9/14344296_1186119868098540_2947086008923536253_n.jpg", "firstName":"Spandana", "lastName":"Velaga", "email":"spandanavelaga@gmail.com", "phone":"6184391808", "age":"24"},
//    {"image":"https://s22.postimg.org/jwn4oo6kx/12513993_937898552966797_3549313969414062671_o.jpg","firstName":"Gopi", "lastName":"Cherupally","email":"gopicherupally@gmail.com", "phone":"6184391808", "age":"23"}
// ];



   $scope.selected =[];
   $scope.final = [];

   $scope.exist = function(item){
     return $scope.selected.indexOf(item) > -1;
    console.log($scope.selected.indexOf(item));
   }

   $scope.toggleSelection = function(item){
     var idx = $scope.selected.indexOf(item);
     if(idx > -1){
       $scope.selected.splice(idx,1);

     }else{
       $scope.selected.push(item);
     }
   }


  // $scope.showSuccessAlert = false;

   $scope.display = function(showSuccessAlertFlag){
    $scope.user['selectedMembers'] = $scope.selected;
    $rootScope.eventCreated = $scope.user;
      $location.path('/EventConfirmation');

  //   $scope.showSuccessAlert = true;
    // $scope.successTextAlert = "Your Event has been successfully created !!";
   }


}]);
