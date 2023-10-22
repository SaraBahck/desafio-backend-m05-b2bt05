const joi = require('joi')

const clientJoi = joi.object({
  nome: joi.string().required().trim().messages({
    "any.required": "É necessário preencher o campo nome",
    "string.empty": "O campo nome não pode estar vazio",
    "string.trim": "O campo nome não pode conter apenas espaços em branco",
    "string.base": "O campo nome deve ser uma sequência de caracteres"
  }),
  email: joi.string().email().trim().required().messages({
    "string.email": "O email informado não é válido",
    "any.required": "É Obrigatório preencher o campo e-mail",
    "string.empty": "O campo e-mail é obrigatório",
  }),
  cpf: joi
    .string()
    .length(11)
    .required()
    .messages({
      "any.required": "O campo de CPF é obrigatório",
      "string.empty": "O campo CPF não pode estar vazio",
      "string.length": "O campo CPF deve ter exatamente 11 dígitos",
      "string.base": "O campo CPF deve ser uma string"
    }),
  cep: joi
    .number()
    .messages({
      "number.empty": "O campo CEP não pode estar vazio",
      "number.base": "O campo CEP deve ser uma sequência de numeros"
  }),
  rua: joi.string().messages({
    "string.empty": "O campo rua não pode estar vazio",
    "string.trim": "O campo rua não pode conter apenas espaços em branco",
    "string.base": "O campo rua deve ser uma sequencia de caracteres"
  }),
  numero: joi.number().messages({
    "number.empty": "O campo número não pode estar vazio",
    "number.base": "O campo número deve ser uma sequência de numeros"
  }),
  bairro: joi.string().trim().messages({
    "string.empty": "O campo bairro não pode estar vazio",
    "string.trim": "O campo bairro não pode conter apenas espaços vazios",
    "string.base": "O campo bairro deve ser uma string"
  }),
  cidade: joi.string().trim().messages({
    "string.empty": "O campo cidade não pode estar vazio",
    "string.trim": "O campo cidade não pode conter apenas espaços vazios",
    "string.base": "O campo cidade deve ser uma string"
  }),
  estado: joi.string().length(2).trim().messages({
    "string.empty": "O campo estado não pode estar vazio",
    "string.max": "O campo estado não pode conter mais de 2 caracteres",
    "string.length": "O campo estado deve ter exatamente 2 dígitos",
    "string.base": "O campo estado deve ser uma string"
  }),
})


module.exports = clientJoi