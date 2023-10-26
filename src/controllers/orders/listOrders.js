const { findClientId } = require('../../utils/checkFunctions/checkOrders/findClientByIDinOrdersTable');
const knex = require('../../connections/dbConnection');

const listOrder = async (req, res) => {
    try {
        const { cliente_id } = req.query;

        const ordersQuery = knex('pedidos')
            .leftJoin('pedido_produtos', 'pedidos.id', 'pedido_produtos.pedido_id')
            .select(
                'pedidos.id as pedido_id',
                'pedidos.valor_total',
                'pedidos.observacao',
                'pedidos.cliente_id',
                'pedido_produtos.id',
                'pedido_produtos.quantidade_produto',
                'pedido_produtos.valor_produto',
                'pedido_produtos.pedido_id',
                'pedido_produtos.produto_id'
            );

        if (cliente_id) {
            await findClientId(cliente_id);
            ordersQuery.where('pedidos.cliente_id', cliente_id);
        }

        const result = await ordersQuery;

        const formattedResult = [];
        const groupedResult = {};

        result.forEach(row => {
            if (!groupedResult[row.pedido_id]) {
                groupedResult[row.pedido_id] = {
                    pedido: {
                        id: row.pedido_id,
                        valor_total: row.valor_total,
                        observacao: row.observacao,
                        cliente_id: row.cliente_id,
                    },
                    pedido_produtos: [],
                };
            }

            if (row.id) {
                groupedResult[row.pedido_id].pedido_produtos.push({
                    id: row.id,
                    quantidade_produto: row.quantidade_produto,
                    valor_produto: row.valor_produto,
                    pedido_id: row.pedido_id,
                    produto_id: row.produto_id
                });
            }
        });

        for (const formatted in groupedResult) {
            formattedResult.push(groupedResult[formatted]);
        }

        return res.status(200).json(formattedResult);
    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    listOrder
}
