/**
 * Created by jmccommas on 11/27/14.
 */
angular.module('app').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});