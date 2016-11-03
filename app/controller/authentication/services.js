angular.factory('AuthenticationService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
        var service = {};
       $rootScope.Author = "";
       $rootScope.uname = "";
        service.Login = function (username, password, callback) {
            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            // $timeout(function () {
            //   if(username === 'admin'){
            //     var response = { success: username === 'admin' && password === 'admin'};
            //     if (!response.success) {
            //         response.message = 'Username or password is incorrect';
            //     }
            //     callback(response);
              //   }else if(username === 'host'){
            //     var response = { success: username === 'host' && password === 'host'};
            //     if (!response.success) {
            //         response.message = 'Username or password is incorrect';
            //     }
            //     callback(response);
            //   }else if(username === 'guard'){
            //     var response = { success: username === 'guard' && password === 'guard'};
            //     if (!response.success) {
            //         response.message = 'Username or password is incorrect';
            //     }
            //     callback(response);
            //   }else {
            //     var response = { success: username === 'basic' && password === 'basic'};
            //     if (!response.success) {
            //         response.message = 'Username or password is incorrect';
            //     }
            //     callback(response);
            //   }
            //
            // }, 1000);


            /* Use this for real authentication
             ----------------------------------------------*/
            //$http.post('/api/authenticate', { username: username, password: password })
            //    .success(function (response) {
            //        callback(response);
            //    });
            var req = "username="+username+"&password="+password+"&grant_type=password";
            var token = "";
            var userType = "";

            console.log("hello"+req);
            $http({
                  method: 'POST',
                  url: 'https://partyguardservices20161025060016.azurewebsites.net/token',
                  data: req,
                  headers: {
                  'Content-Type': 'text/plain'
                  }}).then(function(result) {
                   console.log(result.data.access_token);
                    token = result.data.access_token
                    var auth = "Bearer "+token;

                    $rootScope.Author = auth;
                    $rootScope.uname = username;
                    console.log("Authorization"+auth)
                    console.log("Authorization"+$rootScope.Author);
                    $http({
                          method: 'GET',
                          url: 'https://partyguardservices20161025060016.azurewebsites.net/API/Account/UserInfo',
                          headers: {
                          'Authorization': auth
                          }}).then(function(result) {
                          // console.log(result.data.UserType);
                              userType = result.data.UserType;
                              //var response = { success: type === userType};
                              console.log(result.data);
                              //console.log(response.access_token);
                                         // store username and token in local storage to keep user logged in between page refreshes
                        //  $localStorage.currentUser = { username: username, token: token };

                                         // add jwt token to auth header for all requests made by the $http service
                             $http.defaults.headers.common.Authorization = 'Bearer ' +token;
                              callback(userType);
                          }, function(error) {
                          console.log(error);
                          callback('host');
                          });
                  //  callback(response);
                  }, function(error) {
                  console.log("shit"+error);
                    callback(userType);
                  });


            // $http.post({
            //       method: 'POST',
            //       url: 'http://partyguardservices20161025060016.azurewebsites.net/token',
            //       data: req,
            //       headers: {
            //       'Content-Type': 'text/plain'
            //       }})
            //     .success(function (response) {
            //
            //       console.log(response);
            //         // login successful if there's a token in the response
            //         if (response.access_token) {
            //             console.log(response.access_token);
            //             // store username and token in local storage to keep user logged in between page refreshes
            //             $localStorage.currentUser = { username: username, token: response.access_token };
            //
            //             // add jwt token to auth header for all requests made by the $http service
            //             $http.defaults.headers.common.Authorization = 'Bearer ' + response.access_token;
            //
            //             // execute callback with true to indicate successful login
            //             callback(true);
            //         } else {
            //           alert(" no toKen");
            //             // execute callback with false to indicate failed login
            //             callback(false);
            //         }
            //     });

        };

        service.SetCredentials = function (username, password) {
            var authdata = Base64.encode(username + ':' + password);

            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };

        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

        return service;
    }])

.factory('Base64', function () {
    /* jshint ignore:start */

    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };

    /* jshint ignore:end */
});
