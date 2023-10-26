const knex = require('../../connections/dbConnection');
const { findProduct } = require('../../utils/checkFunctions/checkProducts/findProductByID')
const findProductInOrder = require('../../utils/checkFunctions/checkProducts/findProductInOrderToDelete');
const { deleteFileInBackblaze } = require('../../connections/backblaze');

const deleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        const product = await findProduct(id)

        await findProductInOrder(id)

        const productImageKey = `produtos/${id}/`

        if (product.produto_imagem !== null){
            await deleteFileInBackblaze(productImageKey)
        }

        const deleteProduct = await knex('produtos').where({
            id
        }).del()

        if (!deleteProduct) {
            throw {
                code: 400,
                message: 'O produto não foi excluído'
            }
        }
        return res.status(204).send();
    } catch (error) {
        return res.status(error.code).json(error.message)
    }
}

module.exports = {
    deleteProduct
}