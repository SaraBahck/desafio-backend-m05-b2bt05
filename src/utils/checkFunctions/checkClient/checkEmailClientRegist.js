const knex = require('../../../connections/dbConnection');

const checkEmailClientRegist = async (email) => {
    const emailExists = await knex('clientes').where({ email }).first()

    if (emailExists) {
        throw {
            code: 400,
            message: "O email já existe"
        }
    }
}

module.exports = checkEmailClientRegist