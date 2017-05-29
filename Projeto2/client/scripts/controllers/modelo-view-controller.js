angular.module('FerramentaProcesso').controller('ModeloViewController',function($scope, ModelosCollectionService) {
    $scope.nome = 'Teste';
    $scope.descricao = 'Exemplo';
    $scope.codigo = 0;
    $scope.modelos = ModelosCollectionService.getModelos();

    
});