const knex = require('../../../dbConnection');


const findClientById = async (id) => {
    const client = await knex('clientes').where('id', id)

    if (!client.length) {
        throw {
            code: 404,
            message: "Cliente não encontrado!"
        }
    }

    return client[0]
}


module.exports = { findClientById }