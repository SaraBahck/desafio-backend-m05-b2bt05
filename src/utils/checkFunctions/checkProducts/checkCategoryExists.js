const knex = require('../../../dbConnection')

const checkCategoryExists = async (categoria_id) => {
  const categoryExists = await knex('categorias').where({ id: categoria_id })

  if (!categoryExists[0]) {
    throw {
      code: 404,
      message: 'Categoria inválida'
    }
  }
}

module.exports = checkCategoryExists