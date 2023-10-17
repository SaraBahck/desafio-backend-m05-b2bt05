const bcrypt = require('bcrypt');
const knex = require('../dbConnection');
const updatetUserIntoDatabase = require('../utils/updateUserIntoDatabase');
const validateUserDataRegister = require('../utils/validateUserDataRegister');

const editUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.user;

    await validateUserDataRegister(nome, email, senha)

    try {
        await checkEmailRegistered(email)

        const encryptedPassword = await bcrypt.hash(senha, 10)

        await updatetUserIntoDatabase (nome, email, encryptedPassword)
        
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