angular.module('FerramentaProcesso').controller('CadastroProdutoTrabalhoController', ['$scope', 'fileUpload', 'ModelosCollectionService', function ($scope, fileUpload, ModelosCollectionService) {

    $scope.uploadFile = function () {
        var file = $scope.myFile;
        var nome = $scope.nome;
        var id_modelo = $scope.SelectModelo;
        var uploadUrl = "/saveTamplate";
        fileUpload.uploadFileToUrl(file, nome, id_modelo, uploadUrl);
    }

    $scope.init = function () {
        ModelosCollectionService.selectModelo('/getModelo').then(function () {
            $scope.modelos = ModelosCollectionService.getModelo();
            $scope.$applyAsync();

        })
    }


}]);