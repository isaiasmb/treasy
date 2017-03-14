(function () {
    'use strict';
    angular.module('treasyApp').service('CategoriaService', CategoriaService);

    function CategoriaService ($http) {
        this.getCategorias = function () {
        return $http.get("http://localhost:8080/treasy/api/categorias");
        };

        this.novaCategoria = function (categoria) {
            return $http.post("http://localhost:8080/treasy/api/categorias", categoria);
        };
        
        this.atualizarCategoria = function(categoria) {
            return $http.put("http://localhost:8080/treasy/api/categorias", categoria);
        };
        
        this.excluirCategoria = function(id) {
            return $http.delete("http://localhost:8080/treasy/api/categorias/" + id);
        };
    }

})();