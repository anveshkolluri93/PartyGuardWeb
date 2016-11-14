angular.controller("FraternityController", ['$scope','$http', '$rootScope', '$location',
function ($scope,$http, $rootScope, $location) {
  $rootScope.loginValue = "Logout";
    $rootScope.isMaster = false;
    $rootScope.isHost = true;
    $rootScope.isGuard = true;
    $rootScope.isBasic = true;

          $rootScope.master = {};
          $rootScope.locationjson = {};
          $rootScope.userRequest = {};
          $rootScope.userResponse = {};
          $rootScope.hostRegistration = {};

          var finalrequest = {};
      //  $rootScope.address= null;

              $scope.update = function(user) {


                $rootScope.master = $scope.user;
                console.log("addr"+document.getElementById('autocomplete').value);
                $rootScope.master.locationName = document.getElementById('autocomplete').value;
                  // $rootScope.userRequest[] =
                       $rootScope.locationjson['locationName'] = user.locationName;
                       $rootScope.locationjson['latitude'] = "40.356059";
                       $rootScope.locationjson['longitude'] = "-94.881951";
                      $rootScope.userRequest['fraternityName'] = user.fraternityName;
                      $rootScope.userRequest['paymentStatus'] = user.paymentStatus;
                      $rootScope.userRequest['nickName'] = user.nickName;

                      $rootScope.userRequest['chapter'] = user.chapter;
                      $rootScope.userRequest['universityId'] = user.universityId;
                      $rootScope.userRequest['locationid'] = "10";
                  $rootScope.userRequest['LocationModel'] = $rootScope.locationjson;




                         finalrequest = $rootScope.userRequest;
                     console.log("finally"+JSON.stringify( $rootScope.locationjson));
                     console.log("finally"+JSON.stringify( $rootScope.userRequest));
                console.log("hey"+JSON.stringify(user.locationName));
                console.log("hi"+JSON.stringify($rootScope.master.locationName));
                 console.log("user details"+JSON.stringify(user));
                // var currentList = $rootScope.custlist;
                // console.log("finally"+JSON.stringify(currentList));
                // var newList = currentList.concat($rootScope.master);
                // console.log("new"+JSON.stringify(newList));
                // $rootScope.custlist = newList;
                //   console.log("finally"+JSON.stringify($rootScope.custlist));

                //API call
                $http({
                      method: 'POST',
                      url: 'https://partyguardservices20161110094537.azurewebsites.net/api/FraternityModels',
                      data: finalrequest,
                      headers: {
                        'Content-Type': 'application/json'
                      }}).then(function(result) {
                      // console.log(result.data.UserType);

                          //var response = { success: type === userType};
                          console.log("success"+JSON.stringify(result.data));
                            $rootScope.userResponse = result.data;
                            var subcode = result.data.subscripCode;
                            var temppass = result.data.tempPass;


                            //registration
                                 $rootScope.hostRegistration['Email'] = user.email;
                                $rootScope.hostRegistration['tempPassword'] = temppass;
                                $rootScope.hostRegistration['firstName'] = user.fraternityName;
                                $rootScope.hostRegistration['lastName'] = user.fraternityName;
                                $rootScope.hostRegistration['age'] = '22';
                                $rootScope.hostRegistration['userType'] = 'host';
                                $rootScope.hostRegistration['hostUserCode'] = 'subcode';
                                $rootScope.hostRegistration['PhoneNumber'] = user.mbl;
                                var registerHost = $rootScope.hostRegistration;
                              console.log("reposne"+JSON.stringify($rootScope.userResponse));
                                console.log("host reposne"+JSON.stringify($rootScope.hostRegistration));
                                //host registration
                                $http({
                                      method: 'POST',
                                      url: 'https://partyguardservices20161110094537.azurewebsites.net/api/Account/Register',
                                      data: registerHost,
                                      headers: {
                                        'Content-Type': 'application/json'
                                      }}).then(function(result) {
                                         console.log("host reg done");
                                         console.log(result);
                                      }, function(error) {
                                      console.log(error);
                                      });
                          //console.log(response.access_token);
                                     // store username and token in local storage to keep user logged in between page refreshes
                      //    $localStorage.currentUser = { username: username, token: token };

                                     // add jwt token to auth header for all requests made by the $http service
                        //  $http.defaults.headers.common.Authorization = 'Bearer ' +token;
                        //   callback(userType);
                      }, function(error) {
                      console.log(error);
                      });

                      //end
                  $location.path('/AddAck');
              };

              $scope.reset = function() {
                alert("inside");
                $scope.user = null;
              };


console.log("hi again");
  console.log("hi"+JSON.stringify($rootScope.master));

      $http.get("https://partyguardservices20161110094537.azurewebsites.net/api/UniversityModels")
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
