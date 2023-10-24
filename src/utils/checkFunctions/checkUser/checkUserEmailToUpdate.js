const knex = require('../../connections/dbConnection');

const checkEmailToUpdate = async (req, email) => {
  const emailExists = await knex('usuarios').where({ email }).first()

  if (emailExists && emailExists.id !== req.user.id) {
    throw {
      code: 400,
      message: "O email já existe"
    }
  }
}

module.exports = checkEmailToUpdate
