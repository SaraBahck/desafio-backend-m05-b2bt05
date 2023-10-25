const transporter = require('../../connections/nodemailer');
const compilerHtml = require('../../utils/sendEmails/compilerHtml');

const sendEmail = async (client) => {
    const html = await compilerHtml('./src/templates/sendEmail.html', {
        client: `${client.nome}`,
        text: `Seu pedido foi realizado com sucesso`,
        details: 'Detalhes sobre o pedido'
    })

    transporter.sendMail({
        from: 'Shop Easy <pdvshopeasy@gmail.com>',
        to: `${client.nome} <${client.email}>`,
        subject: 'Pedido realizado com sucesso',
        html
    })
}

module.exports = sendEmail