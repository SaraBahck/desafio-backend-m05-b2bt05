const checkProductExistsIntoDb = require("../../utils/checkFunctions/checkProducts/checkProductExistsIntoDb");
const insertProductIntoDatabase = require("../../utils/insertFunctions/insertProductIntoDatabase");
const checkCategoryExists = require("../../utils/checkFunctions/checkProducts/checkCategoryExists");
const { uploadFile } = require("../../connections/backblaze");
const knex = require('../../connections/dbConnection')

const productRegistration = async (req, res) => {
    try {
        const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
        const { file } = req

        await checkCategoryExists(categoria_id)

        await checkProductExistsIntoDb(descricao)

        const product = await insertProductIntoDatabase(descricao, quantidade_estoque, valor, categoria_id)

        if (!file) {
            return res.status(201).json(product)
        }

        const id = product.id

        const image = await uploadFile(
            `produtos/${id}/${file.originalname}`,
            file.buffer,
            file.mimetype
        )

        const productImage = await knex('produtos').update({
            produto_imagem: image.url
        }).where({ id }).returning('*')


        return res.status(201).json(productImage);
    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    productRegistration
}