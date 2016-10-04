angular.controller("DefaultCtrl", ['$scope', '$http', '$window',
function ($scope, $http, $window) {
// $window.alert("Heyy!");


        $scope.sendMail = function(){
          var data = ({
                   contactName : $scope.contactName,
                   contactEmail : $scope.contactEmail,
                   contactMsg : "Hello",
                   Subject : "PartyGuard"

               });
          $window.alert("Helloo!");
          $http.post("/send", data)
          .success(function (data, status, headers, config) {
            console.log("success");

          })
          .error(function (data, status, header, config) {
          });
        }

        // $scope.reset = function() {
        //   $scope.user = angular.copy($scope.master);
        // };
        //
        // $scope.reset();


  }]);
