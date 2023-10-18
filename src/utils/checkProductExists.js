const knex = require('../dbConnection')

const checkProductExists= async (id) => {
  const idExists = await knex('produtos').where({ id }).first()

  if (!idExists){
    throw {
      code: 404,
      message: "Produto não encontrado"
    }
  }
}

module.exports = checkProductExists