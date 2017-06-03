var db = require('../config/db.js');
var conexao = db.conexao();

inserirCategoriaBanco = function (nome, id_modelo) {
    conexao.connect(function (err) {
        if (err) {
            console.log(err);
        }
    });
    return conexao.query('INSERT INTO categoria(nome, id_modelo) VALUES(?,?)', [nome, id_modelo], function (err, res) {
        return res;
    });
};
selectCategoriaBanco = function () {
    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('SELECT * FROM categoria', function (err, res) {
            if (err) {
            } else {
                resolve(JSON.stringify(res));
            }
        });
    })
};

selectCategoria = function () {
    return new Promise(function (resolve, reject) {
        this.selectCategoriaBanco().then(function (res, rej) {
            resolve(res);
        });
    })
}
module.exports = { inserirCategoriaBanco, selectCategoriaBanco, selectCategoria};