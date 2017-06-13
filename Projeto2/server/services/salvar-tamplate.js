var fs = require('fs');

var id = 0;

setID = function (id) {
    this.id = id;
}

salvarEmDisco = function (caminho, id) {
    console.log("CAMINHO : "+caminho);
    console.log('esse id'+id);
    var path_image = 'D:\\Repositorios\\ModeloProcessoSoftware\\Projeto2\\server\\upload\\' + id + '.docx';
    console.log("DESTINO : " +path_image);
    fs.rename(caminho, path_image, function (err) {
         //Exclui a foto da pasta temporária.
        fs.unlink(caminho, function (err) {
            return true;
        });
    });
}

module.exports = { salvarEmDisco }