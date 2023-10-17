const bcrypt = require('bcrypt');

const checkEmailRegistered = require('../utils/checkEmailRegistered');
const validateUserDataRegister = require('../utils/validateUserDataRegister');
const insertUserIntoDatabase = require('../utils/insertUserIntoDatabase');

const userRegistration = async (req, res) => {
    const { nome, email, senha } = req.body;

    await validateUserDataRegister(nome, email, senha)

    try {
        await checkEmailRegistered(email)

        const encryptedPassword = await bcrypt.hash(senha, 10)

        const register = await insertUserIntoDatabase(nome, email, encryptedPassword)

        return res.status(201).json(register);

    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    userRegistration
}