var db = require('../config/db.js');
var conexao = db.conexao();

inserirNivelMaturidadeBanco = function (sigla, nome, descricao, id_modelo) {
    console.log('funcao inserir nivel maturidade do services/nivelMaturidade');
    //INSERT INTO nivel_maturidade(sigla, nome, descricao, id_modelo) VALUES (
    return conexao.query('INSERT INTO nivel_maturidade(sigla, nome, descricao, id_modelo) VALUES (?,?,?,?)', [sigla, nome,descricao, id_modelo], function (err, res) {
        
    }); 
};
selectNivelMaturidadeBanco = function () {
    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('SELECT * FROM nivel_maturidade', function (err, res) {
            if (err) {
            } else {
                console.log(res);
                resolve(JSON.stringify(res));
            }
        });
    })
};

selectNivelMaturidade = function () {
    return new Promise(function (resolve, reject) {
        this.selectNivelMaturidadeBanco().then(function (res, rej) {
            resolve(res);
        });
    })
}

selectNiveisByModelo = function ( idModelo ) {
    return new Promise(function (resolve, reject) {
        conexao.query('SELECT DISTINCT * FROM nivel_maturidade WHERE id_modelo = ?', [ idModelo ], function (err, res) {
            if (err) { console.log('erro '+err); } else {
                resolve( res );
            }
        });
    })
};

module.exports = { inserirNivelMaturidadeBanco, selectNivelMaturidadeBanco, selectNivelMaturidade, selectNiveisByModelo};