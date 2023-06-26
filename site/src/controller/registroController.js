var registroModel = require("../model/registroModel");

function registrar(req, res) {
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var fkusuario = req.body.fkusuarioServer;

    if (acertos == undefined || erros == undefined || fkusuario == undefined) {
        res.status(400).send("Nenhum dado registrado!");
    } else {
        
        registroModel.registrar(acertos,erros,fkusuario)
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