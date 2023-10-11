const express = require('express');
const router = express.Router();

const { listCategories } = require('./controllers/categories');

router.get('/categoria', listCategories);

module.exports = router;