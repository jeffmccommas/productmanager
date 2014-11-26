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
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state("home", {
            url: "/home",
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
            url: "/products-detail/:id",
            templateUrl: '/partials/products/product-details',
            controller: 'mvProductDetailCtrl'
        })
        .state("schoolInfo", {
            url: "/school-information",
            templateUrl: '/partials/info/school-info'
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