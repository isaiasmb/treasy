(function () {
    'use strict';
    angular.module('treasyApp').config(RouteConfig);

    function RouteConfig($routeProvider) {
        $routeProvider.when("/categorias", {
            templateUrl: "modules/categoria/categorias.html",
            controller: "CategoriaController",
            controllerAs: "CategoriaCtrl"
        });

        $routeProvider.otherwise({ redirectTo: "/categorias" });
    }

})();
