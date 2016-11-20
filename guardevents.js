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




  }]);
