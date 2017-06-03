// npm install express --save
var express = require('express');
var app = express();
var salvarTamplate = require('./server/controllers/salvar-tamplate-con.js');
var praticaEspecifica = require('./server/controllers/praticaEspecifica-controller.js');

var modelo = require('./server/services/modelo.js');
var categoria = require('./server/services/categoria.js');

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
    let response = modelo.inserirModeloBanco(pedido.body.nome, pedido.body.sigla, pedido.body.descricao);
    console.log(response);
});

app.post('/saveCategoria', upload.any(), function(pedido, resposta){
    let response = categoria.inserirCategoriaBanco(pedido.body.nome, pedido.body.id_modelo);
});


app.get('/getPraticaEspecifica', function (pedido, resposta) {
    praticaEspecifica.selectPratica().then(function (res) {
        resposta.send(res); 
    })
});
app.get('/getModelo', function (pedido, resposta) {
    modelo.selectModelo().then(function (res) {
        resposta.send(res);
    })
});
app.get('/getCategoria', function(pedido, resposta){
    categoria.selectCategoria().then(function(res){
        resposta.send(res);
    })
})

app.use(express.static(__dirname + '/client'));

app.get('/', function (pedido, resposta) {
    resposta.sendFile(path.join(__dirname, '/client/index.html'));
});

app.set('port', 3000);

app.listen(app.get('port'), function () {
    console.log('Servidor online');
});

