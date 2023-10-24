const knex = require('../../connections/dbConnection');

const checkEmailRegistered = async (email) => {
  const emailExists = await knex('usuarios').where({ email }).first()

  if (emailExists) {
    throw {
      code: 400,
      message: "O email já existe"
    }
  }
}

module.exports = checkEmailRegistered