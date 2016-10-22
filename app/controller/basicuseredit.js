angular.controller("BasicUserEditController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status

                // $location.path('/AddAck');
              //   $rootScope.isUserLoggedIn = false;
$scope.newuser = $rootScope.newdata;

                       $scope.update = function(newuser) {

                        $rootScope.newdata = $scope.newuser;
                         $location.path('/Basic');
                         console.log("hi"+JSON.stringify($rootScope.newdata));
                       };



}
]);
