const knex = require('../../connections/dbConnection');
const { findProduct } = require('../../utils/checkFunctions/checkProducts/findProductByID')
const findProductInOrder = require('../../utils/checkFunctions/checkProducts/findProductInOrder');

const deleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        const findedProduct = await findProduct(id)

        if (!findedProduct) {
            return res.status(404).json(error.message)
        }

        const findInOrder = findProductInOrder(id)

        if (findInOrder) {
            return res.status(403).json({ message: "O produto não pode ser excluído pois está em um pedido" })
        }

        const deleteProduct = await knex('produtos').where({
            id
        })
            .del()
        if (!deleteProduct) {
            throw {
                code: 400,
                message: 'O produto não foi excluído'
            }
        }
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    deleteProduct
}