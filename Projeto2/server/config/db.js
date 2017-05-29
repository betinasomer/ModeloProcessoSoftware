
var mysql = require('mysql');


conexao = function () {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "modelos"
    });
}

fechaConexao = function (conexao) {
    conexao.end();
    conexao = null;
}

module.exports = { conexao, fechaConexao };