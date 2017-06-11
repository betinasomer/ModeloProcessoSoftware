var express = require('express');
var app = express();
var path = require('path');
var multer = require('multer');



//var db_config = require('/server/config/database.js'),
var mysql = require('mysql'),
  //  connection = mysql.createConnection(db_config);
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "modelos"
  });


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/server/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.png')
  }
});

var upload = multer({ storage: storage });

var fs = require('fs');

app.set('port', 3000);

var router = express.Router();

app.use(express.static(__dirname + '/client'));

app.get('/', function (pedido, resposta) { resposta.sendFile(path.join(__dirname, '/client/index.html')); });


app.post('/savedata', upload.any(), function (pedido, resposta) {

 var json = pedido.body;
 
 console.log(json);
 
  
  
  connection.connect(function (err) {
    if (err) {
      console.log('erro');
    }
    console.log('conecto');
    connection.query('insert into produtotrabalho(nome) VALUES(?)', "pedido.body.get('nomeFile')", function (err, res) {
      if (err) {
        console.log(err);
      }
    })
  })

});


app.listen(app.get('port'), function () {
  console.log('Servidor online');
});

