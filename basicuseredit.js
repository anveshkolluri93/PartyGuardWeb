
angular.controller("BasicUserEditController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {
$rootScope.loginValue = "Logout";
                $rootScope.isUserLoggedIn = false;
                $scope.submit = function(){
                  alert('Edited Changes are changed Successfully');
                }
                var localdetails = [];
                localdetails = $rootScope.udetails;
                $rootScope.rootlocaldetails = localdetails;
}
]);
