const knex = require('../../connections/dbConnection');

const updateStockAndInsertOrder = async (pedido_produtos, orderId) => {
    for (const item of pedido_produtos) {
        const { produto_id, quantidade_produto } = item;

        const product = await knex('produtos').where('id', produto_id).first();

        const newStock = product.quantidade_estoque - quantidade_produto;
        await knex('produtos').where('id', produto_id).update({ quantidade_estoque: newStock });

        await knex('pedido_produtos').insert({
            pedido_id: orderId.id,
            produto_id,
            quantidade_produto,
            valor_produto: product.valor,
        });
    }

}

module.exports = { updateStockAndInsertOrder };