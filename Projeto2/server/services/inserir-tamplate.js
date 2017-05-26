var db = require('../config/db.js');
var conexao = db.conexao();

inserirTamplateBanco = function (nome, lastID, caminho, fechaConexao) {
    conexao.connect(function (err) {
        if (err) {
            console.log('erro ao iniciar '+err);
        }
    });    
    conexao.query('INSERT INTO produtotrabalho(nome) VALUES(?)', nome, function (err, res) {
        
        if (err) {

        } else {
            db.fechaConexao(conexao);
            lastID(res.insertId, caminho);
        }
    });
    

    
};

module.exports = { inserirTamplateBanco };


