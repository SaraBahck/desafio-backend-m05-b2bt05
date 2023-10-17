const express = require('express');
const { userRegistration, detailUser } = require('./controllers/users');
const { listCategories } = require('./controllers/categories');
const { userLogin } = require('./controllers/userLogin');
const { editUser } = require('./controllers/editUser');
const authentication = require('./middlers/authentication');

const router = express();

router.get('/categoria', listCategories)
router.post('/usuario', userRegistration)
router.post('/login', userLogin)

router.use(authentication)

router.put('/usuario', editUser)
router.get('/usuario', detailUser)

module.exports = router;