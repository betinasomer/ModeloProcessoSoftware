// npm install express --save
var express = require('express');
var app = express();
var salvarTamplate = require('./server/controllers/salvar-tamplate-con.js');
var praticaEspecifica = require('./server/controllers/praticaEspecifica-controller.js');
var salvarModelo = require('./server/services/inserir-modelo.js')
var caminho = __dirname + '/server/upload/temp/';
var bodyParser = require('body-parser');
var multer = require('multer');
var http = require("http");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, caminho)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage });


app.post('/saveTamplate', upload.any(), function (pedido, resposta) {
    console.log(salvarTamplate.salvarTamplateCompleto(pedido.body.nomeFile, pedido.body.idPratica, caminho + pedido.files[0].originalname));

    var insert = true;
    if (insert) {
        resposta.sendStatus(200);
    } else {
        resposta.sendStatus(404);
    }
})

app.post('/saveModelo', upload.any(), function (pedido, resposta) {
    let response = salvarModelo.inserirModeloBanco(pedido.body.nome, pedido.body.sigla, pedido.body.descricao);
    console.log(response);
    var insert = true;
    if (insert) {
        resposta.sendStatus(200);
    } else {
        resposta.sendStatus(404);
    }
});

app.post('/getPraticaEspecifica', function (pedido, resposta) {
    praticaEspecifica.selectPratica().then(function (res) {
        resposta.send(res);
    })
});


app.use(express.static(__dirname + '/client'));

app.get('/', function (pedido, resposta) {
    resposta.sendFile(path.join(__dirname, '/client/index.html'));
});

app.set('port', 3000);

app.listen(app.get('port'), function () {
    console.log('Servidor online');
});

