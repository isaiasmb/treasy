treasyApp.filter('trust', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
});