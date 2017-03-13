treasyApp.controller('cadCategoriaCtrl', function($scope, $uibModalInstance, categoria) {

	$scope.categoria = categoria;

	$scope.ok = function() {
		$uibModalInstance.close($scope.categoria);
	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

});