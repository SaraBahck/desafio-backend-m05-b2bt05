const knex = require('../dbConnection')

const checkCpfClientToUpdate = async (req, cpf) => {
    const cpfExists = await knex('clientes').where('cpf', '=', cpf).where('id', '!=', req.params.id).first()

    if (cpfExists) {
        throw {
            code: 400,
            message: "O cpf já existe"
        }
    }
}

module.exports = checkCpfClientToUpdate
