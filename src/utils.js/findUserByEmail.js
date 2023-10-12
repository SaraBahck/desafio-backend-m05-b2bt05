const knex = require('../dbConnection')

const findUserByEmail = async (email) => {
  const login = await knex('usuarios').where({ email })

  if (login.length === 0) {
    throw {
      code: 400,
      message: "O usuario não foi encontrado"
    }

  }
  return login
}

module.exports = findUserByEmail