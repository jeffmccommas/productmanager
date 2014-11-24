/**
 * Created by jmccommas on 11/23/14.
 */
angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function(mvToastr) {
    return {
        notify: function(msg) {
            mvToastr.success(msg);
            console.log(msg);
        }
    }
});