angular.controller("GuardRegistration", ['$scope', '$rootScope', '$location','$http',
function ($scope, $rootScope, $location, $http) {

  $scope.master = {};
  $scope.showSuccessAlert = false;
        $scope.update = function(user) {

            // $scope.showSuccessAlert = true;
            // $scope.successTextAlert = "Registration Succesful.Click ";
            $scope.master = $scope.user;
            $scope.user['userType'] = "guard";
             console.log("hey"+JSON.stringify($scope.user));
           //Api call
            // $http.post('/api/authenticate', user)
            //    .success(function (response) {
            //      $scope.showSuccessAlert = true;
            //      $scope.successTextAlert = "Registration Succesful.Click ";
            //        callback(response);
            //    });

               //API call
               $http({
                     method: 'POST',
                     url: 'http://partyguardservices20161025060016.azurewebsites.net/api/Account/Register',
                     data: user,
                     headers: {
                       'Content-Type': 'application/json'
                     }}).then(function(result) {
                     // console.log(result.data.UserType);

                         //var response = { success: type === userType};
                              $scope.showSuccessAlert = true;
                              $scope.successTextAlert = "Registration Succesful.Click ";

                         console.log("success"+result.data);
                         //console.log(response.access_token);
                                    // store username and token in local storage to keep user logged in between page refreshes
                     //    $localStorage.currentUser = { username: username, token: token };

                                    // add jwt token to auth header for all requests made by the $http service
                       //  $http.defaults.headers.common.Authorization = 'Bearer ' +token;
                       callback("success");
                     }, function(error) {
                       $scope.showSuccessAlert = true;
                       $scope.successTextAlert = "Registration failed. ";
                     console.log(error);
                     });

                     //end


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
