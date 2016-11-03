angular.controller("LoginController", ['$scope', '$rootScope', '$location', 'AuthenticationService',
function ($scope, $rootScope, $location, AuthenticationService) {

   $rootScope.loginValue = 'Login';
    // reset login status
    AuthenticationService.ClearCredentials();

    $scope.login = function () {

        $scope.dataLoading = true;
        AuthenticationService.Login($scope.username, $scope.password, function (response) {
          console.log("response is"+ JSON.stringify(response));
            if (response) {
                console.log("response are"+ response);
                AuthenticationService.SetCredentials($scope.username, $scope.password);
              if(response === 'basic') {
                $location.path('/Hostprofile');
                  // $location.path('/Basic');

              }else if(response === 'host'){
                $location.path('/Hostnew');
                $rootScope.isUserLoggedIn = true;
              }else if(response === 'guard'){
                $location.path('/Guard');
                $rootScope.isUserLoggedIn = true;
              }else{
                $location.path('/AddCustomer');
              console.log("in admin");
                $rootScope.isUserLoggedIn = true;
              }

            } else {
                // $scope.error = response.message;
                // $scope.dataLoading = false;
                // $location.path('/Login');
                // $scope.isUserLoggedIn = false;
                console.log("error "+response)
                $scope.showSuccessAlert = true;
                $scope.successTextAlert = "Username/Password is not correct.";
            }
        });
    };
}]);
