angular.module('app').controller('mvMainCtrl', ["$scope", "mvCachedCourses", function ($scope, mvCachedCourses ) {
    $scope.products = mvCachedCourses.query();
}]);