angular.module('FerramentaProcesso').controller('CadastroModeloController', function ($scope, $http, ModelosCollectionService) {

	$scope.submeter = function () {
		if ($scope.form_1.$valid) {
			novo_modelo = {};
			novo_modelo['sigla'] = $scope.sigla_modelo;
			novo_modelo['nome'] = $scope.nome_modelo;
			novo_modelo['descricao'] = $scope.descricao_modelo;
			var uploadUrl = "/saveModelo";
			ModelosCollectionService.insertModelo($scope.sigla_modelo, $scope.nome_modelo, $scope.descricao_modelo, uploadUrl);
		} else {
			alert("Preencha o formulário corretamente");
		}  
	};

});