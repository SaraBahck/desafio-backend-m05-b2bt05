const checkProductExistsIntoDb = require("../../utils/checkFunctions/checkProducts/checkProductExistsIntoDb");
const insertProductIntoDatabase = require("../../utils/insertFunctions/insertProductIntoDatabase");
const checkCategoryExists = require("../../utils/checkFunctions/checkProducts/checkCategoryExists");
const { insertImageInToBackblaze } = require("../../utils/insertFunctions/insertProductImageInToBackblaze");
const checkNegativeStock = require("../../utils/checkFunctions/checkProducts/checkNegativeStock");

const productRegistration = async (req, res) => {
    try {
        const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
        const { file } = req

        await checkCategoryExists(categoria_id)

        await checkProductExistsIntoDb(descricao)

        await checkNegativeStock(quantidade_estoque)

        let product = await insertProductIntoDatabase(descricao, quantidade_estoque, valor, categoria_id)

        if (file) {
            const id = product.id
            product = await insertImageInToBackblaze(file, id)
        }

        return res.status(201).json(product);
    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    productRegistration
}