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
}

module.exports = { inserirModeloBanco };