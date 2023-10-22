const joi = require('joi')

const productJoi = joi.object({
  descricao: joi.string().required().trim().messages({
    "any.required": "É necessário preencher o campo descrição",
    "string.empty": "O campo descrição não pode estar vazio",
    "string.trim": "O campo descrição não pode conter apenas espaços em branco",
    "string.base": "O campo descrição deve ser uma sequência de caracteres"
  }),
  quantidade_estoque: joi
    .number()
    .required()
    .messages({
      "any.required": "O campo de quantidade de estoque é obrigatório",
      "number.empty": "O campo quantidade de estoque não pode está vazio",
      "number.base": "O campo deve ser uma sequência de numeros"
    }),
    valor: joi
    .number()
    .required()
    .messages({
      "any.required": "O campo valor é obrigatório",
      "number.empty": "O campo valor não pode está vazio",
      "number.base": "O campo deve ser uma sequência de numeros"
    }),
    categoria_id: joi
    .number()
    .required()
    .messages({
      "any.required": "O campo de id categoria é obrigatório",
      "number.empty": "O campo id categoria não pode está vazio",
      "number.base": "O campo deve ser uma sequência de numeros"
    }),
})


module.exports = productJoi