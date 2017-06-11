var db = require('../config/db.js');
var conexao = db.conexao();

inserirTamplateBanco = function (nome, idPratica, lastID, caminho) {
    conexao.connect(function (err) {
        if (err) {
            console.log('erro ao iniciar ' + err);
        }
    });
    conexao.query('INSERT INTO produto_trabalho(nome,id_modelo) VALUES(?,?)', [nome, idPratica], function (err, res) {

        if (err) {

        } else {
            lastID(res.insertId, caminho);
        }
    });
};

selectTamplateBanco = function () {
    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('SELECT * FROM produto_trabalho', function (err, res) {
            if (err) {

            } else {
                
                resolve(JSON.stringify(res));
            }
        });

    }
    )


};

module.exports = { inserirTamplateBanco, selectTamplateBanco };


