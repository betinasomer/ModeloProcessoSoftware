var app = angular.module('FerramentaProcesso');

//controller de cadastro do CATEGORIA
app.controller('CadastroCategoriaController', function ($scope, $http, CategoriaCollectionService, ModelosCollectionService) {
	$scope.selectModelo = function () {
		ModelosCollectionService.selectModelo('/getModelo').then(function () {
			$scope.modelos = ModelosCollectionService.getModelo();
			$scope.$applyAsync();
		});
	}
	$scope.submeterCategoria = function () {
		if ($scope.form_categoria.$valid) {
			var uploadUrl = "/saveCategoria";
			console.log('Botao submeter categoria');
			CategoriaCollectionService.insertCategoria($scope.nome_categoria, $scope.modeloM, uploadUrl);
			alert("Categoria cadastrada com sucesso!");
		} else {
			alert("Preencha o formulário corretamente");
		}
	};
});
//controller de visualizacao das CATEGORIAS
app.controller('CategoriaController', function ($scope, CategoriaCollectionService) {
	$scope.nome = 'Teste';
	$scope.modelo = '1';
	$scope.selectCategoria = function () {
		CategoriaCollectionService.selectCategoria('/getCategoria').then(function () {
			$scope.categorias = CategoriaCollectionService.getCategoria();
			$scope.$applyAsync();
		});
	}
	$scope.categorias = CategoriaCollectionService.getCategoria();
});














//Controle vizualizações do Produto Trabalho

app.controller('ProdutoTrabalhoController', ['$scope', 'fileUpload', 'ProdutoTrabalhoService', 'ModelosCollectionService', function ($scope, fileUpload, ProdutoTrabalhoService, ModelosCollectionService) {

	var modelo;

	$scope.uploadFile = function () {
		var file = $scope.myFile;
		var nome = $scope.nome;
		var uploadUrl = "/saveTamplate";
		fileUpload.uploadFileToUrl(file, nome, uploadUrl);
	};

	$scope.selectProdutoTrabalho = function () {

		ProdutoTrabalhoService.selectProdutoTrabalho('/getProdutoTrabalho').then(function () {
			$scope.selectModelo(ProdutoTrabalhoService.getProdutoTrabalho());
			//$scope.prodTRabalhos = ProdutoTrabalhoService.getProdutoTrabalho();

		})
	}
	$scope.selectModelo = function (produtoTrabalhoArray) {
		ModelosCollectionService.selectModelo('/getModelo').then(function () {
			$scope.acharNomeModelo(produtoTrabalhoArray, ModelosCollectionService.getModelo()).then(function () {
				$scope.prodTRabalhos = produtoTrabalhoArray;
				console.log($scope.prodTRabalhos)
				$scope.$applyAsync();
			});


		})
	}

	$scope.acharNomeModelo = function (produtoTrabalhoArray, modeloArray) {
		return new Promise(function (resolve, reject) {
			var x = 0;
			for (; x < produtoTrabalhoArray.length; x++) {
				for (var i = 0; i < modeloArray.length; i++) {
					if (produtoTrabalhoArray[x].id_modelo == modeloArray[i].id) {
						produtoTrabalhoArray[x].id_modelo = modeloArray[i].sigla;
						break;
					}
				}
			}
			resolve(produtoTrabalhoArray);
		})
	}

}]);

