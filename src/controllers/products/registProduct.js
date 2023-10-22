const checkProductExistsIntoDb = require("../../utils/checkFunctions/checkProducts/checkProductExistsIntoDb");
const insertProductIntoDatabase = require("../../utils/insertFunctions/insertProductIntoDatabase");
const checkCategoryExists = require("../../utils/checkFunctions/checkProducts/checkCategoryExists");

const productRegistration = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

    try {
        await checkCategoryExists(categoria_id) 

        await checkProductExistsIntoDb(descricao)

        const product = await insertProductIntoDatabase (descricao, quantidade_estoque, valor, categoria_id)
        
        return res.status(201).json(product);
    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    productRegistration
}