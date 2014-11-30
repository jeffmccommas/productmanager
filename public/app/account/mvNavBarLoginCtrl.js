(function () {
    "use strict";
    angular.module('app').controller('mvNavBarLoginCtrl', ["$scope", "$http", "mvIdentity", "mvNotifier", "mvAuth", "$state", function ($scope, $http, mvIdentity, mvNotifier, mvAuth, $state) {
        $scope.identity = mvIdentity;
        $scope.signin = function (username, password) {
            mvAuth.authenticateUser(username, password).then(function (success) {
                if (success) {
                    mvNotifier.notify('You have successfully signed in!');
                    $state.go('productList')
                } else {
                    mvNotifier.error('Username/Password combination incorrect');
                }
            });
        };

        $scope.signout = function () {
            mvAuth.logoutUser().then(function () {
                $scope.username = "";
                $scope.password = "";
                mvNotifier.notify('You have successfully signed out!');
                $state.go('home')
            })
        }
    }]);
}());