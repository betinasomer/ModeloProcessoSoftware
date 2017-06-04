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
                    objCategoria['id'] = data[i].id;
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

app.service('NivelCapacidadeCollectionService', ['$http', function ($http) {
    var niveisCapacidade = [];
    this.getNivelCapacidade = function () {
        return niveisCapacidade;
    }
    this.selectNiveisCapacidade = function (uploadUrl) {
        return new Promise(function (resolve, reject) {
            console.log(niveisCapacidade);
            $http.get(uploadUrl, {
                data: 'niveisCapacidade',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                niveisCapacidade = [];
                for (var i = 0; i < data.length; i++) {
                    var objNivel = {};
                    objNivel['id'] = data[i].id;
                    objNivel['id_modelo'] = data[i].id_modelo;
                    objNivel['sigla'] = data[i].sigla;
                    objNivel['descricao'] = data[i].descricao;
                    objNivel['nome'] = data[i].nome;
                    niveisCapacidade.push(objNivel);
                }
                resolve();
            });
        })
    } 
    this.insertNiveisCapacidade = function (sigla, nome, descricao, modelo, uploadUrl) {
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
                alert('Erro ao inserir no banco o novo Nivel de Capacidade');
            });
    }
}]);



//Servicos dos produtos de trabalhos
app.service('ProdutoTrabalhoService', ['$http', function ($http) {

    produtoTrabalho = [];

    this.setProdutoTrabalho = function () {
        return produtoTrabalho;
    }

    this.getProdutoTrabalho = function () {
        return produtoTrabalho;
    }

    this.selectProdutoTrabalho = function (uploadUrl) {
        return new Promise(function (resolve, reject) {
            $http.get(uploadUrl, {
                data: 'produtoTrabalho',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                produtoTrabalho = [];
                for (var i = 0; i < data.length; i++) {
                    var objTrabalho = {};
                    objTrabalho['id'] = data[i].id;
                    objTrabalho['id_modelo'] = data[i].id_modelo;
                    objTrabalho['nome'] = data[i].nome;
                    produtoTrabalho.push(objTrabalho);
                }
                resolve();
            });
        })
    }


  


}]);


