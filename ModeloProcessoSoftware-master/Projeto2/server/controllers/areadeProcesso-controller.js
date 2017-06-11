var serviceArea = require('../services/areadeProcesso-service.js')




insertArea = function (area) {
    return new Promise(function (resolve, reject) {
        serviceArea.insertArea(area.sigla, area.nome, area.descricao, area.id_categoria, area.id_modelo, area.id_nivelmaturidade, area.id_metaespecifica)
        resolve();
    })
}
selectArea = function () {
    return new Promise(function (resolve, reject) {
        serviceArea.selectArea().then(function(data){
            resolve(data);
        })
    })
}

module.exports = { insertArea, selectArea }