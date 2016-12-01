
//creating guardeventController with in built angular services such as scope,rootscope,location,http
angular.controller("guardeventController", ['$scope', '$rootScope', '$location', '$http' ,
function ($scope, $rootScope, $location, $http) {
//for login and logout functionality
 $rootScope.loginValue = "Logout";
 $rootScope.isMaster = true;
 $rootScope.isHost = true;
 $rootScope.isGuard = false;
 $rootScope.isBasic = true;

//Static data for events since we didnt ge the web serveice
$scope.eventname = "Isa Dinner New";
$scope.Event_Date = "11-25-2016";
$scope.Event_Time = "18:30:00";
  }]);
