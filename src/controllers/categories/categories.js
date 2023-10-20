const knex = require('../../dbConnection');

async function listCategories(req, res) {
    try {
        const categories = await knex.select('*').from('categorias');
        return res.status(200).json({ categories });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

module.exports = {
    listCategories
}