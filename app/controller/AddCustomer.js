angular.controller("FraternityController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

        $rootScope.master = {};
      //  $rootScope.address= null;

              $scope.update = function(user) {

                $rootScope.master = $scope.user;
                console.log("addr"+document.getElementById('autocomplete').value);
                $rootScope.master.address = document.getElementById('autocomplete').value;
                console.log("hey"+JSON.stringify(user.address));
                console.log("hi"+JSON.stringify($rootScope.master.address));

                  $location.path('/AddAck');
              };

console.log("hi again");
  console.log("hi"+JSON.stringify($rootScope.master));
      //  $http({
      //      method: 'GET',
      //      url: '/Admin/GetTestAccounts',
      //      data: { applicationId: 3 }
      //  }).success(function (result) {
      //  $scope.university = result;
      // });


      $scope.university=[
    {univId : 1, name : "Northwest Missouri State University" },
    {univId : 2, name : "University of Central Missouri"},
    {univId : 3, name : "University of Missouri Kansas City"},
    {univId : 4, name : "MidWestern Missouri State University"}
];
 $scope.selectedCountry =  $scope.university[1].univId.toString();

          // $scope.reset = function() {
          //   $scope.user = angular.copy($scope.master);
          // };
          //
          // $scope.reset();


  }]);

  function setValue() {
  var scope = angular.element(document.getElementById('autocomplete')).scope();
  scope.$apply(function() {
    alert("inside");
    scope.data.menuElements[scope.data.element.id].value = document.getElementById('autocomplete').value;
  });
}
