var app = angular.module('FerramentaProcesso');

app.service('CategoriaCollectionService', ['$http', function ($http) {
    var categorias = [];
    this.getCategoria = function () {
        return categorias;
    }
    this.selectCategoria = function (uploadUrl) {
        return new Promise(function (resolve, reject) {
            $http.get(uploadUrl, {
                data: 'categorias',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                categorias = [];
                for (var i = 0; i < data.length; i++) {
                    var objCategoria = {};
                    objCategoria['id'] = data[i].id
                    objCategoria['id_modelo'] = data[i].id_modelo;
                    objCategoria['nome'] = data[i].nome;
                    categorias.push(objCategoria);
                }
                resolve();
            });
        })
    } 
    this.insertCategoria = function (nome, modelo, uploadUrl) {
        var fd = new FormData();
        fd.append('nome',nome);
        fd.append('id_modelo', modelo);
        console.log(nome);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
            .success(function (res) {
                alert('Inserido com sucesso');
            })
            .error(function (res) {
                alert('Erro ao inserir no banco a nova categoria');
            });
    }
}]);