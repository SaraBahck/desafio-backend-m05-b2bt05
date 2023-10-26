const joi = require('joi')

const orderJoi = joi.object({
    cliente_id: joi.number().required().messages({
        "any.required": "É necessário preencher o campo id",
        "number.empty": "O campo id não pode estar vazio",
        "number.base": "O campo id deve ser uma sequência de números"
    }),
    observacao: joi.string().optional().allow(null, '').trim().messages({
        "string.base": "O campo observação deve ser uma sequência de caracteres"
    }),
    pedido_produtos: joi.array().items(joi.object({
        produto_id: joi.number().required().messages({
            "any.required": "É necessário preencher o campo produto_id",
            "number.empty": "O campo produto_id não pode estar vazio",
            "number.base": "O campo produto_id deve ser uma sequência de números"
        }),
        quantidade_produto: joi.number().required().messages({
            "any.required": "É necessário preencher o campo quantidade_produto",
            "number.empty": "O campo quantidade_produto não pode estar vazio",
            "number.base": "O campo quantidade_produto deve ser uma sequência de números"
        })
    })).min(1).required().messages({
        "array.min": "Em pedido_produtos, deve haver pelo menos um produto",
        "any.required": "O campo pedido_produtos é obrigatório"
    })
})

module.exports = orderJoi