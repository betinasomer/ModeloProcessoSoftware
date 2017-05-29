angular.module('FerramentaProcesso').controller('CadastroModeloController', function ($scope,$http, ModelosCollectionService) {
    
    $scope.submeter = function() {
	if($scope.form_1.$valid) {
		novo_modelo = {};
		novo_modelo['siglaM'] = $scope.sigla_modelo;
		novo_modelo['nomeM'] = $scope.nome_modelo;
        novo_modelo['descricaoM'] = $scope.descricao_modelo;
		ModelosCollectionService.insertModelo($scope.sigla_modelo, $scope.nome_modelo, $scope.descricao_modelo);
        ModelosCollectionService.adicionarModelo(novo_modelo);
		alert("Modelo cadastrado com sucesso!");

		//$scope.modelos.push(novo_modelo);
	} else {
		alert("Preencha o formulário corretamente");
	}
    };

});