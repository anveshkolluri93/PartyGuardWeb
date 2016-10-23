angular.controller("BasicUserEditController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status

                // $location.path('/AddAck');
              //   $rootScope.isUserLoggedIn = false;
$scope.use = $rootScope.newuser;

                       $scope.update = function(use) {

                        $rootScope.newuser = $scope.use;
                         $location.path('/Basic');
                         console.log("hi"+JSON.stringify($rootScope.newdata));
                       };



}
]);
