/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    angular
        .module("app")
        .controller("ProductListCtrl", ['$http',
                        ProductListCtrl]);

    function ProductListCtrl($http) {
        var vm = this;

        var GetAllProducts = function () {
            $http.get('/api/products').then(function (response) {
                vm.products = response.data;
            });
        };

        GetAllProducts();

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    }
}());
//// sample data for products