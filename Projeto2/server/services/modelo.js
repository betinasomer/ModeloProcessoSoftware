var db = require('../config/db.js');
var conexao = db.conexao();

inserirModeloBanco = function (nome, sigla, descricao) {
    conexao.connect(function (err) {
        if (err) {
            console.log(err);
        }
    });

    //INSERT INTO modelo (nome, sigla, descricao) VALUES 
    return conexao.query('INSERT INTO modelo(nome, sigla, descricao) VALUES(?,?,?)', [nome, sigla, descricao], function (err, res) {
        db.fechaConexao(conexao);
        return res;
    });
};
selectModeloBanco = function () {
    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('SELECT * FROM modelo', function (err, res) {
            if (err) {
            } else {
                resolve(JSON.stringify(res));
            }
        });
    })
};

selectModelo = function () {
    return new Promise(function (resolve, reject) {
        this.selectModeloBanco().then(function (res, rej) {
            resolve(res);
        });
    })
}
module.exports = { inserirModeloBanco, selectModeloBanco, selectModelo };