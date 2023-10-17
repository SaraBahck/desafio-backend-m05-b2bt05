const knex = require('../dbConnection')

const updatetUserIntoDatabase = async (req, nome, email, encryptedPassword) => {
    const register = await knex('usuarios')
        .where({ id: req.user.id })
        .update({ nome, email, senha: encryptedPassword })
    ;
    
    if (!register[0]){
        throw {
            code: 400,
            message: "O usuário não foi atualizado"
        }
    };
}

module.exports = updatetUserIntoDatabase