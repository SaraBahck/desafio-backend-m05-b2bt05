const express = require("express");
require('dotenv').config();
const app = express();


app.use(express.json())



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})