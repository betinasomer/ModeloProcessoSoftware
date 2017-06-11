angular.module('FerramentaProcesso').service('ProdutoTrabalhoService', ['$http', function ($http) {

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


