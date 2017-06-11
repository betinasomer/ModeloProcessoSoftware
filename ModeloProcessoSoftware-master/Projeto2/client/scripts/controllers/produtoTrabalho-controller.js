angular.module('FerramentaProcesso').controller('ProdutoTrabalhoController', ['$scope', 'fileUpload', 'ProdutoTrabalhoService', function ($scope, fileUpload, ProdutoTrabalhoService) {
    

    $scope.uploadFile = function () {
        var file = $scope.myFile;
        var nome = $scope.nome;
        var uploadUrl = "/saveTamplate";
        fileUpload.uploadFileToUrl(file, nome, uploadUrl);
    };

    $scope.selectProdutoTrabalho = function () {
        ProdutoTrabalhoService.selectProdutoTrabalho('/getProdutoTrabalho').then(function () {            
            $scope.prodTRabalhos = ProdutoTrabalhoService.getProdutoTrabalho();
            $scope.$applyAsync();
        })


    }

}]);