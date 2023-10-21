const validateClientDataRegist = require('../../utils/validations/validateClientDataRegist')
const checkEmailClientToUpdate = require('../../utils/checkFunctions/checkClient/checkEmailClientToUpdate');
const checkCpfClientToUpdate = require('../../utils/checkFunctions/checkClient/checkCpfClientToUpdate');
const updateClientIntoDatabase = require('../../utils/insertFunctions/updateClientIntoDatabase');
const { findClientById } = require('../../utils/checkFunctions/checkClient/findClientById');

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