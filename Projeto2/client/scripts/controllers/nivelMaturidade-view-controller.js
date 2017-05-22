angular.module('FerramentaProcesso').controller('NivelMaturidadeViewController',function($scope, NivelMaturidadeCollectionService) {
    $scope.nome = 'Teste';
    $scope.descricao = 'Exemplo';
    $scope.sigla = '1';
    $scope.niveis = NivelMaturidadeCollectionService.getNiveis();    
});