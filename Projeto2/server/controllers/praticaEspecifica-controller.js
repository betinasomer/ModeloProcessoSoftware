var praticaEspecifica = require('../services/praticaEspecifica-services.js');


selectPratica = function () {
    return new Promise(function (resolve, reject) {
        praticaEspecifica.selectPratica().then(function (res, rej) {
            resolve(res);
        });
    })
}

insertPratica = function (pratica) {
    console.log(pratica);
    return new Promise(function (resolve, reject) {
        praticaEspecifica.insertPratica(pratica.sigla, pratica.nome, pratica.descricao, pratica.id_produto, pratica.id_modelo).then(function () {
            resolve();
        });
    })
}





module.exports = { selectPratica, insertPratica }