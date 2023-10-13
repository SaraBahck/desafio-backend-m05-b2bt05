const knex = require('../dbConnection')

const insertUserIntoDatabase = async (nome, email, encryptedPassword) => {
    const register = await knex('usuarios')
        .insert({ nome, email, senha: encryptedPassword })
        .returning('*')
    ;
    
    if (!register[0]){
        throw {
            code: 400,
            message: "O usuário não foi cadastrado"
        }
    };
    
    return register[0];
}

module.exports = insertUserIntoDatabase