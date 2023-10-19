const knex = require('../dbConnection')

const listProducts = async (req, res) => {
  try {
    const { categoria_id } = req.query

    const query = knex('produtos')

    if (categoria_id) {
      query.where({ categoria_id })
    }

    const products = await query

    return res.status(200).json(products)

  } catch (error) {
    return res.status(error.code).json(error.message)
  }
}

module.exports = { listProducts }