const validateClientDataRegist = async (nome, email, cpf) => {
    if (!nome || !email || !cpf) {
        throw {
            code: 400,
            message: 'É obrigatório informar nome, email e cpf'
        }
    }
}

module.exports = validateClientDataRegist;