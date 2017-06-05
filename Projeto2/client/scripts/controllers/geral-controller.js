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

app.controller('CadastroNivelCapacidadeController', function ($scope, $http, NivelCapacidadeCollectionService, ModelosCollectionService) {
	$scope.selectModelo = function () {
		ModelosCollectionService.selectModelo('/getModelo').then(function () {
			$scope.modelos = ModelosCollectionService.getModelo();
			$scope.$applyAsync();
		});
	}
	$scope.submeterNivelCapacidade = function () {
		if ($scope.form_nivelCapacidade.$valid) {
			var uploadUrl = "/saveNivelCapacidade";
			console.log('Botao submeter NivelCapacidade');
			NivelCapacidadeCollectionService.insertNiveisCapacidade($scope.sigla, $scope.nome, $scope.descricao, $scope.modelo, uploadUrl);
		} else {
			alert("Preencha o formulário corretamente");
		}
	};
})

app.controller('NivelCapacidadeController', function ($scope, NivelCapacidadeCollectionService) {
	$scope.selectNivelCapacidade = function () {
		NivelCapacidadeCollectionService.selectNiveisCapacidade('/getNivelCapacidade').then(function () {
			$scope.nivelCapacidade = NivelCapacidadeCollectionService.getNivelCapacidade();
			console.log($scope.nivelCapacidade);
			$scope.$applyAsync();
		})

	}
	$scope.nivelCapacidade = NivelCapacidadeCollectionService.getNivelCapacidade();
});

//Controller de vizualização do Meta Especifica
app.controller('metaEspecificaViewController', ['$scope', 'MetaEspecificaService', function ($scope, MetaEspecificaService) {

	$scope.selectMetaEspecifica = function () {
		MetaEspecificaService.selectMetaEspecifica('/metaEspecifica').then(function (data) {
			$scope.metas = MetaEspecificaService.getMetaEspecifica();
			$scope.$applyAsync();
		})
	};
}]);





//controller da vizualização da meta generica
app.controller('metaGenericaViewController', ['$scope', 'metaGenericaService', function ($scope, metaGenericaService) {
	$scope.selectMetaGenerica = function () {
		metaGenericaService.selectMetaGenerica('/metaGenerica').then(function (data) {
			$scope.metas = metaGenericaService.getMetaGenerica();
			$scope.$applyAsync();
		})
	}
}]);

//controller do cadastro da meta Especifica
app.controller('CadastrometaEspecifica', function ($scope, MetaEspecificaService, PraticaEspecificaService, ModelosCollectionService) {

	$scope.iniciarController = function () {
		PraticaEspecificaService.selectPraticaEspecifica('/PraticaEspecifica').then(function () {
			$scope.init().then(function () {
				$scope.praticaEspecificas = PraticaEspecificaService.getPraticaEspecifica();
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


	$scope.addmetaEspecifica = function () {
		if ($scope.form_2.$valid) {
			nova_meta = {};
			nova_meta['sigla'] = $scope.sigla_meta;
			nova_meta['nome'] = $scope.nome_meta;
			nova_meta['descricao'] = $scope.descricao_meta;
			nova_meta['id_pratica'] = $scope.selectPraticaEspecifica;
			console.log($scope.selectPraticaEspecifica)
			nova_meta['id_modelo'] = $scope.SelectModelo;
			MetaEspecificaService.insertMetaEspecifica(nova_meta, '/metaEspecifica').then(function () {
				alert("meta Especifica Cadastrado Com Sucesso!");
			})

		} else {
			alert("Preencha o formulário corretamente");
		}
	};

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