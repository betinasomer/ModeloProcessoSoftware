angular.module('FerramentaProcesso').controller('PraticaEspeficicaController',function($scope, PraticaEspecificaService) {
    $scope.nome = 'Teste';
    $scope.descricao = 'Exemplo';
    $scope.sigla = '1';

    $scope.teste = function(){
        alert("teste");
    }

    $scope.niveis = 
    [{
        'meta': '1', 
        'siglaPratica' : 'BGS', 
        'nomePratica': 'Brasil Game Show', 
        'descricaoPratica': 'Todo mundo vai de azul'
    }];

});