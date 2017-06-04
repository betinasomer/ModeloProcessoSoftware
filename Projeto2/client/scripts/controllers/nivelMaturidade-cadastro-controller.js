var app = angular.module('FerramentaProcesso');

app.controller('CadastroNivelMaturidadeController', function ($scope, $http, NivelMaturidadeCollectionService,  ModelosCollectionService) {
   $scope.selectModelo = function () {
		ModelosCollectionService.selectModelo('/getModelo').then(function () {
			$scope.modelos = ModelosCollectionService.getModelo();
			$scope.$applyAsync();
		});
	}

    $scope.submeterMaturidade = function() {
	if($scope.form_maturidade.$valid) {
		var uploadUrl = "saveNivelMaturidade";
		console.log('Botao submeter Nivel Maturidade');
		NivelMaturidadeCollectionService.insertNivelMaturidade($scope.sigla_nivel, $scope.nome_nivel, $scope.descricao_nivel, $scope.modeloM, uploadUrl )
	} else {
		alert("Preencha o formulário corretamente");
	} 
    }; 
});