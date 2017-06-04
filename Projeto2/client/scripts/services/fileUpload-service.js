angular.module('FerramentaProcesso').service('fileUpload', ['$http', function ($http) {

    this.uploadFileToUrl = function (file, nome, id_modelo, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);
        fd.append('nomeFile', nome);
        fd.append('idModelo', id_modelo);
        console.log(nome);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
            .success(function (res) {
                alert('inserido com sucesso');
            })
            .error(function () {
                alert('Erro');
            });
    }
}]);