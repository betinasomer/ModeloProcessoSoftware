angular.module('FerramentaProcesso').controller('ModeloViewController',function($scope) {
    $scope.nome = 'Teste';
    $scope.descricao = 'Exemplo';

    $scope.modelos = [{'nomeM':'CMMI', 'codM':1, 'descricaoM':'1 MODELO DE TESTE'},
    {'nomeM':'MPS.BR', 'codM':2, 'descricaoM':'2 MODELO DE TESTE'}];

    $scope.submeter = function() {
	if($scope.novo_modelo.$valid) {
		novo_modelo = {};
		novo_modelo['nomeM'] = $scope.nome_modelo;
		novo_modelo['codM'] = parseInt($scope.cod_modelo);
        novo_modelo['descricaoM'] = $scope.descricao_modelo;
		$scope.modelos.push(novo_modelo);
	} else {
		alert("Preencha o formulário corretamente");
	}
    };
});