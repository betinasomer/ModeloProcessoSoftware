var db = require('../config/db.js');
var conexao = db.conexao();

insertArea = function (sigla, nome, descricao, id_categoria, id_modelo, id_nivelmaturidade, id_metaespecifica) {

    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('INSERT INTO area_processo(sigla ,nome ,descricao,id_modelo,id_categoria,id_nivelmaturidade,id_metaespecifica) VALUES(?,?,?,?,?,?,?)', [sigla, nome, descricao, id_categoria, id_modelo, id_nivelmaturidade, id_metaespecifica], function (err, res) {

            if (err) {
                console.log(err)
            } else {
                resolve();
            }
        });
    })
};



selectArea = function () {
    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('SELECT * FROM area_processo', function (err, res) {
            if (err) {
            } else {
                resolve(JSON.stringify(res));
            }
        });
    })
}


module.exports = { insertArea, selectArea };