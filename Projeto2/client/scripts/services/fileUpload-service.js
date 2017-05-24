angular.module('appDeCadastros').service('fileUpload', ['$http', function ($http) {
    
    this.uploadFileToUrl = function (file, nome, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);
        fd.append('nomeFile',nome);
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