const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../dbConnection');

const validateUserDataLogin = require('../utils.js/validateUserDataLogin');
const checkEmailRegistered = require('../utils.js/checkEmailRegistered')

const editUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    await validateUserDataLogin(nome, email, senha);

    try {
        const hashPass = await bcrypt.hash(senha, 10);
        const tokenUser = jwt.verify(token)
        console.log("tudo certo")

        if (senha) { hashPass(senha) }

        await checkEmailRegistered(email)

        await knex('usuarios')
            .where({ id })
            .update({
                nome,
                email,
                senha: hashPass
            });

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({
            mensagem: 'Erro interno do servidor'
        });
    }

}

module.exports = {
    editUser,
}