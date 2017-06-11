angular.module('FerramentaProcesso').service('NivelMaturidadeCollectionService', function() {
    var niveis = [{'nomeN':'Inicial', 'siglaN':'1', 'descricaoN':'', 'modelo': 1},
    {'nomeN':'Gerenciado', 'siglaN':'2', 'descricaoN':'', 'modelo': 1}];

    this.getNiveis = function(){
        return niveis;
    }

    this.adicionarNivel = function(nivelMaturidade) {
        niveis.push(nivelMaturidade);
    }
});