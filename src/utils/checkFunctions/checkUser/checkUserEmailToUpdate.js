const knex = require('../../../dbConnection')

const checkEmailToUpdate= async (req, email) => {
  const emailExists = await knex('usuarios').where({ email }).first()

  if (emailExists && emailExists !== req.user.email){
    throw {
      code: 400,
      message: "O email já existe"
    }
  }
}

module.exports = checkEmailToUpdate
