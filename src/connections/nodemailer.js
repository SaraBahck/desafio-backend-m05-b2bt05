require('dotenv').config();
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    ssl: { rejectUnauthorized: false },
    secureProtocol: "TLSv1_2_method"
})

module.exports = transporter
