var db = require('../config/db.js');
var conexao = db.conexao();

inserirModeloBanco = function (nome, sigla, descricao) {
    conexao.connect(function (err) {
        if (err) {
            console.log(err);
        }
    });

    //INSERT INTO modelo (nome, sigla, descricao) VALUES 
    let callback = function (ret) {
        return ret;
    }
    return conexao.query('INSERT INTO modelo(nome, sigla, descricao) VALUES(?,?,?)', nome, sigla, descricao, function (err, res, callback) {
        db.fechaConexao(conexao);
        return callback(res.insertId)
    })
}

module.exports = { inserirModeloBanco };