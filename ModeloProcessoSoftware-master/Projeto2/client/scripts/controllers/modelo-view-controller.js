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
        ModelosCollectionService.selectModeloId(idModelo).then(function(){
            $scope.modelo = ModelosCollectionService.getModeloID();
            $scope.$applyAsync();
            $state.go("aplicacao_visualizacaogeral");
            $scope.visualizarModelo();
        }) 
    }
    $scope.visualizarModelo = function(){
        $scope.modelo = ModelosCollectionService.getModeloID();
    }
    $scope.modelo = ModelosCollectionService.getModeloID();
});