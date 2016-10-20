var angular = angular.module('PartyGuard', [ 'ngRoute',
  'ngCookies']);

angular.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/Login", {
            templateUrl: "/public/view/Navbar/Login.html",
            controller: "LoginController" })
      .when("/Dashboard", {
                templateUrl: "/public/view/MasterUser/Dashboard.html",
              controller: "DashboardController" })
        .when("/AddCustomer", {
            templateUrl: "/public/view/MasterUser/AddCustomer.html",
          controller: "FraternityController" })
          .when("/AddAck", {
              templateUrl: "/public/view/MasterUser/AddAck.html",
            controller: "AckController" })
            .when("/viewcustomer", {
                templateUrl: "/public/view/MasterUser/ViewCustomers.html",
              controller: "ViewCustomerController" })
          .when("/Hostnew", {
              templateUrl: "/public/view/HostUser/newCustomer.html",
            controller: "HostnewController" })
      .when("/Hostprofile", {
                templateUrl: "/public/view/HostUser/HostProfile.html",
               controller: "HouseProfileController" })
               .when("/HouseProfileEdit", {
                         templateUrl: "/public/view/HostUser/HouseProfileEdit.html",
                        controller: "HouseProfileEditController" })
               .when("/EditEvents", {
                         templateUrl: "/public/view/HostUser/EditEvents.html",
                        controller: "EditEventsController" })
       .when("/HouseLocation", {
                         templateUrl: "/public/view/HostUser/HouseLocation.html",
                        controller: "HouseLocationController" })
      .when("/Events", {
                templateUrl: "/public/view/HostUser/Events.html",
               controller: "eventsController" })
       .when("/Members", {
                 templateUrl: "/public/view/HostUser/Members.html",
                controller: "membersController" })
        .when("/Guard", {
                templateUrl: "/public/view/GuardUser/GuardProfile.html",
              controller: "GuardUserController" })
        .when("/GuardUserRegistration", {
                      templateUrl: "/public/view/GuardUser/GuardRegistration.html",
                    controller: "GuardRegistration" })
        .when("/Basic", {
                  templateUrl: "/public/view/BasicUser/BasicProfile.html",
                controller: "BasicUserController" })
        .when("/AboutUS", {
                          templateUrl: "/public/view/Navbar/Aboutus.html",
                        controller: "LoginController" })
      .when("/ContactUs", {
                        templateUrl: "/public/view/Navbar/ContactUs.html",
                        controller: "ContactusController" })
        .when("/faq", {
                      templateUrl: "/public/view/Navbar/faq.html",
                      controller: "LoginController" })
        .when("/HowitWorks", {
                      templateUrl: "/public/view/Navbar/Howitworks.html",
                      controller: "LoginController" })
         .when("/", {
                templateUrl: "/public/view/default/default.html",
              controller: "DefaultCtrl"  })
        .otherwise({
            templateUrl: "/public/view/default/default.html",
            controller: "DefaultCtrl" });

    // $locationProvider.html5Mode(true);
    $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
});

angular.controller("maincontroller", ['$scope',
function ($scope) {



    $scope.isUserLoggedIn = false;

}]);
