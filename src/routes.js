const express = require('express');
const { listCategories } = require('./controllers/categories/categories');
const { userRegistration } = require('./controllers/user/registUser');
const { userLogin } = require('./controllers/user/userLogin');
const authentication = require('./middlers/authentication');
const { detailUser } = require('./controllers/user/detailUser');
const { editUser } = require('./controllers/user/editUser');
const { detailProduct } = require('./controllers/products/detailProduct');
const { productRegistration } = require('./controllers/products/registProduct');
const { editProduct } = require('./controllers/products/editProduct');
const { listProducts } = require('./controllers/products/listProducts');
const { deleteProduct } = require('./controllers/products/deleteProduct');
const { registClient } = require('./controllers/client/registClient');
const { editClient } = require('./controllers/client/editClient');
const { listClient } = require('./controllers/client/listClient');
const { detailClient } = require('./controllers/client/detailClient');

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
router.post('/cliente', registClient)
router.put('/cliente/:id', editClient)

router.get('/cliente', listClient)
router.get('/cliente/:id', detailClient)

module.exports = router;
