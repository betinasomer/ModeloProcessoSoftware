
var mysql = require('mysql');


conexao = function () {
    return mysql.createConnection({
        host: "http://mysql.talentodigital.com.br",
        user: "talentodigital",
        password: "xx123456",
        database: "talentodigital"
    });
}

fechaConexao = function (conexao) {
    conexao.end();
}

module.exports = { conexao, fechaConexao };