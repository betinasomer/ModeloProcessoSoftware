angular.module('FerramentaProcesso').controller('PraticaEspeficicaController', function ($scope, PraticaEspecificaService) {
    $scope.nome = 'Teste';
    $scope.descricao = 'Exemplo';
    $scope.sigla = '1';

    $scope.selectPraticaEspecifica = function () {
        PraticaEspecificaService.selectPraticaEspecifica('/PraticaEspecifica').then(function () {
            $scope.praticaEspecificas = PraticaEspecificaService.getPraticaEspecifica();
            console.log($scope.niveis)
            $scope.$applyAsync();
        });
    }

    $scope.praticaEspecificas = PraticaEspecificaService.getPraticaEspecifica();



});

