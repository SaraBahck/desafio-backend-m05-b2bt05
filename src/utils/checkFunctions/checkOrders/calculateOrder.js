const knex = require('../../../connections/dbConnection');

const calculateOrder = async (pedido_produtos) => {
    let valor_total = 0;

    for (const item of pedido_produtos) {
        const { produto_id, quantidade_produto } = item;
        const product = await knex('produtos').where('id', produto_id).first();
        valor_total += (product.valor * quantidade_produto);
    }

    return valor_total;
}

module.exports = { calculateOrder };