const express = require('express');
const users = require('./controllers/users');

const routes = express()

routes.post('/usuario', users.userRegistration)

module.exports = routes;