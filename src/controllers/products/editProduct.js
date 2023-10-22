const checkProductExistsById = require("../../utils/checkFunctions/checkProducts/checkProductExistsById");
const updateProductIntoDatabase = require("../../utils/insertFunctions/updateProductIntoDatabase");
const checkCategoryExists = require("../../utils/checkFunctions/checkProducts/checkCategoryExists");

const editProduct = async (req, res) => {
    const { id } = req.params;
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

    try {
        await checkCategoryExists(categoria_id)

        await checkProductExistsById(id, descricao)

        const product = await updateProductIntoDatabase(id, descricao, quantidade_estoque, valor, categoria_id)

        return res.status(200).json(product);

    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    editProduct
} 