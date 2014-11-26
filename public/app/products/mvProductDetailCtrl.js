angular.module('app').controller('mvProductDetailCtrl', function ($scope, $stateParams, $http) {
    var GetProductDetail = function () {
        $http.get('/api/products/' + $stateParams.id).then(function (response) {
            $scope.product = response.data;
        });
    };
    GetProductDetail();
});