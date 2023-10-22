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
    .number()
    .min(11)
    .required()
    .messages({
      "any.required": "O campo de CPF é obrigatório",
      "number.empty": "O campo CPF não pode está vazio",
      "number.max": "O campo só pode ter no máximo 11 dígitos",
      "number.min": "O campo só pode ter no mínimo 11 dígitos",
      "number.base": "O campo deve ser uma sequência de numeros"
    }),
  cep: joi
    .string()
    .messages({
      "string.empty": "O campo CEP não pode estar vazio",
      "string.pattern.base": "O campo CEP deve ser uma string",
      "string.base": "O CEP deve ser uma sequência de caracteres"
  }),
  rua: joi.string().trim().messages({
    "string.empty": "O campo rua não pode estar vazio",
    "string.trim": "O campo de rua não pode conter apenas espaços em branco",
    "string.base": "O campo de rua deve ser uma sequencia de caracteres"
  }),
  numero: joi.string().trim().messages({
    "string.empty": "O campo de númeor não pode estar vazio",
    "string.trim": "O campo número não pode conter apenas espaços vazios",
    "string.base": "O campo de número deve ser uma string"
  }),
  bairro: joi.string().trim().messages({
    "string.empty": "O campo de bairro não pode estar vazio",
    "string.trim": "O campo bairro não pode conter apenas espaços vazios",
    "string.base": "O campo de bairro deve ser uma string"
  }),
  cidade: joi.string().trim().messages({
    "string.empty": "O campo de cidade não pode estar vazio",
    "string.trim": "O campo cidade não pode conter apenas espaços vazios",
    "string.base": "O campo de cidade deve ser uma string"
  }),
  estado: joi.string().trim().regex(/^[A-Za-z]+$/).max(2).messages({
    "string.empty": "O campo de estado não pode estar vazio",
    "string.max": "O campo estado não pode conter mais de 2 caracteres",
    'string.pattern.base': 'O campo de estado deve conter apenas caracteres',
    "string.base": "O campo de estado deve ser uma string"
  }),
})


module.exports = clientJoi