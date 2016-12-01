//creating BasicUserController with in built angular services such as scope,rootscope,location
angular.controller("BasicUserController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location ) {
    // reset login status
$rootScope.loginValue = "Logout";
$rootScope.isMaster = true;
$rootScope.isHost = true;
$rootScope.isGuard = true;
$rootScope.isBasic = false;
$rootScope.isUserLoggedIn = false;
}
]);
