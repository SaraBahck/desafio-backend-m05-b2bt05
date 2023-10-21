const { findProduct } = require("../../utils/checkFunctions/checkProducts/findProductByID")

const detailProduct = async (req, res) => {
    const {id} = req.params

    try {
        const product = await findProduct(id)

        res.status(200).json(product)

    } catch (error) {
        return res.status(error.code).json(error.message)
    }
}

module.exports = {
    detailProduct
}