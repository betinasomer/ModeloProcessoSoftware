angular.module('ModeloProcessoSoftware').controller('MenuController', function($scope, $state) {
	$scope.irInicio=function(){
		$state.go("aplicacao_inicial");
	}
	$scope.irListagem=function(){
		$state.go("aplicacao_listagem");
	}
	$scope.irCadastro=function(){
		$state.go("aplicacao_cadastro");
	}
	$scope.irPrevisao=function(){
		$state.go("aplicacao_previsao");
	}
	
});