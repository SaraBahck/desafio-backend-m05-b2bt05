const knex = require('../dbConnection');
const bcrypt = require('bcrypt');

const userRegistration = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório");
    }

    if (!email) {
        return res.status(404).json("O campo email é obrigatório");
    }

    if (!senha) {
        return res.status(404).json("O campo senha é obrigatório");
    }

    try {
        const emailExists = await knex('usuarios')
            .where({ email })
            .first()
            ;

        if (emailExists) {
            return res.status(400).json("O email já existe");
        };

        const encryptedPassword = await bcrypt.hash(senha, 10);

        const register = await knex('usuarios')
            .insert({ nome, email, senha: encryptedPassword })
            .returning('*')
        ;
        
        if (!register[0]){
            return res.status(400).json("O usuário não foi cadastrado." );
        };

        return res.status(201).json(register[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const detailUser = async (req, res) => {
    try {

        const { id, nome, email } = req.usuario
        res.status(200).json({ id, nome, email })

    } catch (error) {
        res.status(404).json({ mensagem: `o servidor não pode encontrar o recurso solicitado.` })
    
    }
}


module.exports = {
    userRegistration,
    detailUser
}