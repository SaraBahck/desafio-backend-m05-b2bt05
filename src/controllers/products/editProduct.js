const checkProductExistsById = require("../../utils/checkFunctions/checkProducts/checkProductExistsById");
const updateProductIntoDatabase = require("../../utils/insertFunctions/updateProductIntoDatabase");
const checkCategoryExists = require("../../utils/checkFunctions/checkProducts/checkCategoryExists");
const { uploadFile } = require("../../connections/backblaze");
const knex = require('../../connections/dbConnection')

const editProduct = async (req, res) => {
    const { id } = req.params;
    const { descricao, quantidade_estoque, valor, categoria_id, produto_imagem } = req.body;
    const { file } = req;

    try {
        await checkCategoryExists(categoria_id);
        await checkProductExistsById(id, descricao);

        const product = await updateProductIntoDatabase(id, descricao, quantidade_estoque, valor, categoria_id)

        if (file) {
            const image = await uploadFile('produtos/${id}/${file.originalname}', file.buffer, file.minetype)

            product = await knex('produtos')
                .update({
                    produto_imagem: image.path
                })
                .where({ id })
                .returning('*')
        }

        return res.status(200).json(product);

    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    editProduct
} 