angular.module('FerramentaProcesso').controller('ModeloViewController',function($scope,$http, ModelosCollectionService) {
    $scope.nome = 'Teste';
    $scope.descricao = 'Exemplo';
    $scope.sigla = '';
    
    $scope.selectModelo = function(){
        ModelosCollectionService.selectModelo('/getModelo').then(function(){
            $scope.modelos = ModelosCollectionService.getModelo();
            $scope.$applyAsync();
        })
    } 
    $scope.modelos = ModelosCollectionService.getModelo();
});