const express = require('express');
const router = express.Router();

const users = require('./controllers/users');
const { listCategories } = require('./controllers/categories');

router.get('/usuario', users.detailUser);
router.get('/categoria', listCategories);


module.exports = router;
