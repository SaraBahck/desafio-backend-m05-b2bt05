const knex = require('../../connections/dbConnection');

const insertNewOrder = async (cliente_id, observacao, valor_total) => {
    const [orderId] = await knex('pedidos').insert({
        cliente_id,
        observacao,
        valor_total,
    }).returning('id');

    const order = await knex('pedidos').where('id', orderId.id).first();

    return order;
}

module.exports = { insertNewOrder };