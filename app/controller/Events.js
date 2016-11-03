angular.controller("eventsController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
                // $location.path('/HostProfile');
 //$scope.isUserLoggedIn = true;
                 var members =[
   {"image":"https://s16.postimg.org/5uentozzl/11896082_600953573377726_856321715054221983_n.jpg", "firstName":"Srichaitanya", "lastName":"Peddinti", "email":"peddintisrichaitanya@gmail.com", "phone":"6184391808", "age":"25"},
   {"image":"https://s9.postimg.org/dzb9gf3q3/13256283_10204726631844259_1061219333279314640_n.jpg", "firstName":"Lokesh Reddy", "lastName":"Pothapu", "email":"lokeshreddy.p@gmail.com", "phone":"6184391808", "age":"24"},
  {"image":"https://s18.postimg.org/mur9bwjxx/13411981_10154855134513265_4188131048765198276_o.jpg", "firstName":"Abishai", "lastName":"Parise", "email":"abishaiparise@gmail.com", "phone":"6184391808", "age":"25"},
  {"image":"https://s12.postimg.org/pap4hz2hl/13528571_1137806456261626_7331896690535876532_o.jpg", "firstName":"Nihita", "lastName":"Bhimireddy", "email":"nihitabhimireddy@gmail.com", "phone":"6184391808", "age":"24"},
  {"image":"https://s10.postimg.org/okp2hg6kl/14344296_1186119868098540_2947086008923536253_n.jpg", "firstName":"Spandana", "lastName":"Velaga", "email":"spandanavelaga@gmail.com", "phone":"6184391808", "age":"24"},
   {"image":"https://s11.postimg.org/510y6jiz3/13765940_10206914773922204_8431267488655394864_o.jpg","firstName":"Jacob", "lastName":"Stansbury","email":"peddintisrichaitanya@gmail.com", "phone":"6184391808", "age":"23"}
];
   $scope.members = members;

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

  //   $scope.showSuccessAlert = true;
    // $scope.successTextAlert = "Your Event has been successfully created !!";
   }


}]);
