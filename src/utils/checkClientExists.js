const knex = require('../dbConnection')

const checkClientExists = async (id) => {
    const idExists = await knex('clientes').where({ id }).first()

    if (!idExists) {
        throw {
            code: 404,
            message: "Cliente não encontrado"
        }
    }
}

module.exports = checkClientExists