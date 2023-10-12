const express = require('express');
const router = express();

const users = require('./controllers/users');
const { listCategories } = require('./controllers/categories');
const { userLogin } = require('./controllers/userLogin');
const authentication = require('./middlers/authentication');

router.get('/usuario', users.detailUser);
router.get('/categoria', listCategories);
router.post('/login', userLogin)

router.use(authentication)


module.exports = router;
