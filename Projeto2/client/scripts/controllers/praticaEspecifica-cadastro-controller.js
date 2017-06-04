angular.module('FerramentaProcesso').controller('CadastroPraticaEspecifica', function ($scope, ProdutoTrabalhoService, PraticaEspecificaService, ModelosCollectionService) {

	$scope.iniciarController = function () {
		ProdutoTrabalhoService.selectProdutoTrabalho('/getProdutoTrabalho').then(function () {
			$scope.init().then(function () {
				$scope.prodTRabalhos = ProdutoTrabalhoService.getProdutoTrabalho();
				$scope.$applyAsync();
			})
		})
	}

	$scope.init = function () {
		return new Promise(function (resolve, reject) {
			ModelosCollectionService.selectModelo('/getModelo').then(function () {
				$scope.modelos = ModelosCollectionService.getModelo();
				resolve();
			})
		})
	}



	$scope.addPraticaEspecifica = function () {
		if ($scope.form_2.$valid) {
			nova_PraticaEspecifica = {};
			nova_PraticaEspecifica['sigla'] = $scope.sigla_pratica;
			nova_PraticaEspecifica['nome'] = $scope.nome_pratica;
			nova_PraticaEspecifica['descricao'] = $scope.descricao_pratica;
			nova_PraticaEspecifica['id_produto'] = $scope.selectProdutoTrabalho;
			nova_PraticaEspecifica['id_modelo'] = $scope.SelectModelo;
			PraticaEspecificaService.addPraticaEspecifica(nova_PraticaEspecifica, '/PraticaEspecifica').then(function () {
				alert("Pratica Especifica Cadastrado Com Sucesso!");
			})

		} else {
			alert("Preencha o formulário corretamente");
		}
	};
});