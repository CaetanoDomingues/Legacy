var registroModel = require("../model/registroModel");

function enviar(req, res) {
    var acerto = req.body.acertoServer;
    var erro = req.body.erroServer;
    var idUsuario = req.params.idUsuario;

    if (acerto == undefined || erro == undefined || idUsuario == undefined) {
        res.status(400).send("Nenhum dado registrado!");
    } else {
        console.log('Entrando no then do controller')
        registroModel.enviar(acerto,erro,idUsuario)
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

function capturar(req, res) {

    // const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;

    // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    console.log('Preparando para entrar no model')
    registroModel.capturar(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// function atualizar(req, res) {

//     var idUsuario = req.params.idUsuario;

//     console.log(`Recuperando medidas em tempo real`);

//     registroModel.atualizar(idUsuario).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }
module.exports = {
    enviar,
    capturar,
    // atualizar
};