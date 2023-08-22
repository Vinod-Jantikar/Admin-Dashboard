const express = require('express');
const {getProducts, getCustomers, getTransaction, getGeography} = require('../controllers/client.controller')

const router = express.Router();

router.get('/products', getProducts);
router.get('/customers', getCustomers);
router.get('/transaction', getTransaction);
router.get('/geography', getGeography)
module.exports = router