const { findClientById } = require('../../utils/checkFunctions/checkClient/findClientById');
const { calculateOrder } = require('../../utils/checkFunctions/checkOrders/calculateOrder');
const { checkStock } = require('../../utils/checkFunctions/checkProducts/checkStockProducts');
const { findProduct } = require('../../utils/checkFunctions/checkProducts/findProductByID');
const { insertNewOrder } = require('../../utils/insertFunctions/insertNewOrder');
const { updateStockAndInsertOrder } = require('../../utils/insertFunctions/updateStockAndInsertOrder');
const sendEmail = require('../../utils/sendEmails/sendRegistEmail');


const registOrder = async (req, res) => {

    const { cliente_id, observacao, pedido_produtos } = req.body;

    try {

        const client = await findClientById(cliente_id);

        for (const item of pedido_produtos) {
            const { produto_id, quantidade_produto } = item

            const product = await findProduct(produto_id);
            checkStock(product, quantidade_produto);
        }

        const valor_total = await calculateOrder(pedido_produtos);

        const order = await insertNewOrder(cliente_id, observacao, valor_total);

        await updateStockAndInsertOrder(pedido_produtos, order.id);

        sendEmail(pedido_produtos, client)

        return res.status(201).json(order);

    } catch (error) {
        return res.status(error.code).json(error.message);
    }

}

module.exports = {
    registOrder
}