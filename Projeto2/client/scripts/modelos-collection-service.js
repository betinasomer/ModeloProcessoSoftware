angular.module('FerramentaProcesso').service('ModelosCollectionService', function() {
    var modelos = [{'nomeM':'CMMI', 'codM':1, 'descricaoM':'1 MODELO DE TESTE'},
    {'nomeM':'MPS.BR', 'codM':2, 'descricaoM':'2 MODELO DE TESTE'}];

    this.getModelos = function(){
        return modelos;
    }

    this.adicionarModelo = function(modelo) {
        modelos.push(modelo);
    }
});