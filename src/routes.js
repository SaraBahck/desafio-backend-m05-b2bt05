const express = require('express');
const { userRegistration, detailUser } = require('./controllers/users');
const { listCategories } = require('./controllers/categories');
const { userLogin } = require('./controllers/userLogin');
const authentication = require('./middlers/authentication');

const router = express();

router.get('/categoria', listCategories)
router.post('/usuario', userRegistration)
router.post('/login', userLogin)

router.use(authentication)

router.get('/usuario', detailUser)

module.exports = router;
