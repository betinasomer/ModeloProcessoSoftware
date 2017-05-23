angular.module('FerramentaProcesso').controller('MenuController', function($scope, $state){
    
    $scope.irInicio=function(){
		$state.go("aplicacao_inicial");
	}
	$scope.irCadastroModelo=function(){
		$state.go("aplicacao_cadastro_modelo");
	}
	$scope.irViewModelo=function(){
		$state.go("aplicacao_view_modelo");
	}
	$scope.irCadastroNivelMaturidade=function(){
		$state.go("aplicacao_cadastro_nivelmaturidade");
	}
	$scope.irViewNivelMaturidade=function(){
		$state.go("aplicacao_view_nivelMaturidade");
	}

});