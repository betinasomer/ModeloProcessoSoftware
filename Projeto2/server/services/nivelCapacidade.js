var db = require('../config/db.js');
var conexao = db.conexao();

inserirNivelCapacidadeBanco = function (sigla, nome, descricao, id_modelo) {
    conexao.connect(function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log('funcao inserir nivel capacidade do services/nivelCapacidade');
    return conexao.query('INSERT INTO nivel_capacidade(sigla, nome, descricao, id_modelo) VALUES (?,?,?,?)', [sigla, nome,descricao, id_modelo], function (err, res) {
        return res;
    });  
};
selectNivelCapacidadeBanco = function () {
    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('SELECT * FROM nivel_capacidade', function (err, res) {
            if (err) {
            } else {
                console.log(res);
                resolve(JSON.stringify(res));
            }
        });
    })
};

selectNivelCapacidade = function () {
    return new Promise(function (resolve, reject) {
        this.selectNivelCapacidadeBanco().then(function (res, rej) {
            resolve(res);
        });
    })
}
module.exports = { inserirNivelCapacidadeBanco, selectNivelCapacidadeBanco, selectNivelCapacidade};