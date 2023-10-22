const express = require('express');
const { listCategories } = require('./controllers/categories/categories');
const { userRegistration } = require('./controllers/user/registUser');
const { userLogin } = require('./controllers/user/userLogin');
const authentication = require('./middlewares/authentication');
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
const validacionSchema = require('./middlewares/validacionSchema');
const clientJoi = require('./schemas/client');
const productJoi = require('./schemas/product');
const loginJoi = require('./schemas/login');

const router = express();

router.get('/categoria', listCategories)
router.post('/usuario', userRegistration)
router.post('/login', validacionSchema(loginJoi), userLogin)

router.use(authentication)

router.get('/usuario', detailUser)
router.put('/usuario', editUser)

router.post('/produto', validacionSchema(productJoi), productRegistration)
router.put('/produto/:id', editProduct)
router.get('/produto', listProducts)
router.get('/produto/:id', detailProduct)
router.delete('/produto/:id', deleteProduct)

router.post('/cliente', validacionSchema(clientJoi), registClient)
router.put('/cliente/:id', editClient)
router.get('/cliente', listClient)
router.get('/cliente/:id', detailClient)

module.exports = router;
