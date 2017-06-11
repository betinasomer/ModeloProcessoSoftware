var metaEspecifica = require('../services/metaEspecifica-service.js');


selectMetaEspecifica = function () {
    return new Promise(function (resolve, reject) {
        metaEspecifica.selectMetaEspecifica().then(function (data) {
            resolve(data);
        })

    })
}



insertMeta = function (meta) {
    return new Promise(function (resolve, reject) {
        
        metaEspecifica.insertMeta(meta.sigla, meta.nome, meta.descricao, meta.id_pratica, meta.id_modelo).then(function () {
            resolve();
        });
    })
}



module.exports = { selectMetaEspecifica, insertMeta }