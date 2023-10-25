const knex = require('../../../connections/dbConnection');

const checkEmailClientToUpdate = async (req, email) => {
    const emailExists = await knex('clientes').where('email', '=', email).where('id', '!=', req.params.id).first();

    if (emailExists) {
        throw {
            code: 400,
            message: "O email já existe"
        }
    }
}

module.exports = checkEmailClientToUpdate
