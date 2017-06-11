var modelo = require('../services/modelo.js');
var modelogeral = [];

selectModeloId = function (idModelo) {
    return new Promise(function (resolve, reject) {
        modelo.selectModeloIdbanco(idModelo).then(function (res, rej) {
            modelogeral.push(res);
            //novometodo para categoria ex
            console.log(modelogeral);
            this.selectCategoria().then(function (){
               resolve(modelogeral); 
            })
            
        });
    })
};

selectCategoria = function () {
    return new Promise(function (resolve, reject) {
        resolve();
    });
}







module.exports = { selectModeloId }