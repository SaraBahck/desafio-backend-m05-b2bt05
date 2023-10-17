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
        return res.status(500).json(error.message);
    }
}

const detailUser = async (req, res) => {
    
    return res.json(req.user);
    
}


module.exports = {
    userRegistration, 
    detailUser
}