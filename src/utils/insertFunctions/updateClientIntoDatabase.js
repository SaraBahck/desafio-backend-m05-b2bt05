const knex = require('../../connections/dbConnection');

const updateClientIntoDatabase = async (req, nome, email, cpf, cep, rua, numero, bairro, cidade, estado) => {
    const register = await knex('clientes')
        .where({ id: req.params.id })
        .update({ nome, email, cpf, cep, rua, numero, bairro, cidade, estado }).returning('*')
        ;

    if (!register) {
        throw {
            code: 400,
            message: "O cliente não foi atualizado"
        }
    };

    return register[0];
}

module.exports = updateClientIntoDatabase
