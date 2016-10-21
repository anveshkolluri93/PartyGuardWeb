angular.controller("BasicUserController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status

                // $location.path('/AddAck');
                 $rootScope.isUserLoggedIn = false;
                 $scope.master = {};

                       $scope.update = function(basicuserdetails) {
                         $scope.master = angular.copy(basicuserdetails);
                       };

  if($rootScope.newdata == null)    {


var basicuserdetails =
 { Fullname:"full",
 Fraternityname:"Aplha Phi",
 Email:"Spandanav@gmail.com",
 Phonenumber:"007" };
 $scope.basicuserdetails = basicuserdetails;

 $rootScope.newdata = $scope.basicuserdetails;
}
else {
  $scope.basicuserdetails =  $rootScope.newdata;
}
}
]);
