var salvarTamplate = require('../services/inserir-tamplate.js');
var gravarArquivo = require('../services/salvar-tamplate.js');



salvarTamplateCompleto = function (nomeFile, caminho) {
    console.log(" " + nomeFile + " " + caminho);
    var id = salvarTamplate.inserirTamplateBanco(nomeFile);
    console.log("ID inserido com susseso " + id)
    return true;
    //gravarArquivo.salvarEmDisco(caminho, id);

}

module.exports = { salvarTamplateCompleto }
