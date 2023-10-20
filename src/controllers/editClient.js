const validateClientDataRegist = require('../utils/validateClientDataRegist')
const checkEmailClientToUpdate = require('../utils/checkEmailClientToUpdate');
const checkCpfClientToUpdate = require('../utils/checkCpfClientToUpdate');
const updateClientIntoDatabase = require('../utils/updateClientIntoDatabase');
const { findClientById } = require('../utils/findClientById');

const editClient = async (req, res) => {
    const { id } = req.params;
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    try {
        await findClientById(id);
        await validateClientDataRegist(nome, email, cpf);
        await checkEmailClientToUpdate(req, email);
        await checkCpfClientToUpdate(req, cpf);
        await updateClientIntoDatabase(req, nome, email, cpf, cep, rua, numero, bairro, cidade, estado);

        return res.status(200).json({ mensagem: 'Cliente atualizado!' });

    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    editClient,
}