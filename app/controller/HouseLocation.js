angular.controller("HouseLocationController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = false;
$rootScope.isGuard = true;
$rootScope.isBasic = true;

  $scope.master = {};
  $scope.showSuccessAlert = false;
        $scope.update = function(user) {

            $scope.showSuccessAlert = true;
              $scope.successTextAlert = "Your request has been submitted.";
          $scope.master = angular.copy(user);



        };

        $scope.reset = function() {
    //   alert("inside");
          $scope.user = null;
        };

        $scope.switchBool = function (value) {
            $scope[value] = !$scope[value];
        };

        // $scope.reset = function() {
        //   $scope.user = angular.copy($scope.master);
        // };
        //
        // $scope.reset();


  }]);
