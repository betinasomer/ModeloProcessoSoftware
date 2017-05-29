angular.module('FerramentaProcesso').controller('ModeloViewController',function($scope,$http, ModelosCollectionService) {
    $scope.nome = 'Teste';
    $scope.descricao = 'Exemplo';
    $scope.codigo = 0;
    $scope.modelos = ModelosCollectionService.getModelos();

    var refresh = function (){
        $http.get('/api/modelos')
            .success(function(data) {
                $scope.modelos = data;
                $scope.form_1 = {};
                console.log("Modelos: ", data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    refresh();
});