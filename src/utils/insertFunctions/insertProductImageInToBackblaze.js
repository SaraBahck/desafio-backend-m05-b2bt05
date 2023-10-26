const { uploadFile } = require("../../connections/backblaze");
const knex = require('../../connections/dbConnection')

const insertImageInToBackblaze = async (file, id) => {
  
  const image = await uploadFile(
    `produtos/${id}/${file.originalname}`,
    file.buffer,
    file.mimetype
  )

  product = await knex('produtos')
    .update({
      produto_imagem: image.url
    })
    .where({ id })
    .returning('*')

  return product[0]
}

module.exports = { insertImageInToBackblaze }