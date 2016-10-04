angular.controller("ViewCustomerController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

                // $location.path('/HostProfile');
 $scope.isUserLoggedIn = true;
                 var members =[
{"image":"https://s32.postimg.org/j39r4gait/Sigmapi.jpgg", "fratName":"Pi Sigma Epsilon", "ChapterName":"Pi Sig E", "Custid":"12345"},
{"image":"https://s18.postimg.org/b5foym8ix/download.png", "fratName":"Alpha Epsilon Pi", "ChapterName":"A E Pi", "Custid":"23451"},
{"image":"https://s18.postimg.org/3qqd68mnd/kapp.jpg", "fratName":"Alpha Tau Omega", "ChapterName":"A T O", "Custid":"34521"},
{"image":"https://s18.postimg.org/9sxzwqb3d/tow.jpg", "fratName":"Delta Kappa Epsilon", "ChapterName":"D K E", "Custid":"45321"}
];
   $scope.members = members;



}]);
