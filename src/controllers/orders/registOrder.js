const knex = require('../../connections/dbConnection');
const sendEmail = require('../../utils/sendEmails/sendRegistEmail');

const registOrder = async (req, res) => {

    try {
        const { cliente_id, observacao, pedido_produtos } = req.body;

        if (!cliente_id || !pedido_produtos || pedido_produtos.length === 0) {
            return res.status(400).json({ message: "É necessário preencher todos os campos." });
        } else {
            for (const item of pedido_produtos) {
                if (!item.produto_id || !item.quantidade_produto) {
                    return res.status(400).json({ message: "No pedido_produtos deve ter um produto_id e uma quantidade_produtos" });
                }
            }
        }

        const client = await knex('clientes').where('id', cliente_id).first()
 
        if (!client) {
            return res.status(400).json({ message: "Cliente não encontrado" })
        }

        for (const item of pedido_produtos) {
            const { produto_id, quantidade_produto } = item

            const product = await knex('produtos').where('id', produto_id).first();

            if (!product) {
                return res.status(404).json({ message: "O produto não encontrado, por favor, escolha um novo produto." })
            }

            if (product.quantidade_estoque < quantidade_produto) {
                return res.status(400).json({ message: "Estoque insuficiente, a quantidade máxima do(a) " + product.descricao + " que você pode escolher é " + product.quantidade_estoque });
            }
        }


        let valor_total = 0;

        for (const item of pedido_produtos) {
            const { produto_id, quantidade_produto } = item;

            const product = await knex('produtos').where('id', produto_id).first();

            valor_total += (product.valor * quantidade_produto);
        }

        const insertOrder = await knex('pedidos').insert({
            cliente_id,
            observacao,
            valor_total,
        }).returning('id');

        for (const item of pedido_produtos) {
            const { produto_id, quantidade_produto } = item;

            const product = await knex('produtos').where('id', produto_id).first();

            const newStock = product.quantidade_estoque - quantidade_produto;
            await knex('produtos').where('id', produto_id).update({ quantidade_estoque: newStock });

            await knex('pedido_produtos').insert({
                pedido_id: insertOrder[0].id,
                produto_id,
                quantidade_produto,
                valor_produto: product.valor,
            });
        }

        sendEmail(pedido_produtos, client)

        return res.status(201).json({ message: "Pedido cadastrado com sucesso." })

    } catch (error) {
        return res.status(500).json({ message: "Erro interno ao cadastrar pedido." })
    }

}

module.exports = {
    registOrder
}