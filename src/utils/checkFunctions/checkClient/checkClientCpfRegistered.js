const knex = require('../../../dbConnection')

const checkCpfRegistered = async (cpf) => {
    const cpfExists = await knex('clientes').where({ cpf }).first()

    if (cpfExists) {
        throw {
            code: 400,
            message: "cpf já existe"
        }
    }
}

module.exports = checkCpfRegistered;