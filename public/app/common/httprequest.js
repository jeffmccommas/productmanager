angular.module('app').service('httprequest', ['$q', '$http',
    function ($q, $http) {

        this.http_get = function (url) {
            var deferred = $q.defer();
            $http.get(url)
                .success(function (data, status, headers, $scope) {
                    deferred.resolve(data);
                    return deferred.promise;
                }).error(function (data, status, headers, error) {});
            return deferred.promise;
        };
        this.http_post = function (url, requestdata) {
            var deferred = $q.defer();
            $http.post(url, requestdata, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                    return deferred.promise;
                })
                .error(function (data, status, headers, config) {});
            return deferred.promise;

        };

        this.http_delete = function (url) {
            var deferred = $q.defer();
            $http.delete(url)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                    return deferred.promise;
                })
                .error(function (data, status, headers, config) {});
            return deferred.promise;

        };
        this.http_put = function () {
            var deferred = $q.defer();
            $http.put(url, requestdata, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                    return deferred.promise;
                })
                .error(function (data, status, headers, config) {});
            return deferred.promise;

        };
    }
]);