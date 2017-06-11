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

insertPratica = function (sigla, nome, descricao, id_produto, id_modelo) {
    console.log(sigla+','+ nome+','+ descricao+','+ id_produto+','+ id_modelo)
    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('INSERT INTO pratica_especifica(sigla, nome, descricao, id_modelo, id_produtotrabalho) VALUES (?,?,?,?,?)',[sigla,nome,descricao,id_produto,id_modelo], function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log('resolver')
                resolve();
            }
        });

    }
    )
}

module.exports = { selectPratica, insertPratica };


