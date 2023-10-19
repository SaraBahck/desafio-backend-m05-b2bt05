const knex = require('../dbConnection')

const detailProduct = async (req, res) => {
    const {id} = req.params

    try {
        const product = await knex('produtos').where({
            id
        })

        if (product.length === 0){
            return res.status(404).json("Produto não encontrado")
        }

        res.status(200).json(product)

    } catch (error) {
        
        res.status(404).json({ mensagem: `o servidor não pode encontrar o recurso solicitado.` })
    
    }
}

module.exports = {
    detailProduct
}