var metaGenerica = require('../services/metaGenerica-service.js');


selectMetaGenerica = function () {
    return new Promise(function (resolve, reject) {
        metaGenerica.selectMetaGenerica().then(function (data) {
            resolve(data);
        })

    })
}



insertMeta = function (meta) {
    return new Promise(function (resolve, reject) {
        console.log(meta.id_nivelcapacidade)
        metaGenerica.insertMeta(meta.sigla, meta.nome, meta.descricao, meta.id_nivelcapacidade, meta.id_modelo).then(function () {
            resolve();
        });
    })
}



module.exports = { selectMetaGenerica, insertMeta }