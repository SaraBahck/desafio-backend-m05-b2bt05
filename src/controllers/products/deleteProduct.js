const knex = require('../../dbConnection')
const { findProduct } = require('../../utils/checkFunctions/checkProducts/findProductByID')

const deleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        await findProduct(id)

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
        return res.status(error.code).json(error.message)
    }
}

module.exports = {
    deleteProduct
}