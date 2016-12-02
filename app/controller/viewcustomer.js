angular.controller("ViewCustomerController", ['$scope', '$rootScope', '$location', '$http' ,
function ($scope, $rootScope, $location, $http) {

                // $location.path('/HostProfile');
 //$scope.isUserLoggedIn = true;

  $rootScope.loginValue = "Logout";
    $rootScope.isMaster = false;
    $rootScope.isHost = true;
    $rootScope.isGuard = true;
    $rootScope.isBasic = true;
//                  var members =[
// {"image":"https://s32.postimg.org/j39r4gait/Sigmapi.jpgg", "fratName":"Pi Sigma Epsilon", "ChapterName":"Pi Sig E", "Custid":"12345"},
// {"image":"https://s18.postimg.org/b5foym8ix/download.png", "fratName":"Alpha Epsilon Pi", "ChapterName":"A E Pi", "Custid":"23451"},
// {"image":"https://s18.postimg.org/3qqd68mnd/kapp.jpg", "fratName":"Alpha Tau Omega", "ChapterName":"A T O", "Custid":"34521"},
// {"image":"https://s18.postimg.org/9sxzwqb3d/tow.jpg", "fratName":"Delta Kappa Epsilon", "ChapterName":"D K E", "Custid":"45321"}
// ];
//    $scope.members = members;

   $scope.isUserLoggedIn = true;
    $scope.toggle = true;
  console.log($http.defaults.headers.common.Authorization);
  console.log("author "+$rootScope.Author);
  var auth = $rootScope.Author;
  var uname = $rootScope.uname;
  var finalresult = [];
  $rootScope.selectedItem = {};
//   $scope.$watch('toggle', function(){
//     console.log("toggle");
//   $scope.toggleText = $scope.toggle ? 'Active' : 'Suspend';

          $scope.IsHidden = true;
          $scope.IsShown = true;

// });
  $http({
        method: 'GET',
        url: 'https://partyguardservices20161110094537.azurewebsites.net/api/FraternityModels',
        headers: {
        'Authorization': auth
        }}).then(function(result) {
        // console.log(result.data.UserType);

            //var response = { success: type === userType};

             finalresult = result.data;
           console.log("result before "+JSON.stringify(finalresult));
           console.log("size is "+finalresult.length);
            $scope.members = finalresult;



            //   $scope.sort = {
            //              sortingOrder : 'id',
            //              reverse : false
            //          };
             //
            //  $scope.gap = 5;
            //  $scope.usercount = finalresult.length;
            //  $scope.filteredItems = [];
            //  $scope.groupedItems = [];
            //  $scope.itemsPerPage = 25;
            //  $scope.pagedItems = [];
            //  $scope.currentPage = 0;
            //  $scope.items = finalresult;
             //
            //         console.log("result fival "+JSON.stringify($scope.items));
            //  var searchMatch = function (haystack, needle) {
            //       if (!needle) {
            //           return true;
            //       }
            //       return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
            //   };
             //
            //   // init the filtered items
            //   $scope.search = function () {
            //     console.log("inside search");
            //       $scope.filteredItems = $filter('filter')($scope.items, function (item) {
            //           for(var attr in item) {
            //               if (searchMatch(item[attr], $scope.query))
            //                   return true;
            //           }
            //           return false;
            //       });
            //       // take care of the sorting order
            //       if ($scope.sort.sortingOrder !== '') {
            //         console.log("inside sort");
            //           $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
            //       }
            //       $scope.currentPage = 0;
            //       // now group by pages
            //      $scope.groupToPages();
            //   };
             //
            //   // calculate page in place
            //  $scope.groupToPages = function () {
            //      $scope.pagedItems = [];
             //
            //      for (var i = 0; i < $scope.filteredItems.length; i++) {
            //          if (i % $scope.itemsPerPage === 0) {
            //              $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
            //          } else {
            //              $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            //          }
            //      }
            //  };
             //
            //  $scope.range = function (size,start, end) {
            //      var ret = [];
            //      console.log(size,start, end);
             //
            //      if (size < end) {
            //          end = size;
            //          start = size-$scope.gap;
            //      }
            //      for (var i = start; i < end; i++) {
            //          ret.push(i);
            //      }
            //       console.log(ret);
            //      return ret;
            //  };
             //
            //  $scope.prevPage = function () {
            //      if ($scope.currentPage > 0) {
            //          $scope.currentPage--;
            //      }
            //  };
             //
            //  $scope.nextPage = function () {
            //      if ($scope.currentPage < $scope.pagedItems.length - 1) {
            //          $scope.currentPage++;
            //      }
            //  };
             //
            //  $scope.setPage = function () {
            //      $scope.currentPage = this.n;
            //  };
             //
            //  // functions have been describe process the data for display
            //    $scope.search();

        }, function(error) {
        console.log(error);
        });

        $scope.ShowHide = function (index) {
            //If DIV is hidden it will be visible and vice versa.
            console.log("index is "+index);
            $scope.IsHidden = $scope.IsHidden ? false : true;
            $scope.IsShown = $scope.IsShown ? false : true;
            $rootScope.selectedItem = $scope.members[index];
            if($rootScope.selectedItem.paymentStatus === "Active"){
              console.log("heyy am active");

            $scope.activeClass = 'btn btn-success disabled';
            $scope.suspendClass = 'btn btn-warning ';
            $scope.activity = false ;
            $scope.buttonClass = 'btn btn-warning';
            $scope.active = "Activated";
            $scope.suspend = "Suspend"
          }else {
              console.log("heyy am suspended");
          //  $scope.suspend = true;
          $scope.activeClass = 'btn btn-success';
          $scope.suspendClass = 'btn btn-warning disabled';
        $scope.activity = true ;
          $scope.buttonClass = 'btn btn-success';
            $scope.active = "Activate";
            $scope.suspend = "Suspended";

          }
            console.log($rootScope.selectedItem);

        }

        $scope.displayTable = function(){
          $scope.IsHidden = true;
          $scope.IsShown = true;

        }
        $scope.activate = function (){
            $scope.active = "Activate";
          $scope.activeClass = 'btn btn-success ';
          $scope.suspendClass = 'btn btn-warning disabled';
          $scope.suspend = "Suspended";
            $rootScope.selectedItem.paymentStatus = "Suspended";
        }
        $scope.suspended = function (){
          $scope.activeClass = 'btn btn-success  disabled';
          $scope.active = "Activated";
          $scope.suspendClass = 'btn btn-warning';
          $scope.suspend = "Suspend"
          $rootScope.selectedItem.paymentStatus = "Active";
        }

        $scope.delete_task = function(index) {
        console.log("index is "+index);
        var but = $scope.members[index];
       console.log("task d is "+JSON.stringify(but));

        but.status = 'completed';
        but.disabled = true;

 };
  //populating table

  }]);
