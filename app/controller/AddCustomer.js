angular.controller("FraternityController", ['$scope','$http', '$rootScope', '$location',
function ($scope,$http, $rootScope, $location) {

        $rootScope.master = {};

      //  $rootScope.address= null;

              $scope.update = function(user) {

                $rootScope.master = $scope.user;
                console.log("addr"+document.getElementById('autocomplete').value);
                $rootScope.master.address = document.getElementById('autocomplete').value;
                console.log("hey"+JSON.stringify(user.address));
                console.log("hi"+JSON.stringify($rootScope.master.address));
                // var currentList = $rootScope.custlist;
                // console.log("finally"+JSON.stringify(currentList));
                // var newList = currentList.concat($rootScope.master);
                // console.log("new"+JSON.stringify(newList));
                // $rootScope.custlist = newList;
                //   console.log("finally"+JSON.stringify($rootScope.custlist));
                  $location.path('/AddAck');
              };

              $scope.reset = function() {
                alert("inside");
                $scope.user = null;
              };


console.log("hi again");
  console.log("hi"+JSON.stringify($rootScope.master));

      $http.get("http://partyguardservices20161025060016.azurewebsites.net/api/UniversityModels")
            .then(function(response){
          console.log("hey" + JSON.stringify(response));
          console.log("hey" + JSON.stringify(response.data));
            $scope.university = response.data;

          });

//       $scope.university=[
//     {univId : 1, univeristyName : "Northwest Missouri State University" },
//     {univId : 2, univeristyName : "University of Central Missouri"},
//     {univId : 3, univeristyName : "University of Missouri Kansas City"},
//     {univId : 4, univeristyName : "MidWestern Missouri State University"}
// ];

 //$scope.selectedCountry =  $scope.university[1].univId.toString();

          // $scope.reset = function() {
          //   $scope.user = angular.copy($scope.master);
          // };
          //
          // $scope.reset();


  }]);
