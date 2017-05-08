angular.module('ModeloProcessoSoftware').controller('PrimeiroController', function($scope, $filter, AlunosCollectionService){
	$scope.nome = 'Betina Somer';
	var nome = "Daniel Krug";
	
	$scope.iniciado = true;
	
	$scope.alunos = AlunosCollectionService.getAlunos();
				 
	$scope.hoje = new Date();
	
	$scope.finalizar = function(){
		$scope.iniciado = false;
	};
	
	$scope.iniciar = function(){
		$scope.iniciado = true;
	};
	
	$scope.ordenarPorNome = function(){
		AlunosCollectionService.ordenarPorNome();
		$scope.alunos = AlunosCollectionService.getAlunos();
	};
	
	$scope.ordenarPorIdade = function(){
		AlunosCollectionService.ordenarPorIdade();
		$scope.alunos = AlunosCollectionService.getAlunos();
	};
	
});