const knex = require('../../connections/dbConnection');

const updatetUserIntoDatabase = async (req, nome, email, encryptedPassword) => {
    const register = await knex('usuarios')
        .where({ id: req.user.id })
        .update({ nome, email, senha: encryptedPassword }).returning('*')
        ;

    if (!register) {
        throw {
            code: 400,
            message: "O usuário não foi atualizado"
        }
    };

    delete register[0].senha;
    return register;
}


module.exports = updatetUserIntoDatabase
