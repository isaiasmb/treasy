(function () {
    'use strict';
    angular.module('treasyApp').config(AppConfig);

    function AppConfig(uiTreeFilterSettingsProvider) {
        uiTreeFilterSettingsProvider.descendantCollection = ['subCategorias'];
    }

})();