var app = angular.module('FerramentaProcesso');
app.service('NivelMaturidadeCollectionService', ['$http', function ($http) {

    var niveisMaturidade = [];
    this.selectNivelMaturidade = function (uploadUrl) {
        return new Promise(function (resolve, reject) {

            console.log('SelectNivelMaturidade no service');
            $http.get(uploadUrl, {
                data: 'niveisMaturidade',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                console.log(data);
                niveisMaturidade = [];
                for (var i = 0; i < data.length; i++) {
                    var objNivelMaturidade = {};
                    objNivelMaturidade['id'] = data[i].id ;
                    objNivelMaturidade['sigla'] = data[i].sigla;
                    objNivelMaturidade['id_modelo'] = data[i].id_modelo;
                    objNivelMaturidade['nome'] = data[i].nome;
                    objNivelMaturidade['descricao'] = data[i].descricao;
                    niveisMaturidade.push(objNivelMaturidade);
                }
                resolve();
            });
        })
    }
    this.getNiveisMaturidade = function () {
        console.log(niveisMaturidade);
        return niveisMaturidade;
    }

    this.insertNivelMaturidade = function (sigla, nome, descricao, modelo, uploadUrl) {
        var fd = new FormData();
        fd.append('sigla', sigla);
        fd.append('nome', nome);
        fd.append('descricao', descricao);
        fd.append('id_modelo', modelo);
        console.log(sigla);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
            .success(function (res) {
                alert('Inserido com sucesso');
            })
            .error(function (res) {
                alert('Erro ao inserir no banco o novo Nivel de Maturidade');
            });
    }
}]);