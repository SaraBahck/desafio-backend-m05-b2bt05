const validateClientDataRegist = require('../utils/validateClientDataRegist');
const checkEmailRegistered = require('../utils/checkEmailRegistered');
const checkCpfRegistered = require('../utils/checkCpfRegistered');
const insertClientIntoDatabase = require('../utils/insertClientIntoDatabase');

const registClient = async (req, res) => {
    const { nome, email, cpf } = req.body;

    try {
        await validateClientDataRegist(nome, email, cpf);
        await checkEmailRegistered(email);
        await checkCpfRegistered(cpf);
        await insertClientIntoDatabase(nome, email, cpf);

        return res.status(201).json({ menagem: 'Cliente cadastrado.' });

    } catch (error) {
        console.log(error)
        return res.status(error.code || 500).json(error.message || 'Erro interno do servidor');
    }
}

module.exports = {
    registClient
}