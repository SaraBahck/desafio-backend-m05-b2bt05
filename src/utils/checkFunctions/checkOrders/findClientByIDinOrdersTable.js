const knex = require('../../../connections/dbConnection');


const findClientId = async (id) => {
  const client = await knex('pedidos').where('cliente_id', id)

  if (!client.length) {
    throw {
      code: 404,
      message: "Cliente não encontrado!"
    }
  }

  return client[0]
}


module.exports = { findClientId }