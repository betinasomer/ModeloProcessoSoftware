angular.module('FerramentaProcesso').service('ModelosCollectionService', function() {
    var modelos = [{'nomeM':'CMMI', 'codM': 1, 'descricaoM':'MODELO DE REFERENCIA NO PROCESSO DE SOFTWARE'}];

    this.getModelos = function(){
        return modelos;
    }

    this.adicionarModelo = function(modelo) {
        modelos.push(modelo);
    }
});