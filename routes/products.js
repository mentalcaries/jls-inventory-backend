const express = require('express');
const router = express.Router();

const {getProduct, getFullStats} = require('../controllers/products');

router.get('/:coreId', getProduct);

router.get('/stats/:coreId', getFullStats)

module.exports = router;
