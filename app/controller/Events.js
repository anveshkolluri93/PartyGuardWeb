angular.controller("eventsController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
var auth = $rootScope.Author;
$scope.members =[];
$scope.isUserLoggedIn = true;

 $http({
       method: 'POST',
       url: 'https://partyguardservices20161110094537.azurewebsites.net/api/HostUserProfile/DisplayGuardDetails',
       headers: {
       'Authorization': auth
       }}).then(function(result) {
         $scope.members = result.data;
         console.log($scope.members );
     },function(error) {
     console.log(error);
     });


<<<<<<< HEAD
// console.log('entered date is',$scope.user.eventtime);

=======
>>>>>>> b442483fc69f674ede7b1fcaeb7b78d5375f248d
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


 //  $scope.submitForm = function($scope.user.eventdate) {
 //
 //
 // }
 // else {
 //
 //
 //  }
 // var datetest = $scope.user.eventdate;
 //


  //  console.log('entered month is',datetest.getMonth()+1);
  //  console.log('entered year is',datetest.getFullYear());
  //  console.log('entered day is',datetest.getDate());
   //
  //  console.log('today month is',today.getMonth()+1);
  //  console.log('today year is',today.getFullYear());
  //  console.log('today day is',today.getDate());

   $scope.display = function(showSuccessAlertFlag){
    $scope.user['selectedMembers'] = $scope.selected;
    $rootScope.eventCreated = $scope.user;
    $location.path('/EventConfirmation');
// var datetest = $scope.user.eventdate;
// $scope.date = new  Date();
// console.log('today date is' , $scope.date);
//    console.log('entered month is',datetest.getMonth()+1);
//    console.log('entered year is',datetest.getFullYear());
//    console.log('entered day is',datetest.getDate());
//
//
//     console.log('today month is',$scope.date.getMonth()+1);
//     console.log('today year is',$scope.date.getFullYear());
//     console.log('today day is',$scope.date.getDate());
//     if(((datetest.getMonth())+1) >= (($scope.date.getMonth())+1) && (datetest.getFullYear()) >=
//     ($scope.date.getFullYear()) && (datetest.getDate()) >= ($scope.date.getDate())) {
// alert('hey you are right');
//}

<<<<<<< HEAD
}
}
]);
=======


}]);
>>>>>>> b442483fc69f674ede7b1fcaeb7b78d5375f248d
