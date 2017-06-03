var app = angular.module('FerramentaProcesso');

//controller de cadastro do CATEGORIA
app.controller('CadastroCategoriaController', function ($scope, $http, CategoriaCollectionService, ModelosCollectionService) {
	$scope.selectModelo = function(){
		ModelosCollectionService.selectModelo('/getModelo').then(function(){
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

