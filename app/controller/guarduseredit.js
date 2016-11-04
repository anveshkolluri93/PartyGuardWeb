angular.controller("GuardUserEditController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status

                // $location.path('/AddAck');
              //   $rootScope.isUserLoggedIn = false;
        $scope.user = $rootScope.udetails;
         $rootScope.newdata = {};


                       $scope.submitform = function(user) {
                        $rootScope.newdata = $scope.guardetails;
                         $location.path('/Guard');
                         console.log("hi"+JSON.stringify($rootScope.newdata));
                       };




}
]);
