const checkNegativeStock = async (stock) => {
  if (stock <= 0) {
    throw {
      code: 400,
      message: 'O produto não pode ser cadastrado com estoque negativo'
    }
  }
}

module.exports = checkNegativeStock