var db = require('../config/db.js');
var conexao = db.conexao();

selectPratica = function () {
    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('SELECT * FROM pratica_especifica', function (err, res) {
            if (err) {

            } else {
                resolve(JSON.stringify(res));
            }
        });

    }
    )


};

module.exports = { selectPratica };


