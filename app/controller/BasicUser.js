
angular.controller("BasicUserController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location ) {
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = true;
$rootScope.isGuard = true;
$rootScope.isBasic = false;

                 $rootScope.isUserLoggedIn = false;
}
]);
