angular.controller("GuardUserEditController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status

                // $location.path('/AddAck');
              //   $rootScope.isUserLoggedIn = false;
$scope.user = $rootScope.newdata;

                       $scope.update = function(user) {

                        $rootScope.newdata = $scope.user;
                         $location.path('/Guard');
                         console.log("hi"+JSON.stringify($rootScope.newdata));
                       };



}
]);
