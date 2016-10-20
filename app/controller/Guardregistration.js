angular.controller("GuardRegistration", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

  $scope.master = {};
  $scope.showSuccessAlert = false;
        $scope.update = function(user) {

            $scope.showSuccessAlert = true;
              $scope.successTextAlert = "Registration Succesful.Click ";
          $scope.master = angular.copy(user);



        };

        $scope.reset = function() {

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
