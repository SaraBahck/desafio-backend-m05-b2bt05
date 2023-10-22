const knex = require('../../dbConnection')

const updateProductIntoDatabase = async (id, descricao, quantidade_estoque, valor, categoria_id) => {
    const register = await knex('produtos')
        .where({ id })
        .update({ descricao, quantidade_estoque, valor, categoria_id }).returning('*');
    ;

    if (!register) {
        throw {
            code: 400,
            message: "O produto não foi atualizado"
        }
    };

    return register[0];
}

module.exports = updateProductIntoDatabase