angular.module('FerramentaProcesso').service('PraticaEspecificaService', ['$http', function ($http) {
    var praticaEspecifica = [];

    this.setPraticaEspecifica = function () {
        return praticaEspecifica;
    }

    this.getPraticaEspecifica = function () {
        return praticaEspecifica;
    }

    this.selectPraticaEspecifica = function (uploadUrl) {
        return new Promise(function (resolve, reject) {
            $http.post(uploadUrl, {
                data: 'praticaEspecifica',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function (data) {
                praticaEspecifica = [];
                for (var i = 0; i < data.length; i++) {
                    var objPratica = {};
                    objPratica['id'] = data[i].id
                    objPratica['descricao'] = data[i].descricao;
                    objPratica['id_modelo'] = data[i].id_modelo;
                    objPratica['id_produtotrabalho'] = data[i].id_produtotrabalho;
                    objPratica['nome'] = data[i].nome;
                    objPratica['sigla'] = data[i].sigla;
                    praticaEspecifica.push(objPratica);
                }                
                resolve();
            });
        })
    }

    
    this.addPraticaEspecifica = function (praticaEspecifica, uploadUrl) {
        //        praticaEspecifica.push(praticaEspecifica);

        $http.post(uploadUrl, {
            data: praticaEspecifica,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).success(function (data) {
            alert(data);
        });
    }


}]);