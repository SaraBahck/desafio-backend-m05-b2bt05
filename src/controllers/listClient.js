const knex = require('../dbConnection');


const listClient = async (req, res) => {

    try {
        const clients = await knex.select('*').from('clientes');
        return res.status(200).json({ clientes: clients });

    } catch (error) {

        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    listClient
}