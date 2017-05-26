var db = require('../config/db.js');
var conexao = db.conexao();


inserirTamplateBanco = function (nome) {
    
    conexao.connect(function (err) {
        if (err) {

            console.log(err);
        }
    });
    conexao.query('INSERT INTO produto_trabalho(nome) VALUES(?)', nome, function (err, res) {
        db.fechaConexao(conexao);
        var id = res.insertId;
    });
    return id;
};

module.exports = { inserirTamplateBanco };