angular.module('FerramentaProcesso').service('PraticaEspecificaService', function() {
    var praticaEspecifica = [{'meta': '1', 'siglaPratica' : 'BGS', 'nomePratica': 'Brasil Game Show', 'descricaoPratica': 'Todo mundo vai de azul'}];

    this.setPraticaEspecifica = function() {
        return praticaEspecifica;
    }
    this.getPraticaEspecifica = function() {
        return praticaEspecifica;
    }
    this.addPraticaEspecifica = function(praticaEspecifica){
        praticaEspecifica.push(praticaEspecifica);
    }


})