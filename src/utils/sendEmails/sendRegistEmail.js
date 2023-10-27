const knex = require('../../connections/dbConnection');
const transporter = require('../../connections/nodemailer');
const compilerHtml = require('../../utils/sendEmails/compilerHtml');

const sendEmail = async (pedidos_produtos, client) => {

    let details = "";
    let totalPrice = 0;

    for (let i = 0; i < pedidos_produtos.length; i++) {
        const id = pedidos_produtos[i].produto_id
        const productData = await knex.select('descricao', 'valor').from('produtos').where("id", id);

        const price = productData[0].valor / 100;
        const amount = pedidos_produtos[i].quantidade_produto;
        const total = price * amount;

        let product = `
            Produto: ${productData[0].descricao},
            Preço unitário: R$ ${price.toFixed(2)},
            Quantidade: ${amount} unidade(s), 
            Total: R$ ${total.toFixed(2)}
        `

        details = details + product + "\n"
        totalPrice += total
    }

    const html = await compilerHtml('./src/templates/sendEmail.html', {
        client: `${client.nome}`,
        text: `Seu pedido foi realizado com sucesso, segue detalhamento:`,
        details,
        totalPrice: totalPrice.toFixed(2)
    })
    try {
        transporter.sendMail({
            from: 'Shop Easy <pdvshopeasy@gmail.com>',
            to: `${client.nome} <${client.email}>`,
            subject: 'Pedido realizado com sucesso',
            html
        })
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
    }
}

module.exports = sendEmail
