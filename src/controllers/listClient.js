const knex = require('../dbConnection');


const listClient = async (req, res) => {

    try {
        const clientes = await knex.select('*').from('clientes');
        return res.status(200).json({ clientes });

    } catch (error) {

        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    listClient
}