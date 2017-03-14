(function () {
    'use strict';
    angular.module('treasyApp').filter('trust', TrustFilter);

    function TrustFilter($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }

})();