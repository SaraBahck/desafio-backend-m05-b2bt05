const knex = require('../dbConnection')
const { findProduct } = require('../utils/findProductByID')

const deleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        await findProduct(id)

        const deleteProduct = await knex('produtos').where({
            id
        })
        .del()
        if(!deleteProduct){
            return res.status(400).json('O produto não foi excluído')
        }
        return res.status(200).json('Produto excluido com sucesso')
    }catch(error) {
        return res.status(error.code).json(error.message)
    }
}

module.exports = {
    deleteProduct
}