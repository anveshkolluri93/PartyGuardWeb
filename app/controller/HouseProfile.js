angular.controller("HouseProfileController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

  // $scope.master = {};
  //
  //       $scope.update = function(user) {
  //         $scope.master = angular.copy(user);
  //       };

var users = {
  "title": "SIGMA PHI EPSILON(SigEp)",
  "img": "https://s32.postimg.org/j39r4gait/Sigmapi.jpg",
  "chapter": "Missouri Lambda Chapter",
  "univ": "Northwest Missouri State University",
  "addr": "511 W 3rd St Maryville , MO ,64468",
  "uname": "Missouri Lambda",
  "custid": "000000001",
  "subcode": "123-456-789",
  "guardcode": "123-456-789",
  "fname": "Abishai",
  "lname": "Parise",
  "email": "abishai@gmail.com",
  "mbl": "925-549-1435"
};

$scope.users = users;

}]);
