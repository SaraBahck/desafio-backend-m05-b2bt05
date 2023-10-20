const validateUserDataLogin = async (email, senha) => {
  if (!email || !senha) {
    throw {
      code: 400,
      message: 'É obrigatório email e senha'
    }
  }
}
module.exports = validateUserDataLogin
