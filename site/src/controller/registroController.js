var registroModel = require("../model/registroModel");

function registrar(req, res) {
    var acerto = req.acertosServer;
    var erro = req.errosServer;
    var fkusuario = req.fkusuarioServer;

    if (acerto == undefined || erro == undefined || fkusuario == undefined) {
        res.status(400).send("Nenhum dado registrado!");
    } else {
        
        registroModel.registrar(acerto,erro,fkusuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a captura de dados! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    registrar
};