angular.module('FerramentaProcesso').controller('CadastroNivelMaturidadeController', function ($scope, NivelMaturidadeCollectionService) {
    $scope.submeterMaturidade = function() {
	if($scope.form_2.$valid) {
		novo_nivelMaturidade = {};
		novo_nivelMaturidade['siglaN'] = $scope.sigla_nivel;
		novo_nivelMaturidade['nomeN'] = $scope.nome_nivel;
        novo_nivelMaturidade['descricaoN'] = $scope.descricao_nivel;
        novo_nivelMaturidade['modelo'] = $scope.modelo;
        NivelMaturidadeCollectionService.adicionarNivel(novo_nivelMaturidade);
		alert("Nivel de maturidade cadastrado com sucesso!");
	} else {
		alert("Preencha o formulário corretamente");
	}
    };
});