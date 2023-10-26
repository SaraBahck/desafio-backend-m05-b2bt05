const knex = require('../../../connections/dbConnection');


const findProductInOrder = async (id) => {
    const product = await knex('pedido_produtos').where('produto_id', id)
    if (product.length > 0) {
        throw {
            code: 400,
            message: "O produto não pode ser excluído pois está em um pedido"
        }
    }
    return product[0]
}


module.exports = findProductInOrder