angular.module('app').controller('mvProductDetailCtrl', function($scope, mvCachedCourses, $routeParams) {
  mvCachedCourses.query().$promise.then(function(collection) {
    collection.forEach(function(product) {
      if(product._id === $routeParams.id) {
        $scope.product = product;
      }
    })
  })
});