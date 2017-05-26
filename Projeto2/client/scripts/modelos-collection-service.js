angular.module('FerramentaProcesso').service('ModelosCollectionService', function() {
    var modelos = [{'nomeM':'Capability Maturity Model Integration', 'codM': 1, 'siglaM':'CMMI','descricaoM':'MODELO DE REFERENCIA NO PROCESSO DE SOFTWARE'}];

    this.getModelos = function(){
        return modelos;
    }

    this.adicionarModelo = function(modelo) {
        modelos.push(modelo);
    }
});