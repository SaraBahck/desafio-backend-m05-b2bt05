const bcrypt = require('bcrypt');
const validateClientDataRegist = require('../utils/validateClientDataRegist')
const checkClientExists = require('../utils/checkClientExists');
const checkEmailClientToUpdate = require('../utils/checkEmailClientToUpdate');
const checkCpfClientToUpdate = require('../utils/checkCpfClientToUpdate');
const updateClientIntoDatabase = require('../utils/updateClientIntoDatabase');

const editClient = async (req, res) => {
    const { id } = req.params;
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    try {

        await checkClientExists(id);
        await validateClientDataRegist(nome, email, cpf);
        await checkEmailClientToUpdate(req, email);
        await checkCpfClientToUpdate(req, cpf);
        await updateClientIntoDatabase(req, nome, email, cpf, cep, rua, numero, bairro, cidade, estado);

        return res.status(204).json({ mensagem: 'Cliente atualizado!!' });

    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    editClient,
}