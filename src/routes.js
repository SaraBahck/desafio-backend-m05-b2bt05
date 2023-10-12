const express = require('express');
const router = express();

const users = require('./controllers/users');
const { listCategories } = require('./controllers/categories');

router.get('/categoria', listCategories);
router.post('/usuario', users.userRegistration);


module.exports = router;
