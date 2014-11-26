angular.module('app').controller('mvMainCtrl', function ($scope, mvCachedCourses) {
    $scope.products = mvCachedCourses.query();
});