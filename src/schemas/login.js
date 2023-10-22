const joi = require('joi')

const loginJoi = joi.object({
    email: joi.string().email().required().trim().messages({
        "string.email": "O email não é válido",
        "any.required": "É necessário preencher o campo email",
        "string.empty": "O campo email não pode estar vazio",
        "string.trim": "O campo email não pode conter apenas espaços em branco",
        "string.base": "O campo email deve ser uma sequência de caracteres"
    }),
    senha: joi.string().min(5).required().messages({
        "string.min": "A senha deve ter pelo menos 5 caracteres",
        "any.required": "É Obrigatório preencher o campo senha",
        "string.empty": "O campo senha é obrigatório",
        "string.base": "O campo senha deve ser uma sequência de caracteres"
    })
});

module.exports = loginJoi