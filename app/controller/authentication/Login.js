angular.controller("LoginController", ['$scope', '$rootScope', '$location', 'AuthenticationService',
function ($scope, $rootScope, $location, AuthenticationService) {

    // reset login status
    AuthenticationService.ClearCredentials();

    $scope.login = function () {
        $scope.dataLoading = true;
        AuthenticationService.Login($scope.username, $scope.password, function (response) {
            if (response.success) {

                AuthenticationService.SetCredentials($scope.username, $scope.password);
                if($scope.username === 'admin') {
                $location.path('/AddCustomer');
                $rootScope.isUserLoggedIn = false;
              }else if($scope.username === 'host'){
                $location.path('/Hostnew');
                $rootScope.isUserLoggedIn = true;
              }else if($scope.username === 'guard'){
                $location.path('/Guard');
                $rootScope.isUserLoggedIn = true;
              }else{
                $location.path('/Basic');
                $rootScope.isUserLoggedIn = true;
              }

            } else {
                $scope.error = response.message;
                $scope.dataLoading = false;
                $location.path('/Login');
                $scope.isUserLoggedIn = false;
            }
        });
    };
}]);
