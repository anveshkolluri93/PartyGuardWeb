angular.controller("FraternityController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

  $scope.master = {};

        $scope.update = function(user) {
          $scope.master = angular.copy(user);
        };

          // $scope.reset = function() {
          //   $scope.user = angular.copy($scope.master);
          // };
          //
          // $scope.reset();


  }]);
