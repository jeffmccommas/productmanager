angular.module('app').controller('mvProductDetailCtrl', function ($scope, $stateParams, $http, $modal) {
    var GetProductDetail = function () {
        $http.get('/api/products/' + $stateParams.id).then(function (response) {
            $scope.product = response.data;
        });
    };
    GetProductDetail();


    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'app/products/mvModal.html',
            controller: 'ModalInstanceCtrl',
            size: size
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});