angular.module('FerramentaProcesso').service('ModelosCollectionService', ['$http', function ($http) {
    var modelos = [{ 'nomeM': 'CMMI', 'codM': 1, 'siglaM': 'CMMI', 'descricaoM': 'MODELO DE REFERENCIA NO PROCESSO DE SOFTWARE' }];

    this.getModelos = function () {
        return modelos;
    }

    this.adicionarModelo = function (modelo) {
        modelos.push(modelo);
    }
    
    this.insertModelo = function (sigla, nome, descricao, uploadUrl) {
        var fd = new FormData();
        fd.append('sigla', sigla);
        fd.append('nome',nome);
        fd.append('descricao', descricao);

        console.log(nome);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
            .success(function (res) {
                alert('inserido com sucesso');
            })
            .error(function (res) {
                alert('Erro ao inserir no banco o novo modelo');
            });
    }

}]);