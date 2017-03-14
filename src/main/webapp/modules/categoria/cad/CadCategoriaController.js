'use strict';

angular.module('treasyApp').controller('CadCategoriaController', CadCategoriaController);

function CadCategoriaController($uibModalInstance, categoria) {
	var vm = this;
	vm.categoria = categoria;

	vm.ok = function () {
		$uibModalInstance.close(vm.categoria);
	};

	vm.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
};