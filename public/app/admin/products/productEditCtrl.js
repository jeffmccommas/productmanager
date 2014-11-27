/**
 * Created by Deb on 8/26/2014.
 */
(function () {
    "use strict";

    angular
        .module("app")
        .controller("ProductEditCtrl", [
            "$state",
            "productService", "httprequest", "$stateParams",
            ProductEditCtrl]);


    function ProductEditCtrl($state, productService, httprequest, $stateParams) {
        var vm = this;

        var GetProductDetail = function () {
            httprequest.http_get('/api/products/' + $stateParams.id).then(function (response) {
                vm.product = response;
                if (vm.product && vm.product.productId) {
                    vm.title = "Edit: " + vm.product.productName;
                } else {
                    vm.title = "New Product";
                }
            });
        };
        GetProductDetail();
        vm.priceOption = "percent";

        vm.marginPercent = function () {
            return productService.calculateMarginPercent(vm.product.price,
                vm.product.cost)
        };

        /* Calculate the price based on a markup */
        vm.calculatePrice = function () {
            var price = 0;

            if (vm.priceOption == 'amount') {
                price = productService.calculatePriceFromMarkupAmount(
                    vm.product.cost, vm.markupAmount);
            }

            if (vm.priceOption == 'percent') {
                price = productService.calculatePriceFromMarkupPercent(
                    vm.product.cost, vm.markupPercent);
            }
            vm.product.price = price;
        };



        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                httprequest.http_post('/api/productupdate', vm.product).then(function (data) {
                    toastr.success("Save Successful");
                });
            } else {
                alert("Please correct the validation errors first.");
            }
        };

        vm.cancel = function () {
            $state.go('productList');
        };

        vm.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            } else {
                alert("Please enter one or more tags separated by commas");
            }
        };

        vm.removeTag = function (idx) {
            vm.product.tags.splice(idx, 1);
        };
    }
}());