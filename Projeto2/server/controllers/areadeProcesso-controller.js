var serviceArea = require('../services/areadeProcesso-service.js')




insertArea = function (area) {
    return new Promise(function (resolve, reject) {
        serviceArea.insertArea(area.sigla, area.nome, area.descricao, area.id_categoria, area.id_modelo, area.id_nivelmaturidade, area.id_metaespecifica)
        resolve();
    })
}
selectArea = function () {
    return new Promise(function (resolve, reject) {
        serviceArea.selectArea().then(function (data) {
            resolve(data);
        })
    })
}

updateArea = function(data){
    return new Promise(function(resolve, reject){        
    serviceArea.updateArea(data.id, data.sigla, data.nome, data.descricao, data.id_categoria, data.id_modelo,data.id_nivelmaturidade, data.id_metaespecifica)
    resolve();
    })
    
}


module.exports = { insertArea, selectArea, updateArea }