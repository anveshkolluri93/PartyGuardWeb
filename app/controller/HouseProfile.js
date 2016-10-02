angular.controller("HouseProfileController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

  // $scope.master = {};
  //
  //       $scope.update = function(user) {
  //         $scope.master = angular.copy(user);
  //       };

$scope.master = user: {
  "title": "SIGMA PHI EPSILON(SigEp)",
  "img": "apt 03",
  "chapter": "Missouri Lambda Chapter",
  "addr": "Northwest Missouri State University 509 W.9th St Maryville , MO 64468",
  "uname": "64468",
  "custid": "000000001",
  "subcode": "123-456-789",
  "fname": "Abishai",
  "lname": "Parise",
  "email": "abishai@gmail.com",
  "mbl": "925-549-1435"
};

$scope.title = user.title;

}]);
