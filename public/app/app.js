angular.module('app', ['ngResource', 'ngRoute', 'ui.router']);

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
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: '/partials/main/main',
            controller: 'ProductListCtrl as vm'
        })
        .state("signup", {
            url: "/signup",
            templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .state("profile", {
            url: "/profile",
            templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl',
            resolve: routeRoleChecks.user
        })
        .state("productList", {
            url: "/products",
            templateUrl: '/partials/admin/products/productListView',
            controller: 'ProductListCtrl as vm'
        })
        .state("productDetail", {
            url: "/products/:id",
            templateUrl: '/partials/products/product-details',
            controller: 'mvProductDetailCtrl'
        })
        .state("productEdit", {
            abstract: true,
            url: "/products/edit/:id",
            templateUrl: "/partials/admin/products/productEditView",
            controller: "ProductEditCtrl as vm",

        })
        .state("productEdit.info", {
            url: "/info",
            templateUrl: "app/products/productEditInfoView.html"
        })
        .state("productEdit.price", {
            url: "/price",
            templateUrl: "app/products/productEditPriceView.html"
        })
        .state("productEdit.tags", {
            url: "/tags",
            templateUrl: "app/products/productEditTagsView.html"
        })
}).run(function ($rootScope, $location, mvIdentity, $state) {
    $rootScope.$on('$stateChangeStart', function (event, next, toParams, current, fromParams) {
        return;
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