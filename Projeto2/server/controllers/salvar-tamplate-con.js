var salvarTamplate = require('../services/inserir-tamplate.js');
var gravarArquivo = require('../services/salvar-tamplate.js');
var id = 0;

salvarTamplateCompleto = function (nomeFile, idpratica, caminho) {
    id = 0;
    salvarTamplate.inserirTamplateBanco(nomeFile, idpratica, callback, caminho);

}


function callback(num, caminho) {
    this.id = num;
    console.log(num);
    gravarArquivo.salvarEmDisco(caminho, this.id);
}





module.exports = { salvarTamplateCompleto }
