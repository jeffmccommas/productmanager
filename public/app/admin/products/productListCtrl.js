/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    angular
        .module("app")
        .controller("ProductListCtrl", ['httprequest',
                        ProductListCtrl]);

    function ProductListCtrl(httprequest) {
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
        }

        vm.delete = function (index) {
            var to_delete_prod = vm.products[index];
            httprequest.http_delete('/api/product/' + to_delete_prod._id).then(function (response) {
                vm.products.splice(index, 1);
            });
        };
    }
}());
//// sample data for products