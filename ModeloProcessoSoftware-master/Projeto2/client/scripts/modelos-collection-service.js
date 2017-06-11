angular.module('FerramentaProcesso').service('ModelosCollectionService', ['$http', function ($http) {
    var modelos= [];
    this.getModelo = function () {
        return modelos;
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

    this.selectModelo = function (uploadUrl) {
        console.log('service modelo Select Modelo');
        return new Promise(function (resolve, reject) {
            $http.get(uploadUrl, {
                data: 'modelos',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                modelos = [];
                for (var i = 0; i < data.length; i++) {
                    var objModelo = {};
                    objModelo['id'] = data[i].id
                    objModelo['nome'] = data[i].nome;
                    objModelo['sigla'] = data[i].sigla;
                    objModelo['descricao'] = data[i].descricao;
                    modelos.push(objModelo);
                }
                resolve();
            });
        })
    }

    var modelo;
    var detalhes = [];
    this.selectModeloId = function (idModelo){
        console.log('Select ModeloID CollectionService '+idModelo);
        return new Promise(function (resolve, reject) {
            $http.post('/modelo', {
                data: {idModelo},
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                modelo = data;
                console.log('Resultado busca modelo '+modelo);
                detalhes = [];
                detalhes.push(modelo);
                console.log('Array de detalhes '+detalhes);
                resolve();
            })
        })
    }

    this.getModeloID = function(){
        console.log('Funcao getModeloID: '+modelo);
        return modelo;
    }
}]);