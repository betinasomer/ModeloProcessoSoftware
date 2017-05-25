// npm install express --save
var express = require('express');
var app = express();
var salvarTamplate = require('./server/controllers/salvar-tamplate-con.js');
var caminho = __dirname + '/server/upload/temp';
//var caminho = 'd:/';
var bodyParser = require('body-parser');

var multer = require('multer')

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
    console.log(pedido.body.nomeFile);
    console.log(caminho)

    console.log(salvarTamplate.salvarTamplateCompleto(pedido.body.nomeFile, caminho));

    var insert = true;
    if (insert) {
        resposta.sendStatus(200);
    } else {
        resposta.sendStatus(404);
    }
})

app.use(express.static(__dirname + '/client'));

app.get('/', function (pedido, resposta) {
    resposta.sendFile(path.join(__dirname, '/client/index.html'));
});

app.set('port', 3000);

app.listen(app.get('port'), function () {
    console.log('Servidor online');
});

