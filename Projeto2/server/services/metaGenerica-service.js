var db = require('../config/db.js');
var conexao = db.conexao();

selectMetaGenerica = function () {
    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('SELECT * FROM meta_generica', function (err, res) {
            if (err) {

            } else {
                resolve(JSON.stringify(res));
            }
        });

    })

}

insertMeta = function (sigla, nome, descricao, id_produto, id_modelo) {
    
    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('INSERT INTO meta_especifica(sigla, nome, descricao, id_modelo, id_praticaespecifica) VALUES (?,?,?,?,?)', [sigla, nome, descricao, id_produto, id_modelo], function (err, res) {
            if (err) {
                console.log(err);
            } else {
                
                resolve();
            }
        });

    }
    )
}

module.exports = { selectMetaGenerica, insertMeta }