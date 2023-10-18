const knex = require('../dbConnection')

const validateproductDataRegister = async (descricao, quantidade_estoque, valor, categoria_id) => {
    if (!descricao || !quantidade_estoque || !valor || !categoria_id) {
      throw {
        code: 404,
        message: 'Todos os campos devem ser informados'
      }
    }

    const categoryExists = await knex('categorias').where({ id: categoria_id })
    
    if (!categoryExists) {
        throw {
            code: 404,
            message: 'Categoria inválida'
      }
    }
}

module.exports = validateproductDataRegister