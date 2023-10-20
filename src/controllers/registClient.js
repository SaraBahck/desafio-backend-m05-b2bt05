const validateClientDataRegist = require('../utils/validateClientDataRegist');
const checkEmailClientRegist = require('../utils/checkEmailClientRegist');
const checkCpfRegistered = require('../utils/checkCpfRegistered');
const insertClientIntoDatabase = require('../utils/insertClientIntoDatabase');

const registClient = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    try {
        await validateClientDataRegist(nome, email, cpf);
        await checkEmailClientRegist(email);
        await checkCpfRegistered(cpf);
        await insertClientIntoDatabase(nome, email, cpf, cep, rua, numero, bairro, cidade, estado);

        return res.status(201).json({ menagem: 'Cliente cadastrado.' });

    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    registClient
}