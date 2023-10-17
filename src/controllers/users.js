const bcrypt = require('bcrypt');

const checkEmailRegistered = require('../utils.js/checkEmailRegistered');
const validateUserDataRegister = require('../utils.js/validateUserDataRegister');
const insertUserIntoDatabase = require('../utils.js/insertUserIntoDatabase');

const userRegistration = async (req, res) => {
    const { nome, email, senha } = req.body;

    await validateUserDataRegister(nome, email, senha)

    try {
        await checkEmailRegistered(email)

        const encryptedPassword = await bcrypt.hash(senha, 10)

        const register = await insertUserIntoDatabase(nome, email, encryptedPassword)

        return res.status(201).json(register);

    } catch (error) {
        return res.status(500).json(error);
    }
}

const detailUser = async (req, res) => {
    try {

        const { id, nome, email } = req.user
        res.status(200).json({ id, nome, email })

    } catch (error) {
        console.log(error.message);
        res.status(404).json({ mensagem: `o servidor não pode encontrar o recurso solicitado.` })

    }
}


module.exports = {
    userRegistration,
    detailUser
}