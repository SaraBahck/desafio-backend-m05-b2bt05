const knex = require('../../../connections/dbConnection');

const checkProductExistsById = async (id, descricao) => {
  const idExists = await knex('produtos').where({ id }).first()

  if (!idExists){
    throw {
      code: 404,
      message: "Produto não encontrado"
    }
  } 

  const productExists = await knex('produtos').where({ descricao }).where('id', '!=', id).select('*')

  if (productExists.length > 0){
    throw {
      code: 404,
      message: "Produto já cadastrado"
    }
  }
}

module.exports = checkProductExistsById