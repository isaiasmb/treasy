treasyApp.controller('categoriasCtrl', function ($filter, $scope, categoriasAPI, $uibModal) {
	$scope.treeFilter = $filter('uiTreeFilter');

	$scope.supportedFields = ['descricao', 'observacao'];

	var vm = this;

	var carregarCategorias = function() {
		categoriasAPI.getCategorias().then(function (result) {
			$scope.categorias = result.data;
		});
	}


	var inicializa = function() {
		vm.modal = {
			animation: false,
			templateUrl: 'views/cad-categoria.html',
			controller: 'cadCategoriaCtrl',
			size: 'sm',
			resolve: {
				categoria: undefined
			}
		};

		carregarCategorias();
	}

	inicializa();


	$scope.adicionar = function (categoriaPai) {
		var m = angular.copy(vm.modal);
		var modalInstance = $uibModal.open(m);

		modalInstance.result.then(function (categoria) {
			categoria.categoriaPai = categoriaPai.$modelValue;
			categoriasAPI.novaCategoria(categoria).then(function () {
				carregarCategorias();
				$.bootstrapGrowl('Categoria salva com sucesso!', {
					type: 'success',
					allow_dismiss: true
				});
			});
		});
	}

	$scope.editar = function (categoria) {
		var m = angular.copy(vm.modal);
		m.resolve = {
			categoria: function () {
				return angular.copy(categoria.$modelValue);
			}
		}
		var modalInstance = $uibModal.open(m);

		modalInstance.result.then(function (categoria) {
			categoriasAPI.atualizarCategoria(categoria).then(function () {
				carregarCategorias();
				$.bootstrapGrowl('Categoria atualizada com sucesso!', {
					type: 'success',
					allow_dismiss: true
				});
			});
		});

	}

	$scope.remover = function (categoria) {
		categoriasAPI.excluirCategoria(categoria.$modelValue.id).then(function () {
			carregarCategorias();
			$.bootstrapGrowl('Categoria excluída!', {
				type: 'success',
				allow_dismiss: true
			});
		});
	};

	$scope.toggle = function (scope) {
		scope.toggle();
	};

	$scope.fecharTudo = function () {
		$scope.$broadcast('angular-ui-tree:collapse-all');
	};

	$scope.expandirTudo = function () {
		$scope.$broadcast('angular-ui-tree:expand-all');
	};
	
});


