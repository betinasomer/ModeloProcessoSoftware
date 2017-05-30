angular.module('FerramentaProcesso').controller('CadastroProdutoTrabalhoController', ['$scope', 'fileUpload', function ($scope, fileUpload) {
    $scope.uploadFile = function () {
        var file = $scope.myFile;
        var nome = $scope.nome;
        var uploadUrl = "/saveTamplate"; 
        fileUpload.uploadFileToUrl(file, nome, uploadUrl);
    };
}]);