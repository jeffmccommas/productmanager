angular.module('app').factory('mvCachedCourses', function(mvCourse) {
  var productList;

  return {
    query: function() {
      if(!productList) {
          productList = product.query();
      }

      return productList;
    }
  }
});