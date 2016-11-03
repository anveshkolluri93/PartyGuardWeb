angular.controller("HostnewController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {
  $rootScope.loginValue = 'Logout';
  $rootScope.isMaster = true;
  $rootScope.isHost = false;
  $rootScope.isGuard = true;
  $rootScope.isBasic = true;
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
