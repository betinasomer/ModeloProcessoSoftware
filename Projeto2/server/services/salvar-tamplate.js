var fs = require('fs');

var id = 0;

setID = function (id) {
    this.id = id;
}

salvarEmDisco = function (caminho, id) {
    var path_image = __dirname + '/server/upload/' + id + '.png';
    fs.rename(caminho, path_image, function (err) {
        // Exclui a foto da pasta temporária.
        fs.unlink(path_atual, function (err) {
            return true;
        });
    });
}

module.exports = { salvarEmDisco }