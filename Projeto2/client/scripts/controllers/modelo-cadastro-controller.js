angular.module('FerramentaProcesso').controller('CadastroModeloController', function ($scope, ModelosCollectionService) {
    
    $scope.submeter = function() {
	if($scope.form_1.$valid) {
		novo_modelo = {};
		novo_modelo['nomeM'] = $scope.nome_modelo;
		novo_modelo['codM'] = parseInt($scope.cod_modelo);
        novo_modelo['descricaoM'] = $scope.descricao_modelo;
		novo_modelo['siglaM'] = $scope.sigla_modelo;
        ModelosCollectionService.adicionarModelo(novo_modelo);
		alert("Modelo cadastrado com sucesso!");

		//$scope.modelos.push(novo_modelo);
	} else {
		alert("Preencha o formulário corretamente");
	}
    };
});