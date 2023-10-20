const express = require('express');
const { listCategories } = require('./controllers/categories');
const { userRegistration } = require('./controllers/registUser');
const { userLogin } = require('./controllers/userLogin');
const authentication = require('./middlers/authentication');
const { detailUser } = require('./controllers/detailUser');
const { editUser } = require('./controllers/editUser');
const { detailProduct } = require('./controllers/detailProduct');
const { productRegistration } = require('./controllers/registProduct');
const { editProduct } = require('./controllers/editProduct');
const { listProducts } = require('./controllers/listProducts');
const { deleteProduct } = require('./controllers/deleteProduct');
const { registClient } = require('./controllers/registClient');

const router = express();

router.get('/categoria', listCategories)
router.post('/usuario', userRegistration)
router.post('/login', userLogin)

router.use(authentication)

router.get('/usuario', detailUser)
router.put('/usuario', editUser)
router.get('/produto/:id', detailProduct)
router.post('/produto', productRegistration)
router.put('/produto/:id', editProduct)
router.get('/produto', listProducts)
router.delete('/produto/:id', deleteProduct)
router.post('/cliente', registClient);


module.exports = router;