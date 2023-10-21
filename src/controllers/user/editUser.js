const bcrypt = require('bcrypt');
const updatetUserIntoDatabase = require('../../utils/insertFunctions/updateUserIntoDatabase');
const validateUserDataRegister = require('../../utils/validations/validateUserDataRegister');
const checkEmailToUpdate = require('../../utils/checkFunctions/checkUser/checkUserEmailToUpdate');

const editUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        await validateUserDataRegister(nome, email, senha)

        await checkEmailToUpdate(req, email)

        const encryptedPassword = await bcrypt.hash(senha, 10)

        await updatetUserIntoDatabase(req, nome, email, encryptedPassword)

        return res.status(204).send();

    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    editUser,
}