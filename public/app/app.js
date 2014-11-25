angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
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
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'mvMainCtrl'
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl',
            resolve: routeRoleChecks.admin
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl',
            resolve: routeRoleChecks.user
        })
        .when('/courses', {
            templateUrl: '/partials/courses/course-list',
            controller: 'mvCourseListCtrl'
        })
        .when('/products', {
            templateUrl: '/partials/admin/products/productListView',
            controller: 'ProductListCtrl as vm'
        })
        .when('/courses/:id', {
            templateUrl: '/partials/courses/course-details',
            controller: 'mvCourseDetailCtrl'
        })
        .otherwise('/');

}).run(function ($rootScope, $location, mvIdentity) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        var requireAutantication = ["/partials/admin/products/productListView"];
        if (requireAutantication.indexOf(next.templateUrl) >= 0) {
            if (!mvIdentity.isAuthenticated()) {
                if (next.templateUrl === "/partials/account/signup") {

<<<<<<< Updated upstream
                } else {
                    $location.path("/signup");
                }
            }
        }
    });
});
=======
});

//app.config(["$stateProvider",
//        "$urlRouterProvider",
//        function ($stateProvider, $urlRouterProvider) {
//            $urlRouterProvider.otherwise("/");
//
//            $stateProvider
//                .state("home", {
//                    url: "/",
//                    templateUrl: "app/welcomeView.html"
//                })
//                // Products
//                .state("productList", {
//                    url: "/products",
//                    templateUrl: "app/products/productListView.html",
//                    controller: "ProductListCtrl as vm"
//                })
//                .state("productEdit", {
//                    abstract: true,
//                    url: "/products/edit/:productId",
//                    templateUrl: "app/products/productEditView.html",
//                    controller: "ProductEditCtrl as vm",
//                    resolve: {
//                        productResource: "productResource",
//
//                        product: function (productResource, $stateParams) {
//                            var productId = $stateParams.productId;
//                            return productResource.get({ productId: productId }).$promise;
//                        }
//                    }
//                })
//                .state("productEdit.info", {
//                    url: "/info",
//                    templateUrl: "app/products/productEditInfoView.html"
//                })
//                .state("productEdit.price", {
//                    url: "/price",
//                    templateUrl: "app/products/productEditPriceView.html"
//                })
//                .state("productEdit.tags", {
//                    url: "/tags",
//                    templateUrl: "app/products/productEditTagsView.html"
//                })
//                .state("productDetail", {
//                    url: "/products/:productId",
//                    templateUrl: "app/products/productDetailView.html",
//                    controller: "ProductDetailCtrl as vm",
//                    resolve: {
//                        productResource: "productResource",
//
//                        product: function (productResource, $stateParams) {
//                            var productId = $stateParams.productId;
//                            return productResource.get({ productId: productId }).$promise;
//                        }
//                    }
//                })
//                .state("priceAnalytics", {
//                    url: "/priceAnalytics",
//                    templateUrl:"app/prices/priceAnalyticsView.html",
//                    controller: "PriceAnalyticsCtrl",
//                    resolve: {
//                        productResource: "productResource",
//
//                        products: function (productResource) {
//                            return productResource.query(function(response) {
//                                    // no code needed for success
//                                },
//                                function(response) {
//                                    if (response.status == 404) {
//                                        alert("Error accessing resource: " +
//                                        response.config.method + " " +response.config.url);
//                                    } else {
//                                        alert(response.statusText);
//                                    }
//                                }).$promise;
//
//                        }
//                    }
//                })
//        }]
//);
>>>>>>> Stashed changes
