/**
 * Created by jmccommas on 11/29/14.
 */
(function () {
    "use strict";

    angular.module('app').controller('mvSchoolInfo',['$scope', function($scope){

        $scope.map = { center: { latitude: 42.359482, longitude: -71.1557882 }, zoom: 8 };

    }]);


}());

