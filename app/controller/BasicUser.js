angular.controller("BasicUserController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status

                // $location.path('/AddAck');
                 $rootScope.isUserLoggedIn = false;
                 $scope.master = {};

                       $scope.update = function(basicuserdetails) {
                         $scope.master = angular.copy(basicuserdetails);
                       };
var basicuserdetails =
 { Fullname:"",
 Fraternityname:"Aplha Phi",
 Email:"Spandanav@gmail.com",
 Phonenumber:"" };
 $scope.basicuserdetails = basicuserdetails;
}
]);
