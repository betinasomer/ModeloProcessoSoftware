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
        fd.append('nome', nome);
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

//Serviço da meta Generica
app.service('metaGenericaService', ['$http', function ($http) {
    metaGenerica = [];

    this.getMetaGenerica = function () {
        return metaGenerica;
    }

    this.selectMetaGenerica = function (uploadUrl) {
        return new Promise(function (resolve, reject) {
            $http.get(uploadUrl, {
                data: 'metaEspecifica',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                console.log(data)
                metaGenerica = [];
                for (var i = 0; i < data.length; i++) {
                    var objMetaGenerica = {};
                    objMetaGenerica['descricao'] = data[i].descricao;
                    objMetaGenerica['id'] = data[i].id;
                    objMetaGenerica['id_modelo'] = data[i].id_modelo;
                    objMetaGenerica['id_nivelcapacidade'] = data[i].id_nivelcapacidade;
                    objMetaGenerica['nome'] = data[i].nome;
                    objMetaGenerica['sigla'] = data[i].sigla;

                    metaGenerica.push(objMetaGenerica);
                }
                resolve();
            })
        })
    }

    this.insertMegaGenerica = function (meta, uploadUrl) {

        return new Promise(function (resolve, reject) {
            $http.post(uploadUrl, {
                data: meta,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                resolve();
            })
        })
    }


}]);


//Serviço da meta especifica

app.service('MetaEspecificaService', ['$http', function ($http) {
    metaEspecifica = [];

    this.getMetaEspecifica = function () {
        return metaEspecifica;
    }

    this.selectMetaEspecifica = function (uploadUrl) {
        return new Promise(function (resolve, reject) {
            $http.get(uploadUrl, {
                data: 'MetaEspecifica',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                console.log('meta especifica' + data)
                metaEspecifica = [];
                for (var i = 0; i < data.length; i++) {
                    var objMetaEspecifica = {};
                    objMetaEspecifica['descricao'] = data[i].descricao;
                    objMetaEspecifica['id'] = data[i].id;
                    objMetaEspecifica['id_modelo'] = data[i].id_modelo;
                    objMetaEspecifica['id_praticaespecifica'] = data[i].id_praticaespecifica;
                    objMetaEspecifica['nome'] = data[i].nome;
                    objMetaEspecifica['sigla'] = data[i].sigla;

                    metaEspecifica.push(objMetaEspecifica);
                }

                resolve();
            })
        })
    }




    this.insertMetaEspecifica = function (meta, uploadUrl) {
        return new Promise(function (resolve, reject) {
            $http.post(uploadUrl, {
                data: meta,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                resolve();
            })


        })
    }


}]);

app.service('areaProcessoService', ['$http', function ($http) {

    areaProcesso = []

    this.getAreaProcesso = function () {
        return areaProcesso;
    }
    this.insertAreaProcesso = function (area, uploadUrl) {
        return new Promise(function (resolve, reject) {
            $http.post(uploadUrl, {
                data: area,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                resolve();
            })
        })
    }

    this.selectAreaProcesso = function (uploadUrl) {
        return new Promise(function (resolve, reject) {
            $http.get(uploadUrl, {
                data: 'areaProcesso',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                console.log('areaProcesso' + data)
                areaProcesso = [];
                for (var i = 0; i < data.length; i++) {
                    var objareaProcesso = {};
                    objareaProcesso['id'] = data[i].id;
                    objareaProcesso['sigla'] = data[i].sigla;
                    objareaProcesso['nome'] = data[i].nome;
                    objareaProcesso['descricao'] = data[i].descricao;
                    objareaProcesso['id_modelo'] = data[i].id_modelo;
                    objareaProcesso['id_categoria'] = data[i].id_categoria;
                    objareaProcesso['id_nivelmaturidade'] = data[i].id_nivelmaturidade;
                    objareaProcesso['id_categoria'] = data[i].id_categoria;
                    objareaProcesso['id_metaespecifica'] = data[i].id_metaespecifica;
                    areaProcesso.push(objareaProcesso);
                }

                resolve();
            })
        })
    }



}])


