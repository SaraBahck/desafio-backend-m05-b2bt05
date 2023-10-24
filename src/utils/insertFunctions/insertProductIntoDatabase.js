const knex = require('../../connections/dbConnection');

const insertProductIntoDatabase = async (descricao, quantidade_estoque, valor, categoria_id) => {
    const product = await knex('produtos')
        .insert({ descricao, quantidade_estoque, valor, categoria_id })
        .returning('*')
    ;
    
    if (!product[0]){
        throw {
            code: 400,
            message: "O produto não foi cadastrado"
        }
    };
    
    return product[0];
}

module.exports = insertProductIntoDatabase