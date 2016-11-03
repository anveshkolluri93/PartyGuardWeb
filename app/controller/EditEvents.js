angular.controller("EditEventsController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

                // $location.path('/HostProfile');
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;


                 var events =[
   {"EventName":"Friday Fun", "Date":"10/28/2016", "time":"08:00 P.M"},
   {"EventName":"Halloween Party", "Date":"11/04/2016", "time":"08:00 P.M"},
   {"EventName":"Casino Day", "Date":"11/11/2016", "time":"10:00 P.M"},
   {"EventName":"Hippies", "Date":"11/18/2016", "time":"10:00 P.M"}
 ];
   $scope.events = events;
}]);
