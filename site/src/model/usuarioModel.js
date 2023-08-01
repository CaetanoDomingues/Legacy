var database = require("../database/configuracao")

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha,celular) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha,celular);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (nome,email,senha,celular) VALUES ('${nome}', '${email}', '${senha}','${celular}');
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function guardar(id){
    console.log("Acessei o usuario model \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t\>> verificar credenciais do acesso ao banco \n \t\t >> se o server do BD estiver operando normalmente. \n \t\t function guardar():" , id);

    var instrucao = `
    INSERT INTO telefone (id) VALUES ('${id}');`
    console.log("Executei a instrução nova : \n" + instrucao);
    return database.executar(instrucao)
}
module.exports = {
    entrar,
    cadastrar,
    guardar
};