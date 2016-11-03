angular.controller("DefaultCtrl", ['$scope', '$http', '$window','$rootScope',
function ($scope, $http, $window, $rootScope) {
//$window.alert("Heyy!");

// $http.get('https://email.us-west-2.amazonaws.com/?Action=SendEmail&Source=abishai.parise%40gmail.com&Destination.ToAddresses.member.1=nihitha.reddy%40gmail.com&Message.Subject.Data=This%20is%20the%20subject%20line.&Message.Body.Text.Data=Hello.%20I%20hope%20you%20are%20having%20a%20good%20day').
//        then(function(response) {
//            $scope.greeting = response.data;

var msg = "hello world";
$http.post('http://localhost:8080/dowork',msg).success(function(data){
 console.log("success ..yay"+data);
});
//        });
        $scope.sendMail = function(user){
            // $window.alert("Helyoo!");
          // $window.alert($scope.contactName);
          //   var name = $scope.contactName;
          //   var email = $scope.contactEmail;
          //   var msg = "Hello";
          //   var sub = "PartyGuard";
          // // var data = ({
          // //          contactName : $scope.contactName,
          // //          contactEmail : $scope.contactEmail,
          // //          contactMsg : "Hello",
          // //          Subject : "PartyGuard"
          // //      });
          // $window.alert("Helloo!");


          var data = $scope.user;
          console.log(JSON.stringify(data));
          $http.get("http://localhost:8080/dowork", data)
          .success(function (data, status, headers, config) {
            console.log("success");
          })
          .error(function (data, status, header, config) {
          });
        }

  }]);
  // angular.factory('DefaultCtrl',['$http',function($http){
  //   console.log("success");
  //    return {
  //      postEmail: function(emailData,callback){
  //
  //
  //        $http.post("/send", emailData).success(callback);
  //      }
  //    }
  // }]);
