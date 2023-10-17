const bcrypt = require('bcrypt');
const updatetUserIntoDatabase = require('../utils/updateUserIntoDatabase');
const validateUserDataRegister = require('../utils/validateUserDataRegister');
const checkEmailToUpdate = require('../utils/checkEmailToUpdate');

const editUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    
    await validateUserDataRegister(nome, email, senha)

    try {
        await checkEmailToUpdate(req, email)

        const encryptedPassword = await bcrypt.hash(senha, 10)

        await updatetUserIntoDatabase (req, nome, email, encryptedPassword)
        
        return res.status(200).send();

    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    editUser,
}