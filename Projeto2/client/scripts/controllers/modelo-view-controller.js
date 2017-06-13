angular.module('FerramentaProcesso').controller('ModeloViewController',function($scope, $state, $http, ModelosCollectionService) {
  
    $scope.selectModelo = function(){
        ModelosCollectionService.selectModelo('/getModelo').then(function(){
            $scope.modelos = ModelosCollectionService.getModelo();
            $scope.$applyAsync();
        })
    } 
    $scope.modelos = ModelosCollectionService.getModelo();

    $scope.modelo = ModelosCollectionService.getModeloID(); 
    $scope.detalhesModelo = function(idModelo){
        console.log(idModelo);
        ModelosCollectionService.selectModeloId(idModelo).then(function( args ){
            $scope.modelo = args.modelo();
            $scope.$applyAsync();
            $state.go("aplicacao_visualizacaogeral");
            $scope.visualizarModelo();
            console.log($scope.modelo);
        }) 
    }
    $scope.visualizarModelo = function(){
        $scope.modelo = ModelosCollectionService.getModeloID();
    }
    $scope.modelo = ModelosCollectionService.getModeloID();

    $scope.imprimirPagina = function () {
		var btn_print = document.querySelector('#modelo-print');
		btn_print.addEventListener('click', function () { print(); })
	}
});