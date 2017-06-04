angular.module('FerramentaProcesso').controller('CadastroPraticaEspecifica', function ($scope, ProdutoTrabalhoService, PraticaEspecificaService) {

	$scope.iniciarController = function () {
		ProdutoTrabalhoService.selectProdutoTrabalho('/getProdutoTrabalho').then(function () {
			console.log('aqui')
			$scope.prodTRabalhos = ProdutoTrabalhoService.getProdutoTrabalho();
			$scope.$applyAsync();
			console.log($scope.prodTRabalhos);
		})
	}

	$scope.addPraticaEspecifica = function () {
		if ($scope.form_2.$valid) {
			nova_PraticaEspecifica = {};
			nova_PraticaEspecifica['sigla'] = $scope.sigla_pratica;
			nova_PraticaEspecifica['nome'] = $scope.nome_pratica;
			nova_PraticaEspecifica['descricao'] = $scope.descricao_pratica;
			nova_PraticaEspecifica['id_produto'] = $scope.selectProdutoTrabalho;
			nova_PraticaEspecifica['id_modelo'] = 1;
			PraticaEspecificaService.addPraticaEspecifica(nova_PraticaEspecifica, '/PraticaEspecifica').then(function () {
				alert("Pratica Especifica Cadastrado Com Sucesso!");
			})

		} else {
			alert("Preencha o formulário corretamente");
		}
	};
});