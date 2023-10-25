const knex = require('../../../connections/dbConnection');


const findProductInOrder = async (id) => {
    const product = await knex('pedido_produtos').where('produto_id', id)


    if (!product.length) {
        throw {
            code: 404,
            message: "Produto não encontrado"
        }
    }
    return product[0]
}


module.exports = findProductInOrder