var modelo = require('../services/modelo.js');
var nivelMaturidade = require('../services/nivelMaturidade.js');

selectModeloId = function (idModelo) {
    return new Promise(function (resolve, reject) {
        modelo.selectModeloIdbanco(idModelo).then(function (res, rej) {
            console.log(res);
            
        });
    })
};

selectNiveisById = function (idModelo) {
    return new Promise(function (resolve, reject) {
        nivelMaturidade.selectNiveisByModelo(idModelo).then(function (res, rej) {
             resolve(res);            
        });
    });
};

module.exports = { selectModeloId, selectNiveisById }