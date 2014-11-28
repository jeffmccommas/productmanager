(function () {
    "use strict";
    angular
        .module("app")
        .controller("ProductListCtrl", ['httprequest', '$scope', '$modal', ProductListCtrl]);

    function ProductListCtrl(httprequest, $scope, $modal) {
        var vm = this;

        var GetAllProducts = function () {
            httprequest.http_get('/api/products').then(function (response) {
                vm.products = response;
            });
        };

        GetAllProducts();

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };

        vm.delete = function (index) {
            var to_delete_prod = vm.products[index];
            httprequest.http_delete('/api/product/' + to_delete_prod._id).then(function (response) {
                vm.products.splice(index, 1);
                toastr.error("Product Deleted");
            });
        };

        //$scope.ok = function () {
        //    $modalInstance.close();
        //};

        $scope.cancel = function () {
            $modal.dismiss('cancel');
        };

        $scope.open = function (index) {
            var modalInstance = $modal.open({
                templateUrl: 'app/admin/products/deleteModal.html',
                controller: function ($scope, $modalInstance) {
                    $scope.confirmDelete = function (status) {
                        $modalInstance.close(status);
                    };
                }
            });
            modalInstance.result.then(function (isDeleted) {
                if (isDeleted) {
                    vm.delete(index);
                }
            });
        };
    }
}());