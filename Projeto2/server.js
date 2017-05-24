
// npm install express --save
var express = require('express');
var app = express();

// npm install mysql --save

var mysql = require('mysql');

//npm install body-parse --save
var bodyParser = require('body-parser');

connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "modelos"
});


app.post('/savedata', function (pedido, resposta) {
    bodyParser.json();
    var json = pedido.body;
    connection.connect(function (err) {
        if (err) {
            console.log('erro');
        }
    })
    console.log('Conectou ao Banco de dados');
    connection.query('insert into produtotrabalho(nome) VALUES(?)', json.nomeFile, function (err, res) {
        if (err) {
            console.log(err);
            resposta.sendStatus(404);
        } else {
            console.log('desconetou');
            connection.end();
        }
    })
    resposta.sendStatus(200);
})

app.use(express.static(__dirname + '/client'));

app.get('/', function (pedido, resposta) {
    resposta.sendFile(path.join(__dirname, '/client/index.html'));
});

app.set('port', 3000);

app.listen(app.get('port'), function () {
    console.log('Servidor online');
});

