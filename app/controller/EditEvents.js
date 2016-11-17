angular.controller("EditEventsController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {

                // $location.path('/HostProfile');
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;
$scope.events = {};


$http({
      method: 'GET',
      url: 'https://partyguardservices20161110094537.azurewebsites.net/api/EventsModels/19',
      // headers: {
      // 'Authorization': auth
      // }
    }).then(function(result) {
      //   console.log("Hello"+JSON.stringify(result));
      // $scope.events = result.data;
    $scope.events['EventName'] = result.data['eventName'];
    $scope.events['Date'] = result.data['eventDateTime'].substring(0,10);
    $scope.events['time'] = result.data['eventDateTime'].substring(11,16);
    // console.log("Date is "+ $scope.events['Date']);
    // console.log("Time is "+ $scope.events['time']);
    //     console.log("Hi"+JSON.stringify(result.data['eventName']));
    //     console.log("Hi"+JSON.stringify($scope.events['EventName']));
        console.log("Hi"+JSON.stringify($scope.events));
    },function(error) {
    console.log(error);
    });


}]);
