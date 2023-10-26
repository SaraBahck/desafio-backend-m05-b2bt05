const checkProductExistsById = require("../../utils/checkFunctions/checkProducts/checkProductExistsById");
const updateProductIntoDatabase = require("../../utils/insertFunctions/updateProductIntoDatabase");
const checkCategoryExists = require("../../utils/checkFunctions/checkProducts/checkCategoryExists");
const { insertImageInToBackblaze } = require("../../utils/insertFunctions/insertProductImageInToBackblaze");

const editProduct = async (req, res) => {
    const { id } = req.params;
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
    const { file } = req;

    try {
        await checkCategoryExists(categoria_id);
        await checkProductExistsById(id, descricao);

        let product = await updateProductIntoDatabase(id, descricao, quantidade_estoque, valor, categoria_id)

        if (file) {
            product = await insertImageInToBackblaze(file, id)
        }

        return res.status(200).json(product);

    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    editProduct
} 