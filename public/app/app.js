(function () {
    "use strict";

    angular.module('app', [
        'ngResource',
        'ngRoute',
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'ngMessages',
        "ui.mask",
        "angularCharts",
        "common.services",
        "angularFileUpload",
        "ui.utils",
        "uiGmapgoogle-maps",
        "angular-google-analytics"
    ]);

    angular.module('app').config(function ($stateProvider, $locationProvider, $urlRouterProvider,AnalyticsProvider) {
        // initial configuration
        AnalyticsProvider.setAccount('UA-XXXXX-xx');
        // using multiple tracking objects (analytics.js only)
        // AnalyticsProvider.setAccount([
        //   { tracker: 'UA-12345-12', name: "tracker1" },
        //   { tracker: 'UA-12345-34', name: "tracker2" }
        // ]);

        // track all routes (or not)
        AnalyticsProvider.trackPages(true);

        // Optional set domain (Use 'none' for testing on localhost)
        // AnalyticsProvider.setDomainName('XXX');

        // Use display features plugin
        AnalyticsProvider.useDisplayFeatures(true);

        // url prefix (default is empty)
        // - for example: when an app doesn't run in the root directory
        AnalyticsProvider.trackPrefix('app');

        // Use analytics.js instead of ga.js
        AnalyticsProvider.useAnalytics(true);

        // Use cross domain linking
        AnalyticsProvider.useCrossDomainLinker(true);
        AnalyticsProvider.setCrossLinkDomains(['domain-1.com', 'domain-2.com']);

        // Ignore first page view... helpful when using hashes and whenever your bounce rate looks obscenely low.
        AnalyticsProvider.ignoreFirstPageLoad(true);

        // Enabled eCommerce module for analytics.js(uses legacy ecommerce plugin)
        AnalyticsProvider.useECommerce(true, false);

        // Enabled eCommerce module for analytics.js(uses ec plugin instead of ecommerce plugin)
        AnalyticsProvider.useECommerce(true, true);

        // Enable enhanced link attribution
        AnalyticsProvider.useEnhancedLinkAttribution(true);

        // Enable analytics.js experiments
        AnalyticsProvider.setExperimentId('12345');

        // Set custom cookie parameters for analytics.js
        AnalyticsProvider.setCookieConfig({
            cookieDomain: 'foo.example.com',
            cookieName: 'myNewName',
            cookieExpires: 20000
        });

        // change page event name
        AnalyticsProvider.setPageEvent('$stateChangeSuccess');
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

        // productList start

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

        // productEdit start

        .state("productEdit", {
            url: "/products/edit/:id",
            templateUrl: "/partials/admin/products/productEditView",
            controller: "ProductEditCtrl as vm"
        })
            .state("productEdit.info", {
                url: "/info",
                parent: 'productEdit',
                templateUrl: "/partials/admin/products/productEditInfoView"
            })
            .state("productEdit.price", {
                url: "/price",
                templateUrl: "/partials/admin/products/productEditPriceView"
            })
            .state("productEdit.tags", {
                url: "/tags",
                templateUrl: "/partials/admin/products/productEditTagsView"
            })
            .state("productEdit.image", {
                url: "/image",
                templateUrl: "/partials/admin/products/productEditImageView"
            })
            .state("school-information", {
                url: "/school-information",
                templateUrl: '/partials/info/school-info',
                controller: 'mvSchoolInfo'
            })

        // cost analytics start

        .state("cost-analysis", {
            url: "/cost-analysis",
            templateUrl: "/app/admin/prices/priceAnalyticsView.html",
            controller: "PriceAnalyticsCtrl",
            resolve: {
                productResource: "productResource",

                products: function (productResource) {
                    return productResource.query(function (response) {
                            // no code needed for success
                        },
                        function (response) {
                            if (response.status == 404) {
                                alert("Error accessing resource: " +
                                    response.config.method + " " + response.config.url);
                            } else {
                                alert(response.statusText);
                            }
                        }).$promise;

                }
            }
        })
    }).run(function ($rootScope, $location, mvIdentity, $state,Analytics) {
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
}());