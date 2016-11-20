angular.controller("guardeventController", ['$scope', '$rootScope', '$location', '$http' , function ($scope, $rootScope, $location, $http) {

                // $location.path('/HostProfile');
 //$scope.isUserLoggedIn = true;

 $rootScope.loginValue = "Logout";
 $rootScope.isMaster = true;
 $rootScope.isHost = true;
 $rootScope.isGuard = false;
 $rootScope.isBasic = true;

$scope.eventname = "Isa Dinner New";
$scope.Event_Date = "11-25-2016";
$scope.Event_Time = "18:30:00";





//events service should be added
  // $http({
  //       method: 'GET',
  //       url: '',
  //       headers: {
  //       'Authorization': auth
  //       }}).then(function(result) {
  //       // console.log(result.data.UserType);
  //
  //           //var response = { success: type === userType};
  //
  //            finalresult = result.data;
  //          console.log("result before "+JSON.stringify(finalresult));
  //          console.log("size is "+finalresult.length);
  //           $scope.members = finalresult;
  //
  //       }, function(error) {
  //       console.log(error);
  //       });
  //populating table

  }]);
