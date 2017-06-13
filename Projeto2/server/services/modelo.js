var db = require('../config/db.js');
var conexao = db.conexao();

inserirModeloBanco = function (nome, sigla, descricao) {
    conexao.connect(function (err) {
        if (err) {
            console.log('Erro conexao para insercao do modelo no banco de dados');
        }
    });

    return conexao.query('INSERT INTO modelo(nome, sigla, descricao) VALUES(?,?,?)', [nome, sigla, descricao], function (err, res) {
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
};

selectModeloIdbanco = function ( idModelo ) {
    return new Promise(function (resolve, reject) {
        console.log('id selectmodeloidbanco '+ idModelo);
        console.log('SelectModeloIdbanco ')

        conexao.query('SELECT DISTINCT * FROM modelo WHERE id = ?',[idModelo], function (err, res) {
            if (err) { console.log('erro '+err); } else {
                console.log('resultado busca bando:'+JSON.stringify(res));
                resolve( res );
            }
        });
    })
};



module.exports = { inserirModeloBanco, selectModeloBanco, selectModelo, selectModeloIdbanco };