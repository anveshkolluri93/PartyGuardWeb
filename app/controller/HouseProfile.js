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
  "addr": "Northwest Missouri State University 509 W.9th St Maryville , MO 64468",
  "uname": "Missouri Lambda",
  "custid": "000000001",
  "subcode": "123-456-789",
  "fname": "Abishai",
  "lname": "Parise",
  "email": "abishai@gmail.com",
  "mbl": "925-549-1435"
};

$scope.users = users;

}]);
