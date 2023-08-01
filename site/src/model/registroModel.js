var database = require("../database/configuracao")

function enviar(acerto,erro,idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar():", acerto,erro,idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Quiz (acerto,erro,idUsuario) VALUES ('${acerto}', '${erro}','${idUsuario}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function capturar(idUsuario) {
    instrucaoSql = ''
if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = ` 
        select acerto,erro from quiz join Usuario on idUsuario = ${idUsuario};
                    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function atualizar(idUsuario) {

//     instrucaoSql = ''

//      if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select acerto,erro from quiz join Usuario on idUsuario = ${idUsuario}`;
//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }
module.exports = {
    enviar,
    capturar,
    // atualizar
};