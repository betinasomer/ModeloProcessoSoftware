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
        conexao.query('SELECT  a.id, a.sigla, a.nome, a.descricao, a.id_modelo, m.sigla as sigla_modelo, a.id_categoria, c.nome AS nome_categoria, a.id_nivelmaturidade, n.nome AS nome_maturidade,  a.id_metaespecifica, e.nome AS nome_metaEspecifica from area_processo a INNER JOIN modelo m on (a.id_modelo = m.id) INNER JOIN categoria c on(a.id_categoria = c.id) INNER JOIN nivel_maturidade n on (a.id_nivelmaturidade = n.id) INNER JOIN meta_especifica e on (a.id_metaespecifica = e.id) ', function (err, res) {
            if (err) {
                console.log(err)
            } else {
                console.log(res)
                resolve(JSON.stringify(res));
            }
        });
    })
}

updateArea = function (id, sigla, nome, descricao, id_categoria, id_modelo, id_nivelmaturidade, id_metaespecifica) {

    return new Promise(function (resolve, reject) {
        conexao.connect(function (err) {
            if (err) {
                console.log('erro ao iniciar ' + err);
            }
        });
        conexao.query('UPDATE area_processo SET sigla = ?, nome = ?, descricao = ?, id_modelo = ?, id_categoria = ?, id_nivelmaturidade = ?, id_metaespecifica = ? WHERE id = ?;', [sigla, nome, descricao, id_modelo, id_categoria, id_nivelmaturidade, id_metaespecifica, id], function (err, res) {
            if (err) {
                console.log(err)
            } else {
                resolve();
            }
        });
    })
}

module.exports = { insertArea, selectArea, updateArea };