const knex = require('../dbConnection')

const findProduct = async (id) => {
  const product = await knex('produtos').where({
    id
  })

  if (product.length === 0) {
    throw {
      code: 404,
      message: "Produto não encontrado"
    }
  }
  return product[0]
}

module.exports = { findProduct }