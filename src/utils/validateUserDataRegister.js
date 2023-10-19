const validateUserDataRegister = async (nome, email, senha) => {
    if (!nome || !email || !senha) {
      throw {
        code: 400,
        message: 'É obrigatório informar nome, email e senha'
      }
    }
}

module.exports = validateUserDataRegister