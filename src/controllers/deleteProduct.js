const knex = require('../dbConnection')

const deleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        const product = await knex('produtos')
            .where({
                id
            })
            .first()

        if(!product){
            return res.status(404).json('Produto não encontrado')
        }

        const deleteProduct = await knex('produtos').where({
            id
        })
        .del()
        if(!deleteProduct){
            return res.status(400).json('O produto não foi excluído')
        }
        return res.status(200).json('Produto excluido com sucesso')
    }catch(error) {
        return res.status(400).json(error.message)
    }
}

module.exports = {
    deleteProduct
}