angular.module('app', [
    'ngResource',
    'ngRoute',
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngMessages',
    "ui.mask",
    "angularCharts"
]);

angular.module('app').config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    var routeRoleChecks = {
        admin: {
            auth: function (mvAuth) {
                return mvAuth.authorizeCurrentUserForRoute('admin')
            }
        },
        user: {
            auth: function (mvAuth) {
                return mvAuth.authorizeAuthenticatedUserForRoute()
            }
        }
    };

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state("home", {
            url: "home",
            templateUrl: '/partials/main/main',
            controller: 'ProductListCtrl as vm'
        })

        .state("signup", {
            url: "signup",
            templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .state("profile", {
            url: "profile",
            templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl',
            resolve: routeRoleChecks.user
        })

        // productList start

        .state("productList", {
            url: "products",
            templateUrl: '/partials/admin/products/productListView',
            controller: 'ProductListCtrl as vm'
        })
        .state("productDetail", {
            url: "products/:id",
            templateUrl: '/partials/products/product-details',
            controller: 'mvProductDetailCtrl'
        })

        // productEdit start

        .state("productEdit", {
            abstract: true,
            url: "/products/edit/:id",
            templateUrl: "/partials/admin/products/productEditView",
            controller: "ProductEditCtrl as vm"
        })
        .state("productEdit.info", {
            url: "info",
            templateUrl: "/partials/admin/products/productEditInfoView"
        })
        .state("productEdit.price", {
            url: "price",
            templateUrl: "/partials/admin/products/productEditPriceView"
        })
        .state("productEdit.tags", {
            url: "tags",
            templateUrl: "/partials/admin/products/productEditTagsView"
        })
        .state("school-information", {
            url: "school-information",
            templateUrl: '/partials/info/school-info'
        })

     // cost analytics start

        .state("cost-analysis", {
            url: "cost-analysis",
            templateUrl:"/partials/admin/prices/priceAnalyticsView.html",
            controller: "PriceAnalyticsCtrl",
            resolve: {
               productResource: "productResource"

                //products: function (productResource) {
                //    return productResource.query(function(response) {
                //            // no code needed for success
                //        }
                //        //function(response) {
                //        //    if (response.status == 404) {
                //        //        alert("Error accessing resource: " +
                //        //        response.config.method + " " +response.config.url);
                //        //    } else {
                //        //        alert(response.statusText);
                //        //    }
                //        //}).$promise;
                //
                //}
            }
        })
}).run(function ($rootScope, $location, mvIdentity, $state) {
    $rootScope.$on('$stateChangeStart', function (event, next, toParams, current, fromParams) {
        var requireAutantication = ["/partials/admin/products/productListView"];
        if (requireAutantication.indexOf(next.templateUrl) >= 0) {
            if (!mvIdentity.isAuthenticated()) {
                if (next.templateUrl === "/partials/account/signup") {


                } else {
                    $location.path("/signup");
                }
            }
        }
    });
});