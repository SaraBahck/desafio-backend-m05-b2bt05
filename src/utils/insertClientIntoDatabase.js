const knex = require('../dbConnection')

const insertClientIntoDatabase = async (nome, email, cpf, cep, rua, numero, bairro, cidade, estado) => {
    const client = await knex('clientes')
        .insert({ nome, email, cpf, cep, rua, numero, bairro, cidade, estado })
        .returning('*')
        ;

    if (!client[0]) {
        throw {
            code: 400,
            message: "O cliente não foi cadastrado"
        }
    };

    return client[0];
}

module.exports = insertClientIntoDatabase