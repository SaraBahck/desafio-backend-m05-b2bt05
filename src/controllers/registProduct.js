const checkProductExistsIntoDb = require("../utils/checkProductExistsIntoDb");
const insertProductIntoDatabase = require("../utils/insertProductIntoDatabase");
const validateproductDataRegister = require("../utils/validateProductDataRegister");

const productRegistration = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

    try {
        await validateproductDataRegister (descricao, quantidade_estoque, valor, categoria_id)

        await checkProductExistsIntoDb(descricao)

        const product = await insertProductIntoDatabase (descricao, quantidade_estoque, valor, categoria_id)
        
        return res.status(201).json(product);
    } catch (error) {
        console.log(error)
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    productRegistration
}