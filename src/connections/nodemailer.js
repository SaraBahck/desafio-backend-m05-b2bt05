const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    auth: {
        user: 'pdvshopeasy@gmail.com',
        pass: '62A4B45D4E8F61636A7474BA46DAA23B6008',
    },
    ssl : { rejectUnauthorized: false }
})

module.exports = transporter