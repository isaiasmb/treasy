treasyApp.config(function ($routeProvider) {

    $routeProvider.when("/categorias", {
        templateUrl: "views/categorias.html",
        controller: "categoriasCtrl"
    });

    $routeProvider.otherwise({ redirectTo: "/categorias" });
});