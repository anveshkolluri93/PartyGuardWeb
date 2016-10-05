angular.controller("EditEventsController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

                // $location.path('/HostProfile');
 $scope.isUserLoggedIn = true;
                 var events =[
   {"EventName":"Srichaitanya", "Date":"10/04/2016", "time":"10:00 P.M"},
   {"EventName":"Srichaitanya", "Date":"10/04/2016", "time":"10:00 P.M"},
   {"EventName":"Srichaitanya", "Date":"10/04/2016", "time":"10:00 P.M"},
   {"EventName":"Srichaitanya", "Date":"10/04/2016", "time":"10:00 P.M"},
   {"EventName":"Srichaitanya", "Date":"10/04/2016", "time":"10:00 P.M"},
   {"EventName":"Srichaitanya", "Date":"10/04/2016", "time":"10:00 P.M"},
   {"EventName":"Srichaitanya", "Date":"10/04/2016", "time":"10:00 P.M"}
 ];
   $scope.events = events;
}]);
