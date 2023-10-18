const checkProductExists = require("../utils/checkProductExists");
const updateProductIntoDatabase = require("../utils/updateProductIntoDatabase");
const validateproductDataRegister = require("../utils/validateProductDataRegister");

const editProduct = async (req, res) => {
    const { id } = req.params;
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
    
    try {
        await validateproductDataRegister (descricao, quantidade_estoque, valor, categoria_id)

        await checkProductExists(id)

        await updateProductIntoDatabase(id, descricao, quantidade_estoque, valor, categoria_id)
        
        return res.status(200).send();

    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    editProduct
}