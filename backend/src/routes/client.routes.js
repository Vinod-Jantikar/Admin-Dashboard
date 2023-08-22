const express = require('express');
const {getProducts, getCustomers, getTransaction} = require('../controllers/client.controller')

const router = express.Router();

router.get('/products', getProducts);
router.get('/customers', getCustomers);
router.get('/transaction', getTransaction);
module.exports = router