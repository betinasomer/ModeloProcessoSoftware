var praticaEspecifica = require('../services/praticaEspecifica-services.js');


selectPratica = function () {
    return new Promise(function (resolve, reject) {
        praticaEspecifica.selectPratica().then(function (res, rej) {
            resolve(res);
        });
    })
}







module.exports = { selectPratica }