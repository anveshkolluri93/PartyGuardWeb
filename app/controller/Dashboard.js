angular.controller("DashboardController", ['$scope', '$rootScope', '$location', '$http','$filter',
function ($scope, $rootScope, $location, $http, $filter) {

                // $location.path('/HostProfile');
 $scope.isUserLoggedIn = true;
console.log($http.defaults.headers.common.Authorization);
console.log("author "+$rootScope.Author);
var auth = $rootScope.Author;
var uname = $rootScope.uname;
var finalresult = [];
$http({
      method: 'GET',
      url: 'https://partyguardservices20161025060016.azurewebsites.net/FraternityList',
      headers: {
      'Authorization': auth
      }}).then(function(result) {
      // console.log(result.data.UserType);

          //var response = { success: type === userType};

           finalresult = result.data;
         console.log("result before "+JSON.stringify(finalresult));
         console.log("size is "+finalresult.length);

            $scope.sort = {
                       sortingOrder : 'id',
                       reverse : false
                   };

           $scope.gap = 5;
           $scope.usercount = finalresult.length;
           $scope.filteredItems = [];
           $scope.groupedItems = [];
           $scope.itemsPerPage = 25;
           $scope.pagedItems = [];
           $scope.currentPage = 0;
           $scope.items = finalresult;

                  console.log("result fival "+JSON.stringify($scope.items));
           var searchMatch = function (haystack, needle) {
                if (!needle) {
                    return true;
                }
                return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
            };

            // init the filtered items
            $scope.search = function () {
              console.log("inside search");
                $scope.filteredItems = $filter('filter')($scope.items, function (item) {
                    for(var attr in item) {
                        if (searchMatch(item[attr], $scope.query))
                            return true;
                    }
                    return false;
                });
                // take care of the sorting order
                if ($scope.sort.sortingOrder !== '') {
                  console.log("inside sort");
                    $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
                }
                $scope.currentPage = 0;
                // now group by pages
               $scope.groupToPages();
            };

            // calculate page in place
           $scope.groupToPages = function () {
               $scope.pagedItems = [];

               for (var i = 0; i < $scope.filteredItems.length; i++) {
                   if (i % $scope.itemsPerPage === 0) {
                       $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
                   } else {
                       $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
                   }
               }
           };

           $scope.range = function (size,start, end) {
               var ret = [];
               console.log(size,start, end);

               if (size < end) {
                   end = size;
                   start = size-$scope.gap;
               }
               for (var i = start; i < end; i++) {
                   ret.push(i);
               }
                console.log(ret);
               return ret;
           };

           $scope.prevPage = function () {
               if ($scope.currentPage > 0) {
                   $scope.currentPage--;
               }
           };

           $scope.nextPage = function () {
               if ($scope.currentPage < $scope.pagedItems.length - 1) {
                   $scope.currentPage++;
               }
           };

           $scope.setPage = function () {
               $scope.currentPage = this.n;
           };

           // functions have been describe process the data for display
             $scope.search();

      }, function(error) {
      console.log(error);
      });
//populating table

}]);
// angular.$inject = ['$scope', '$filter'];
// angular.directive("customSort", function() {
// return {
//     restrict: 'A',
//     transclude: true,
//     scope: {
//       order: '=',
//       sort: '='
//     },
//     template :
//       ' <a ng-click="sort_by(order)" style="color: #555555;">'+
//       '    <span ng-transclude></span>'+
//       '    <i ng-class="selectedCls(order)"></i>'+
//       '</a>',
//     link: function(scope) {
//
//     // change sorting order
//     scope.sort_by = function(newSortingOrder) {
//         var sort = scope.sort;
//
//         if (sort.sortingOrder == newSortingOrder){
//             sort.reverse = !sort.reverse;
//         }
//
//         sort.sortingOrder = newSortingOrder;
//     };
//
//
//     scope.selectedCls = function(column) {
//         if(column == scope.sort.sortingOrder){
//             return ('icon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
//         }
//         else{
//             return'icon-sort'
//         }
//     };
//   }// end link
// }
// });
