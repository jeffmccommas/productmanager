(function () {
    "use strict";

    angular
        .module("app")
        .controller("ProductEditCtrl", [
            "$state",
            "productService", "httprequest", "$stateParams", "FileUploader",
            ProductEditCtrl]);


    function ProductEditCtrl($state, productService, httprequest, $stateParams, FileUploader) {
        var vm = this;
        var uploadedImagePath = "";
        var saveUrl = ($stateParams.id == "0" ? "/api/productcreate" : "/api/productupdate");
        var GetProductDetail = function () {
            httprequest.http_get('/api/products/' + $stateParams.id).then(function (response) {
                vm.product = response;
                uploadedImagePath = vm.product.imageUrl;
                if (vm.product && vm.product.productId) {
                    vm.title = "Edit: " + vm.product.productName;
                }
            });
        };

        if ($stateParams.id !== "0") {
            GetProductDetail();
        } else {
            vm.title = "New Product";
        }


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
                vm.product.imageUrl = uploadedImagePath;
                console.log(vm.product);
                httprequest.http_post(saveUrl, vm.product).then(function (data) {
                    toastr.success("Save Successful");
                    //$state.go('productList');
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
        vm.uploader = new FileUploader();

        var uploader = vm.uploader = new FileUploader({
            url: '/api/imageupload'
        });

        // FILTERS

        uploader.filters.push({
            name: 'imageFilter',
            fn: function (item /*{File|FileLikeObject}*/ , options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            uploadedImagePath = response.substring(response.indexOf("images"), response.length);
        };

        console.info('uploader', uploader);

    }
}());