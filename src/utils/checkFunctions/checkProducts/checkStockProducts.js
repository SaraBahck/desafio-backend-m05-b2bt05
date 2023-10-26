const knex = require('../../../connections/dbConnection');

const checkStock = (product, quantidade_produto) => {
    if (product.quantidade_estoque < quantidade_produto) {
        throw {
            code: 400,
            message: `Estoque insuficiente, a quantidade máxima do produto ${product.descricao} que você pode escolher é ${product.quantidade_estoque}`
        };
    }
}

module.exports = { checkStock };