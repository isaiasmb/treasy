'use strict';

angular.module('treasyApp').controller('CategoriaController', CategoriaController);

function CategoriaController ($filter, CategoriaService, $uibModal) {

	var vm = this;
	vm.treeFilter = $filter('uiTreeFilter');
	vm.supportedFields = ['descricao', 'observacao'];

	inicializa();

	function inicializa() {
		vm.adicionar = adicionar;
		vm.editar = editar;
		vm.remover = remover;	
		vm.fecharTudo = fecharTudo;
		vm.expandirTudo = expandirTudo;	
		vm.toggle = toggle;
		vm.modal = {
			animation: false,
			templateUrl: 'modules/categoria/cad/cad-categoria.html',
			controller: 'CadCategoriaController',
			controllerAs: 'CadCategoriaCtrl',
			size: 'sm',
			resolve: {
				categoria: undefined
			}
		};

		carregarCategorias();
	}

	function carregarCategorias () {
		CategoriaService.getCategorias().then(function (result) {
			vm.categorias = result.data;
		});
	}

	function adicionar (categoriaPai) {
		var m = angular.copy(vm.modal);
		var modalInstance = $uibModal.open(m);

		modalInstance.result.then(function (categoria) {
			categoria.categoriaPai = categoriaPai.$modelValue;
			CategoriaService.novaCategoria(categoria).then(function () {
				carregarCategorias();
				$.bootstrapGrowl('Categoria salva com sucesso!', {
					type: 'success',
					allow_dismiss: true
				});
			});
		});
	}

	function editar (categoria) {
		var m = angular.copy(vm.modal);
		m.resolve = {
			categoria: function () {
				return angular.copy(categoria.$modelValue);
			}
		}
		var modalInstance = $uibModal.open(m);

		modalInstance.result.then(function (categoria) {
			CategoriaService.atualizarCategoria(categoria).then(function () {
				carregarCategorias();
				$.bootstrapGrowl('Categoria atualizada com sucesso!', {
					type: 'success',
					allow_dismiss: true
				});
			});
		});

	}

	function remover (categoria) {
		CategoriaService.excluirCategoria(categoria.$modelValue.id).then(function () {
			carregarCategorias();
			$.bootstrapGrowl('Categoria excluída!', {
				type: 'success',
				allow_dismiss: true
			});
		});
	};

	function toggle (scope) {
		scope.toggle();
	};

	function getRootNodesScope () {
		return angular.element(document.getElementById("tree-root")).scope();
	};

	function fecharTudo () {
		getRootNodesScope().$broadcast('angular-ui-tree:collapse-all');
	};

	function expandirTudo () {
		getRootNodesScope().$broadcast('angular-ui-tree:expand-all');
	};
}



