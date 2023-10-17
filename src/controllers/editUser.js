const bcrypt = require('bcrypt');
const knex = require('../dbConnection');

const editUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    const id = req.user.id
    if (!nome || !email || !senha) {
        return res.status(400).json(({
            mensagem: 'Por favor, preencha todos os campos!'
        }))
    }

    try {
        if (!nome || !email || !senha) {
            return res.status(400).json(msg('Por favor, preencha todos os campos.'))
        }

        const emailExists = await knex('usuarios').where({ email }).first()

        if (id !== emailExists.id) {
            return res.status(400).json({
                mensagem: 'Este email já existe!'
            });
        }

        const hashPass = await bcrypt.hash(senha, 10);

        await knex('usuarios')
            .where({ id })
            .update({
                nome,
                email,
                senha: hashPass
            });

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({
            mensagem: 'Erro interno do servidor'
        });
    }
}

module.exports = {
    editUser,
}