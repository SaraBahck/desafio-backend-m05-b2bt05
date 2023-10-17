const validateUserDataLogin = async (email, senha) => {
  if (!email || !senha) {
    throw {
      code: 404,
      message: 'É obrigatório email e senha'
    }
  }
}
module.exports = validateUserDataLogin
