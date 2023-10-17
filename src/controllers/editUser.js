const bcrypt = require('bcrypt');
const updatetUserIntoDatabase = require('../utils/updateUserIntoDatabase');
const validateUserDataRegister = require('../utils/validateUserDataRegister');
const checkEmailToUpdate = require('../utils/checkEmailToUpdate');

const editUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.user;

    await validateUserDataRegister(id, nome, email, senha)

    try {
        await checkEmailToUpdate(email)

        const encryptedPassword = await bcrypt.hash(senha, 10)

        await updatetUserIntoDatabase (nome, email, encryptedPassword)
        
        return res.status(200).send();

    } catch (error) {
        return res.status(500).json({
            mensagem: 'Erro interno do servidor'
        });
    }
}

module.exports = {
    editUser,
}